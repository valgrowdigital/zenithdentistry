import { cookies } from 'next/headers';
import SettingsClient from './SettingsClient';
import LoginForm from './LoginForm';

export default async function SettingsPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin_auth');
  const isAuthenticated = auth?.value === 'authenticated';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Backend</h1>
        {isAuthenticated ? <SettingsClient /> : <LoginForm />}
      </div>
    </div>
  );
}
