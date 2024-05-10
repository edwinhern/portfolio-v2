'use client';

import { useMemo, useState } from 'react';
import Balancer from 'react-wrap-balancer';

import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

import { CardHeader } from '../ui/card';

interface GitHubRepositoryHoverCardProps {
  className?: string;
  items: GithubRepo[];
}

export const GitHubRepositoryHoverCard: React.FC<GitHubRepositoryHoverCardProps> = ({ className, items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  const gridLayoutClass = useMemo(() => {
    const length = items.length;
    if (length === 3 || length === 6) {
      return 'lg:grid-cols-3';
    } else {
      return 'lg:grid-cols-2';
    }
  }, [items.length]);
  return (
    <div className={cn('grid grid-cols-1 py-4 md:grid-cols-2', gridLayoutClass, className)}>
      {items.map((item, idx) => (
        <Reveal
          key={item.repo}
          transition={{ delay: idx / 30, duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link
            className="group relative block size-full p-2"
            href={item.link}
            key={item.link}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  className="absolute inset-0 block size-full rounded-lg bg-card-foreground text-card-foreground shadow-sm"
                  exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.15 } }}
                  initial={{ opacity: 0 }}
                  layoutId="hoverBackground"
                />
              )}
            </AnimatePresence>
            <Card>
              <CardHeader className="p-0">
                <CardTitle>{item.repo}</CardTitle>
                <CardDescription className="text-muted-foreground dark:text-muted">{item.description}</CardDescription>
              </CardHeader>
              <CardDescription className="flex items-center gap-1 ">
                <Star className="size-5" />
                {item.stars}
              </CardDescription>
            </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  );
};

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm md:p-4',
        className
      )}
    >
      <div className="relative z-50">
        <div className="flex flex-col space-y-1.5 p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <Balancer as="h4" className={cn('mt-4 font-heading text-lg font-bold md:text-2xl', className)}>
      {children}
    </Balancer>
  );
};
export const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn('text-base/loose text-sm leading-7 md:text-lg/loose', className)}>{children}</p>;
};
