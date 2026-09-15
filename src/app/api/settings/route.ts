import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import db from '@/lib/db';

async function isAuthenticated() {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin_auth');
  return auth?.value === 'authenticated';
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const stmt = db.prepare('SELECT key, value FROM Settings');
    const rows = stmt.all() as { key: string; value: string }[];
    const settings = rows.reduce((acc, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {} as Record<string, string>);

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const insertStmt = db.prepare('INSERT INTO Settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value');
    
    const transaction = db.transaction((settings: Record<string, string>) => {
      for (const [key, value] of Object.entries(settings)) {
        insertStmt.run(key, value || '');
      }
    });

    transaction(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving settings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
