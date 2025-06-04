import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ReduxProvider from './providers/reduxProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Red Tetrix - Play, Connect, Have Fun',
  description: 'A modern multiplayer Tetris game with exciting features',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReduxProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen bg-main overflow-x-hidden`}
        >
          {children}
          <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </body>
      </ReduxProvider>
    </html>
  );
}
