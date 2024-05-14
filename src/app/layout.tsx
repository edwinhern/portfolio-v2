import type { Metadata } from 'next';

import { PropsWithChildren } from 'react';
import { Provider as ReactWrapProvider } from 'react-wrap-balancer';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Poppins, Raleway } from 'next/font/google';

import { ThemeProvider } from '@/components/common/providers';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

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
  authors: [{ name: 'Edwin Hernandez', url: siteConfig.links.linkedin }],
  creator: 'Edwin Hernandez',
  description: siteConfig.description,
  icons: {
    apple: '/favicons/apple-touch-icon.png',
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
  },
  keywords: siteConfig.keywords,
  manifest: `/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: siteConfig.opImage,
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: 'website',
    url: siteConfig.url,
  },
  title: {
    default: 'Edwin Hernandez - Coffee Lover',
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@edwinhern15',
    description: siteConfig.description,
    images: [siteConfig.opImage],
    title: siteConfig.name,
  },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-body antialiased', raleway.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          <ReactWrapProvider>
            <div className="relative flex min-h-screen flex-col bg-background">{children}</div>
          </ReactWrapProvider>
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
