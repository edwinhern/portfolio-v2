import { memo } from "react";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HERO_SECTION_WORDS } from "../constants";
import { HeroActions } from "./hero-action";

export const HeroContent = memo(function HeroContent() {
	return (
		<PageHeader>
			<PageHeaderHeading>Edwin Hernandez</PageHeaderHeading>
			<PageHeaderDescription>
				<TypewriterEffect words={HERO_SECTION_WORDS} />
			</PageHeaderDescription>
			<HeroActions />
		</PageHeader>
	);
});
