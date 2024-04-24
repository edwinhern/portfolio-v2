import Link from 'next/link';

import { mainNav } from '@/config/mainNav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MainNav() {
  return (
    <div className="flex items-center">
      <Link href="/" className="mr-4 flex">
        <span className="font-heading font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="mt-[0.2rem] hidden gap-4 text-sm md:flex lg:gap-6">
        {mainNav.map((item) => (
          <Link key={item.title} href={item.href} className={cn('transition-colors hover:text-foreground/80')}>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
