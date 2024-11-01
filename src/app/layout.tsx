import type { Metadata } from "next";

import { BaseLayout } from "@/components/common/layouts/BaseLayout";
import { siteConfig } from "@/config/site";
import "@/globals.css";

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

export default function RootLayout({ children }: React.PropsWithChildren) {
	return <BaseLayout>{children}</BaseLayout>;
}
