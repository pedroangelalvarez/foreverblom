import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Dancing_Script } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const dancingScript = Dancing_Script({
  variable: '--font-cursive',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Forever Bloom - Wedding Invitation',
  description: 'You are invited to celebrate with us!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
