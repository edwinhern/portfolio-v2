import Link from "next/link";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { PageActions } from "@/components/ui/page-header";
import { siteConfig } from "@/config/site";

export const HeroAction = memo(function HeroActions() {
	return (
		<PageActions>
			<Button asChild>
				<a download href={siteConfig.assets.resume}>
					Download Resume
				</a>
			</Button>
			<Button variant="outline" asChild>
				<Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
					<Icons.gitHub className="mr-2 size-4" />
					GitHub
				</Link>
			</Button>
		</PageActions>
	);
});
