import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { PropsWithChildren } from "react";

import { SiteFooter, SiteHeader } from "@/components/common/navigation";
import { RootLayoutProvider } from "../providers";

interface BaseLayoutProps extends PropsWithChildren {
	className?: string;
}

export function BaseLayout({ children, className }: Readonly<BaseLayoutProps>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={`${GeistSans.variable} ${GeistMono.variable}`}>
				<RootLayoutProvider>
					<SiteHeader />
					<main className={`relative flex min-h-screen flex-col ${className}`}>
						<div className="flex-1 overflow-hidden">{children}</div>
					</main>
					<SiteFooter />
				</RootLayoutProvider>
			</body>
		</html>
	);
}
