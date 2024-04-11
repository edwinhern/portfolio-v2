'use client';

import { Earth } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { useLocationHash } from '@/hooks/useLocationHash';
import { cn, scrollToSection, updateHistoryAndDispatchEvent } from '@/lib/utils';

export function MainNav() {
  const currentHash = useLocationHash();
  const isSelected = (href: string) => {
    return currentHash === href.substring(1) ? 'text-foreground' : 'text-foreground/60';
  };

  useEffect(() => {
    const handleInitialHashScroll = () => {
      const id = currentHash.substring(1);
      const element = document.getElementById(id);
      if (!id || !element) {
        updateHistoryAndDispatchEvent('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const navbarHeight = document.querySelector('header')?.offsetHeight ?? 0;
      const additionalOffset = 10; // Additional offset (e.g., for spacing)
      const startPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = startPosition - navbarHeight - additionalOffset;
      updateHistoryAndDispatchEvent(currentHash);
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    };

    if (currentHash) {
      window.addEventListener('load', handleInitialHashScroll);
    }

    return () => window.removeEventListener('load', handleInitialHashScroll);
  }, [currentHash]);

  return (
    <div className="flex">
      <Link href="/" onClick={scrollToSection} className="mr-4 flex items-center space-x-2">
        <Earth className="size-6" />
        <span className="font-heading text-lg font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={scrollToSection}
            className={cn('transition-colors hover:text-foreground/80', isSelected(item.href))}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
