import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quote Roulette',
  description: 'Get inspired with random quotes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

