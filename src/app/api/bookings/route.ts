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
    const stmt = db.prepare('SELECT * FROM Bookings ORDER BY createdAt DESC');
    const bookings = stmt.all();
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
