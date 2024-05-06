'use client';

import type { Data } from 'use-lanyard';

import { env } from '@/env';
import { Activity, useLanyardWS } from 'use-lanyard';

import { RenderIf } from '@/components/common/render-if';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { DiscordActivityCard } from './discord-activity-card';
import { DiscordStatus } from './discord-status';

const NoDataSkeleton = () => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <Skeleton className="size-10 rounded-full" />
      <Skeleton className="h-10 w-28 md:w-56" />
    </div>
    <Skeleton className="h-8 w-full" />
  </div>
);

const ActivityFeed = ({ activities, lanyard }: { activities: Activity[]; lanyard: Data }) => (
  <>
    {activities.map(
      (activity, idx) =>
        activity.name !== 'Custom Status' && (
          <DiscordActivityCard activity={activity} data={lanyard as Data} key={idx} />
        )
    )}
  </>
);

export const DiscordActivity = () => {
  const lanyard = useLanyardWS(`${BigInt(env.NEXT_PUBLIC_DISCORD_ID || 1)}`);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Discord activity</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* Render if no data is present */}
        <RenderIf when={!lanyard}>
          <NoDataSkeleton />
        </RenderIf>

        <RenderIf when={Boolean(lanyard)}>
          <DiscordStatus data={lanyard as Data} />

          {/* Render if no activities */}
          <RenderIf when={!lanyard?.activities?.length}>
            <Alert className="border-none bg-primary">
              <AlertDescription>No activities currently.</AlertDescription>
            </Alert>
          </RenderIf>

          {/* Render activities */}
          <RenderIf when={Boolean(lanyard?.activities?.some((a) => a.name !== 'Custom Status'))}>
            <ActivityFeed activities={lanyard?.activities || []} lanyard={lanyard as Data} />
          </RenderIf>
        </RenderIf>
      </CardContent>
    </Card>
  );
};
