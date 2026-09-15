import { NextResponse } from 'next/server';
import db from '@/lib/db';
import OpenAI from 'openai';

// Helper to get settings
function getSettings() {
  const stmt = db.prepare('SELECT key, value FROM Settings');
  const rows = stmt.all() as { key: string; value: string }[];
  return rows.reduce((acc, row) => {
    acc[row.key] = row.value;
    return acc;
  }, {} as Record<string, string>);
}

// Helper to send message via OpenWA
async function sendWhatsAppMessage(to: string, text: string, settings: Record<string, string>) {
  const { openWaUrl, openWaApiKey, openWaSessionId } = settings;
  if (!openWaUrl) return;

  try {
    const res = await fetch(`${openWaUrl.replace(/\/$/, '')}/api/sendText`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': openWaApiKey || '',
      },
      body: JSON.stringify({
        session: openWaSessionId || 'default',
        to: to,
        text: text
      }),
    });
    
    if (!res.ok) {
      console.error('Failed to send WA message', await res.text());
    }
  } catch (error) {
    console.error('Error sending WA message:', error);
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    
    // Simple verification (OpenWA webhook payload)
    // We only care about new messages that are not from the bot itself
    if (payload.event !== 'onMessage' || !payload.data) {
      return NextResponse.json({ success: true, message: 'Ignored event' });
    }

    const msg = payload.data;
    if (msg.fromMe || msg.isGroupMsg || msg.type !== 'chat') {
      return NextResponse.json({ success: true, message: 'Ignored message type' });
    }

    const senderNumber = msg.from;
    const userText = msg.body;

    const settings = getSettings();
    if (!settings.openAiApiKey) {
      console.error('OpenAI API Key not configured');
      return NextResponse.json({ success: false, message: 'OpenAI not configured' }, { status: 500 });
    }

    const openai = new OpenAI({ apiKey: settings.openAiApiKey });

    // 1. Fetch conversation history
    const getConvStmt = db.prepare('SELECT messages FROM Conversations WHERE phoneNumber = ?');
    const convRow = getConvStmt.get(senderNumber) as { messages: string } | undefined;
    
    let messages: import('openai/resources/chat/completions').ChatCompletionMessageParam[] = [];
    if (convRow && convRow.messages) {
      messages = JSON.parse(convRow.messages);
    } else {
      // Add system prompt if new conversation
      messages = [
        { role: 'system', content: settings.aiSystemPrompt || 'You are a helpful assistant.' }
      ];
    }

    // Append new user message
    messages.push({ role: 'user', content: userText });

    // 2. Call OpenAI with tools
    const tools = [
      {
        type: 'function' as const,
        function: {
          name: 'confirm_booking',
          description: 'Confirm an appointment booking once all required information is gathered from the user.',
          parameters: {
            type: 'object',
            properties: {
              name: { type: 'string', description: 'Name of the patient' },
              date: { type: 'string', description: 'Date of the appointment (YYYY-MM-DD)' },
              time: { type: 'string', description: 'Time of the appointment (HH:MM AM/PM)' },
              service: { type: 'string', description: 'The service they need (e.g., checkup, cleaning)' },
            },
            required: ['name', 'date', 'time']
          }
        }
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      tools: tools,
      tool_choice: 'auto',
    });

    const responseMessage = completion.choices[0].message;
    messages.push(responseMessage);

    let finalReplyText = responseMessage.content;

    // 3. Handle Tool Calls (Booking confirmation)
    if (responseMessage.tool_calls) {
      for (const toolCall of responseMessage.tool_calls) {
        if (toolCall.type === 'function' && toolCall.function.name === 'confirm_booking') {
          const args = JSON.parse(toolCall.function.arguments);
          
          // Save to database
          const insertBooking = db.prepare(
            'INSERT INTO Bookings (phoneNumber, name, date, time, service) VALUES (?, ?, ?, ?, ?)'
          );
          insertBooking.run(senderNumber, args.name, args.date, args.time, args.service || 'General');

          // Add tool response to messages
          messages.push({
            role: 'tool',
            tool_call_id: toolCall.id,
            content: 'Booking successfully saved to database.'
          });

          // Get final text response from AI after tool call
          const secondCompletion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages
          });
          
          const secondResponseMessage = secondCompletion.choices[0].message;
          finalReplyText = secondResponseMessage.content;
          messages.push(secondResponseMessage);
        }
      }
    }

    // 4. Save conversation back to DB
    const updateConvStmt = db.prepare(
      'INSERT INTO Conversations (phoneNumber, messages) VALUES (?, ?) ON CONFLICT(phoneNumber) DO UPDATE SET messages=excluded.messages'
    );
    updateConvStmt.run(senderNumber, JSON.stringify(messages));

    // 5. Send message back via OpenWA
    if (finalReplyText) {
      await sendWhatsAppMessage(senderNumber, finalReplyText, settings);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
