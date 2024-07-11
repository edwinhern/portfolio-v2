"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

import { RenderIf } from "@/components/common/render-if";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

import { USTimeFormatter } from "../../dashboard-config";

interface TimeCardProps extends PropsWithChildren {
  bgClassName: React.ComponentProps<"div">["className"];
  timeClassName: React.ComponentProps<"div">["className"];
}

const TimeCard: React.FC<TimeCardProps> = ({ bgClassName, children, timeClassName }) => {
  const [time, setTime] = useState<string | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(USTimeFormatter.format(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative col-span-1 row-span-1 size-full overflow-auto rounded-lg">
      {/* Background */}
      <div className={cn("absolute inset-0 h-full", bgClassName)} />

      {/* Time and location */}
      <div className={cn("relative z-10 flex h-full flex-col p-4", timeClassName)}>
        <div className="flex items-center space-x-2">
          <RenderIf
            fallback={
              <>
                <Skeleton className="size-2 rounded-full bg-current md:size-3" />
                <Skeleton className="h-6 w-20 md:h-8 md:w-32" />
              </>
            }
            when={Boolean(time)}
          >
            <div className="size-2 animate-pulse rounded-full bg-current md:size-3" />
            <div className="text-xl font-semibold md:text-3xl">{time}</div>
          </RenderIf>
        </div>

        <RenderIf fallback={<Skeleton className="mt-2 h-4 w-24 md:h-6 md:w-32" />} when={Boolean(time)}>
          <div className="text-lg text-current md:text-2xl">in Dallas, TX</div>
        </RenderIf>
      </div>

      {/* Additional content (e.g., sun or stars) */}
      {children}
    </div>
  );
};

export default TimeCard;
