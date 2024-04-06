'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { ModeToggleButton } from '@/components/ui/mode-toggle';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="size-6" />
            <span className="inline-block font-bold">Edwinhern</span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
            <Link
              href="/#experience"
              scroll
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/#experience' ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              Experience
            </Link>
            <Link
              href="/#projects"
              scroll
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname?.startsWith('/#projects') ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              Projects
            </Link>
            <Link
              href="/#stack"
              scroll
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname?.startsWith('/#stack') ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              Stack
            </Link>
            <Link
              href="/"
              scroll
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname?.startsWith('/#resume') ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              Resume
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">Add command to search through page</div> */}
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
          </div>
        </div>
      </div>
    </header>
  );
}
