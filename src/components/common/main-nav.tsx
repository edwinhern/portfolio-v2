import Link from 'next/link';

import { mainNav } from '@/config/mainNav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MainNav() {
  return (
    <div className="flex">
      <Link href="/" className="mr-4">
        <span className="font-heading text-lg font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="mt-[0.1rem] hidden items-center gap-6 text-sm md:flex">
        {mainNav.map((item) => (
          <Link key={item.title} href={item.href} className={cn('transition-colors hover:text-foreground/80')}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
