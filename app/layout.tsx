'use client';

import './globals.css';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Инициализация TG Mini App — full screen и ready
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <html lang="ru" className="h-full bg-black">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>ThirstTok 🔥</title>
      </head>
      <body className="h-full m-0 p-0 overflow-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
