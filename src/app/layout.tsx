import type { Metadata } from 'next';
import './index.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
