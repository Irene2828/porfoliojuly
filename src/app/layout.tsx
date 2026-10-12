import type { Metadata } from 'next';
import './index.css';
import CursorTrail from './v2/components/CursorTrail';

export const metadata: Metadata = {
  title: 'Iryna Sheremeta — Product Designer & Builder',
  description:
    'I turn vague problems into working tools — from first prototype to something real people use.',
  openGraph: {
    title: 'Iryna Sheremeta — Product Designer & Builder',
    description:
      'I turn vague problems into working tools — from first prototype to something real people use.',
    type: 'website',
  },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

import { VercelToolbar } from '@vercel/toolbar/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = process.env.VERCEL_ENV === 'preview';

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorTrail />
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
