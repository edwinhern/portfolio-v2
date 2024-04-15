import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Poppins, Raleway } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@/components/common/providers';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--heading-font',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--body-font',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords,
  authors: [{ name: 'Edwin Hernandez', url: siteConfig.links.linkedin }],
  creator: 'Edwin Hernandez',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.opImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.opImage],
    creator: '@edwinhern15',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: `/site.webmanifest`,
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-body antialiased', raleway.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col bg-background">{children}</div>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
