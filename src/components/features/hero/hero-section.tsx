"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const words = [
	"hey there!",
	"nice to meet you.",
	"my name is edwin.",
	"i am a computer engineer.",
	"i love sipping coffee.",
	"i also love to build apps!",
	"thanks for visiting!",
];

export const HeroSection = memo(function HeroSection() {
	return (
		<section className={cn("container relative py-0")}>
			<div className={cn("grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2")}>
				<HeroImage />
				<HeroContent />
			</div>
		</section>
	);
});

const HeroImage = memo(function HeroImage() {
	return (
		<Image
			alt="Picture of the author"
			className="m-auto mb-0 h-auto w-full max-w-md justify-center object-cover object-center lg:m-auto lg:max-w-xl"
			draggable={false}
			height={1000}
			priority
			src={siteConfig.assets.avatar}
			width={1200}
		/>
	);
});

const HeroContent = memo(function HeroContent() {
	return (
		<PageHeader>
			<PageHeaderHeading>Edwin Hernandez</PageHeaderHeading>
			<PageHeaderDescription>
				<TypewriterEffect words={words} />
			</PageHeaderDescription>
			<HeroActions />
		</PageHeader>
	);
});

const HeroActions = memo(function HeroActions() {
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
