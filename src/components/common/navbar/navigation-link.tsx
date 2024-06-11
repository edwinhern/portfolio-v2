'use client';

import React, { memo } from 'react';

import { ArrowUpRightIcon, AtSignIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = memo(({ href, icon, title }) => {
  const pathname = usePathname();
  const iconCmp = icon || <AtSignIcon />;

  const isInternalLink = href.startsWith('/');
  if (!isInternalLink) {
    return (
      <a
        className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-accent hover:text-accent-foreground"
        href={href}
        key={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="inline-flex items-center gap-2 font-medium">
          {iconCmp} {title}
        </span>
        <ArrowUpRightIcon size={16} />
      </a>
    );
  }

  // TODO: Fix Highligh Active Link
  let isActive = false;

  console.log(pathname, href.split('/')[1]);
  if (pathname?.length > 0) {
    const splittedPathname = pathname.split('/');
    const currentPathname = splittedPathname[1] ?? '';
    isActive = currentPathname === href.split('/')[1];
  }

  return (
    <Link
      className={cn(buttonVariants({ variant: 'outline' }), 'items-start justify-start border-none font-heading')}
      href={href}
      key={href}
    >
      <span className="flex items-center gap-2">
        {iconCmp}
        <span className={cn('font-medium')}>{title}</span>
      </span>
    </Link>
  );
});

NavigationLink.displayName = 'NavigationLink';
