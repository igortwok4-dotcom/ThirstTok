'use client';

import './globals.css';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Инициализация Telegram Web App (full screen, ready для Mini App)
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand(); // На весь экран
    }
  }, []);

  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>ThirstTok</title>
      </head>
      <body className="h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
