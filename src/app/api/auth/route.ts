import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();

    if (passcode === '202515') {
      const cookieStore = await cookies();
      cookieStore.set('admin_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Invalid passcode' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, message: 'Internal error' }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_auth');
  return NextResponse.json({ success: true });
}
