import type { Metadata } from "next";
import { Platypi } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Providers } from './providers'
import "./globals.css";

const platypi = Platypi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-platypi',
}) 

export const metadata: Metadata = {
  title: "Mechanic to Cloud",
  description: "Welcome to my portfolio website!",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body  className={`${platypi.variable} antialiased bg-[rgb(var(--background))] text-[rgb(var(--foreground))]`}>
        <Providers>
            <AppRouterCacheProvider>
              {children}
            </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
