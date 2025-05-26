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
  title: 'Forever Bloom - Invitación de Boda',
  description: '¡Estás invitado a celebrar con nosotros!'
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
        <video 
          className="videoFondo" 
          autoPlay 
          muted 
          loop 
          playsInline
        > 
          <source src="/Wedding.mp4" type="video/mp4" /> 
          Tu navegador no soporta el video. 
        </video>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
