import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/ui/page-header";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const words = [
    "hey there!",
    "nice to meet you.",
    "my name is edwin.",
    "i am a computer engineer.",
    "i love sipping coffee.",
    "i also love to build apps!",
    "thanks for visiting!",
  ];
  return (
    <section className={cn("py-0", className)} data-testid="hero-section">
      <div className={cn("grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2")}>
        <Image
          alt="Picture of the author"
          className="m-auto mb-0 h-auto w-full max-w-md justify-center object-cover object-center lg:m-auto lg:max-w-xl"
          draggable={false}
          height={1000}
          priority
          src={siteConfig.assets.avatar}
          width={1200}
        />
        <PageHeader>
          <PageHeaderHeading>Edwin Hernandez</PageHeaderHeading>
          <PageHeaderDescription>
            <TypewriterEffect words={words} />
          </PageHeaderDescription>
          <PageActions>
            <a className={cn(buttonVariants())} download href={siteConfig.assets.resume}>
              Download Resume
            </a>
            <Link
              className={cn(buttonVariants({ variant: "outline" }))}
              href={siteConfig.links.github}
              rel="noreferrer"
              target="_blank"
            >
              <Icons.gitHub className="mr-2 size-4" />
              GitHub
            </Link>
          </PageActions>
        </PageHeader>
      </div>
    </section>
  );
}
