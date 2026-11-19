import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "company" field.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 200) : '';
  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 200) : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 5000) : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim().slice(0, 120) : '';

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please fill in your name, a valid email, and a message.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email is not configured yet.' }, { status: 500 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Website <website@irynasheremeta.com>',
      to: ['iryna@irynasheremeta.com'],
      reply_to: email,
      subject: subject ? `[Website] ${subject} — ${name}` : `[Website] New inquiry — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Could not send. Please try again or email me directly.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
