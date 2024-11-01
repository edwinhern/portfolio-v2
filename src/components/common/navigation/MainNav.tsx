import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MAIN_NAV_CONFIG } from "./navigation.constants";

export function MainNav() {
	return (
		<div className="flex">
			<Link className="mr-4" href="/">
				<span className="font-bold font-heading text-lg">{siteConfig.siteTitle}</span>
			</Link>
			<nav className="mt-[0.099rem] hidden items-center gap-6 text-sm md:flex">
				{MAIN_NAV_CONFIG.map(({ href, title }) => (
					<Link className={cn("transition-colors hover:text-foreground/80")} href={href} key={href}>
						{title}
					</Link>
				))}
			</nav>
		</div>
	);
}
