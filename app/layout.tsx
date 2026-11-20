import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import { type ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { OpenPanelProvider } from '@/components/OpenPanelProvider';
import { ThemeFavicon } from '@/components/ThemeFavicon';
import { ThemeProvider } from '@/components/ThemeProvider';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GV Travel | Family cruise vacations, and the trips around them',
  description:
    'Cruise planning for families, plus Disney vacations and other family itineraries when a sailing is not the right fit.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeFavicon />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} flex min-h-screen flex-col antialiased`}
        suppressHydrationWarning
      >
        <OpenPanelProvider />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
