import { ThemeProvider } from '@/components/common/ThemeProvider/ThemeProvider';
import { env } from '@/config/env';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: 'PulseWatch — Every Check. Every Pulse. Always Aware.',
    template: '%s · PulseWatch',
  },
  description:
    'PulseWatch is a website and server monitoring platform. Track uptime, response times and incidents for everything you run.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
