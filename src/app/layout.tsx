import type { Metadata } from 'next';
import './index.css';
import CursorTrail from './v2/components/CursorTrail';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.irynasheremeta.com'),
  alternates: { canonical: '/' },
  title: 'Iryna Sheremeta — Product designer & builder',
  description:
    'I build custom websites and tools for busy professionals. You explain the problem. I handle the rest.',
  openGraph: {
    title: 'Iryna Sheremeta — Product designer & builder',
    description:
      'I build custom websites and tools for busy professionals. You explain the problem. I handle the rest.',
    type: 'website',
    url: 'https://www.irynasheremeta.com/',
    siteName: 'Iryna Sheremeta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iryna Sheremeta — Product designer & builder',
    description:
      'I build custom websites and tools for busy professionals. You explain the problem. I handle the rest.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.irynasheremeta.com/#person',
      name: 'Iryna Sheremeta',
      jobTitle: 'Product Designer & AI Builder',
      url: 'https://www.irynasheremeta.com/',
      sameAs: ['https://www.linkedin.com/in/iryna-sheremeta-643316414'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Montréal',
        addressRegion: 'QC',
        addressCountry: 'CA',
      },
    },
    {
      '@type': 'ProfessionalService',
      name: 'Iryna Sheremeta — Product Design & AI Building',
      url: 'https://www.irynasheremeta.com/',
      founder: { '@id': 'https://www.irynasheremeta.com/#person' },
      areaServed: 'Canada',
      description:
        'Custom websites, internal tools and AI workflows for small businesses — from problem to solution.',
    },
  ],
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
  // Only inject on actual Vercel preview deployments. Locally, .env.local can carry
  // VERCEL_ENV=preview, which renders the toolbar unconfigured and triggers a React
  // "state update on a component that hasn't mounted yet" dev-overlay issue.
  const shouldInjectToolbar =
    process.env.VERCEL_ENV === 'preview' && process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..600;1,8..60,300..600&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&family=Outfit:wght@200;300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CursorTrail />
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}
