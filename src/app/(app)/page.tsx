import Link from 'next/link';

import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Stack } from '@/components/stack';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="container relative min-h-lvh">
      <PageHeader>
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open
          Source.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link target="_blank" rel="noreferrer" href={'/'} className={cn(buttonVariants({ variant: 'outline' }))}>
            <Icons.gitHub className="mr-2 size-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>

      <Experience />
      <Projects />
      <Stack />
    </main>
  );
}
