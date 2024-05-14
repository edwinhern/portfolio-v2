'use client';

import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import { RenderIf } from '@/components/common/render-if';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

import { USTimeFormatter } from '../../dashboard-config';

interface TimeCardProps extends PropsWithChildren {
  className: React.ComponentProps<'div'>['className'];
}

const TimeCard: React.FC<TimeCardProps> = ({ children, className }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(USTimeFormatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative col-span-1 row-span-1 size-full overflow-hidden rounded-lg">
      {/* Background */}
      <div className={cn('absolute inset-0 h-full', className)} />

      {/* Time and location */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="mb-2 flex items-center space-x-2">
          <RenderIf
            fallback={
              <>
                <Skeleton className="size-3 rounded-full md:size-4" />
                <Skeleton className="h-6 w-20 md:h-8 md:w-32" />
              </>
            }
            when={Boolean(time)}
          >
            <div className="size-2 rounded-full bg-white md:size-4" />
            <div className="font-bold text-white md:text-3xl">{time}</div>
          </RenderIf>
        </div>

        <RenderIf fallback={<Skeleton className="h-4 w-24 md:h-6 md:w-32" />} when={Boolean(time)}>
          <div className="font-thin text-white md:text-2xl">in Dallas, TX</div>
        </RenderIf>
      </div>

      {/* Additional content (e.g., sun or stars) */}
      {children}
    </div>
  );
};

export default TimeCard;
