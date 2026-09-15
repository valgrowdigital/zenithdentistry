'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      if (res.ok) {
        router.refresh(); // This will re-run the server component and show settings
      } else {
        const data = await res.json();
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto mt-10">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Passcode</label>
        <input
          type="password"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter passcode"
          required
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Authenticating...' : 'Login'}
      </button>
    </form>
  );
}
