'use client';

import { AlignJustify, Earth } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { MobileModeToggleButton } from '@/components/ui/mode-toggle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';
import { cn, scrollToSection } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={'ghost'} className="flex w-9 px-0 md:hidden">
          <AlignJustify className="size-5 fill-current" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="container pr-0">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
          <Earth className="mr-2 size-4" />
          <span className="text-md font-heading font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="container my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink className="border-b" key={item.href} href={item.href} onOpenChange={setOpen}>
                    {item.title}
                  </MobileLink>
                )
            )}
            <MobileModeToggleButton />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    scrollToSection(event);
    onOpenChange?.(false);
  };

  return (
    <Link href={href} onClick={handleLinkClick} className={cn(className)} {...props}>
      {children}
    </Link>
  );
}
