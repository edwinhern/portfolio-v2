import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Raleway } from "next/font/google";

import { ThemeProvider } from "@/components/common/providers";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { siteConfig } from "@/config/site";
import "@/globals.css";

const raleway = Raleway({
	subsets: ["latin"],
	variable: "--heading-font",
});

export const metadata: Metadata = {
	authors: [{ name: "Edwin Hernandez", url: siteConfig.links.linkedin }],
	creator: "Edwin Hernandez",
	description: siteConfig.description,
	icons: {
		apple: "/favicons/apple-touch-icon.png",
		icon: "/favicons/favicon.ico",
		shortcut: "/favicons/favicon-16x16.png",
	},
	keywords: siteConfig.keywords,
	manifest: "/site.webmanifest",
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
		locale: "en_US",
		siteName: siteConfig.name,
		title: siteConfig.name,
		type: "website",
		url: siteConfig.url,
	},
	title: {
		default: "Edwin Hernandez - Coffee Lover",
		template: `%s | ${siteConfig.name}`,
	},
	twitter: {
		card: "summary_large_image",
		creator: "@edwinhern15",
		description: siteConfig.description,
		images: [siteConfig.opImage],
		title: siteConfig.name,
	},
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={raleway.variable}>
				<ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
					<SiteHeader />
					<main className="relative flex min-h-screen flex-col">
						<div className="flex-1 overflow-hidden">{children}</div>
					</main>
					<SiteFooter />
					<SpeedInsights />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
