import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { TypewriterEffectSmooth } from '../ui/typewriter-effect';

export function HeroSection() {
  const name = [{ text: 'Edwin' }, { text: 'Hernandez' }];

  return (
    <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2">
      <Image
        draggable={false}
        src={siteConfig.assets.avatar}
        className="mx-auto mb-0 mt-auto h-auto w-full max-w-md justify-center object-cover object-center lg:m-auto lg:max-w-xl"
        alt="Picture of the author"
        width={1200}
        height={1000}
        quality={100}
        loading="eager"
        priority
      />
      <PageHeader>
        <PageHeaderHeading>
          <TypewriterEffectSmooth words={name} />
        </PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageActions>
          <a href={siteConfig.assets.resume} download className={cn(buttonVariants())}>
            Download Resume
          </a>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 size-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
