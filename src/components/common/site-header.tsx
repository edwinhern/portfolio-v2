'use client';

import Link from 'next/link';

import { MainNav } from '@/components/common/main-nav';
import { MobileNav } from '@/components/common/mobile-nav';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { ModeToggleButton } from '@/components/ui/mode-toggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">Add command </div> */}
          <div className="flex items-center">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-9 px-0')}>
                <Icons.gitHub className="size-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-9 px-0')}>
                <Icons.linkedIn className="size-4 fill-current" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <ModeToggleButton />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
