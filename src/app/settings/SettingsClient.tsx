'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import BookingsList from './BookingsList';

export default function SettingsClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  
  const [envFlags, setEnvFlags] = useState({
    openAiApiKey: false,
    openWaUrl: false,
    openWaApiKey: false,
    openWaSessionId: false,
  });

  const [settings, setSettings] = useState({
    openWaUrl: '',
    openWaApiKey: '',
    openWaSessionId: '',
    openAiApiKey: '',
    aiSystemPrompt: 'You are an AI receptionist for Zenith Dentistry. Your goal is to collect the user\'s name, phone number, and preferred date/time to book an appointment. Once you have all the info, use the confirm_booking tool to finalize the appointment.'
  });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          if (data._env) {
            setEnvFlags(data._env);
          }
          setSettings(prev => ({ ...prev, ...data }));
        }
      } catch (err) {
        console.error('Failed to load settings', err);
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setMessage('Settings saved successfully!');
      } else {
        setMessage('Failed to save settings.');
      }
    } catch (err) {
      setMessage('An error occurred while saving.');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.refresh();
  };

  if (loading) return <div className="text-center py-10">Loading settings...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Configuration</h2>
        <button onClick={handleLogout} className="text-sm text-red-600 hover:underline">
          Logout
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            OpenWA URL {envFlags.openWaUrl && <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded ml-2">Configured via ENV</span>}
          </label>
          <input
            type="url"
            name="openWaUrl"
            value={settings.openWaUrl}
            onChange={handleChange}
            placeholder="e.g. https://whatsapp-agent-o1zh.onrender.com"
            className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 disabled:text-gray-500"
            disabled={envFlags.openWaUrl}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            OpenWA Session ID {envFlags.openWaSessionId && <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded ml-2">Configured via ENV</span>}
          </label>
          <input
            type="text"
            name="openWaSessionId"
            value={settings.openWaSessionId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 disabled:text-gray-500"
            disabled={envFlags.openWaSessionId}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            OpenWA API Key {envFlags.openWaApiKey && <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded ml-2">Configured via ENV</span>}
          </label>
          <input
            type="password"
            name="openWaApiKey"
            value={settings.openWaApiKey}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 disabled:text-gray-500"
            disabled={envFlags.openWaApiKey}
          />
        </div>

        <hr className="my-6" />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            OpenAI API Key {envFlags.openAiApiKey && <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded ml-2">Configured via ENV</span>}
          </label>
          <input
            type="password"
            name="openAiApiKey"
            value={settings.openAiApiKey}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md disabled:bg-gray-100 disabled:text-gray-500"
            disabled={envFlags.openAiApiKey}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">AI System Prompt</label>
          <textarea
            name="aiSystemPrompt"
            value={settings.aiSystemPrompt}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
        
        {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
      </form>

      <hr className="my-8" />
      
      <BookingsList />
    </div>
  );
}
