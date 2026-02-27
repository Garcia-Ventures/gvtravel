import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeFavicon } from '@/components/ThemeFavicon';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import { type ReactNode } from 'react';
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
  title: 'GV Travel | Bespoke Journeys & Expertly Charted Adventures',
  description:
    'Boutique travel concierge specializing in curated cruise vacations and extraordinary family itineraries.',
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
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
