'use client';

import { useMemo, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

import { RenderIf } from '@/components/common/render-if';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
              <CardTitle className="font-heading text-xl md:text-2xl">
                <h2>{item.repo}</h2>
              </CardTitle>

              <CardDescription>
                <RenderIf fallback={item.description} when={item.description.length > 100}>
                  {`${item.description.substring(0, 100)}...`}
                </RenderIf>
              </CardDescription>
            </CardHeader>
            <CardDescription className="flex items-center gap-1 text-sm/normal">
              <Star className="size-5" />
              {item.stars}
            </CardDescription>
          </Card>
        </Link>
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
