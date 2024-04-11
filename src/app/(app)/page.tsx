import Link from 'next/link';

import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="container relative">
      <PageHeader>
        <h1 className="font-light">My Name is</h1>
        <PageHeaderHeading>Edwin Hernandez .</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.descriptions}</PageHeaderDescription>
        <PageActions>
          <Link href="/" className={cn(buttonVariants())}>
            Get Started
          </Link>
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

      <Experience />
      <Projects />
    </div>
  );
}
