import Link from 'next/link';

import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MainNav() {
  return (
    <div className="flex">
      <Link href="/" className="mr-4 flex items-center space-x-2">
        <span className="font-heading font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
        {docsConfig.mainNav.map((item) => (
          <Link key={item.title} href={item.href} className={cn('transition-colors hover:text-foreground/80')}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
