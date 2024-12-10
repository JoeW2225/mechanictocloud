import type { Metadata } from "next";
import { Platypi } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Providers } from './providers'
import "./globals.css";

export const metadata: Metadata = {
  title: "Mechanic to Cloud",
  description: "Welcome to my portfolio website!",
  openGraph: {
    title: "Mechanic to Cloud",
    description: "Welcome to my portfolio website!",
    url: "https://www.mechanictocloud.com",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

const platypi = Platypi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-platypi',
}) 

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MtC" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body  className={`${platypi.variable} antialiased bg-[rgb(var(--background))] text-[rgb(var(--foreground))]`}>
      <AppRouterCacheProvider>
          <Providers>
                {children}
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
