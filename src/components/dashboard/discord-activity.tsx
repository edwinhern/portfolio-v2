'use client';

import type { Data } from 'use-lanyard';

import { Activity, useLanyard, useLanyardWS } from 'use-lanyard';

import { RenderIf } from '@/components/common/render-if';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { discordId } from './dashboard-config';
import { DiscordActivityCard } from './discord-activity-card';
import { DiscordStatus } from './discord-status';

export const DiscordActivity = () => {
  const lanyard = useLanyardWS(discordId, {});

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Discord activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Render if no data is present */}
        <RenderIf when={!Boolean(lanyard)}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="h-10 w-28 md:w-56" />
            </div>
            <Skeleton className="h-8 w-full" />
          </div>
        </RenderIf>

        <RenderIf when={Boolean(lanyard)}>
          <DiscordStatus data={lanyard as Data} />
          {/* Render if no activities */}
          <RenderIf when={!Boolean(lanyard?.activities)}>
            <Alert className="border-none bg-muted">
              <AlertDescription>No activities currently.</AlertDescription>
            </Alert>
          </RenderIf>

          {/* Render if activities */}
          <RenderIf
            when={Boolean(lanyard?.activities?.length === 1 && lanyard?.activities[0].name === 'Custom Status')}
          >
            {lanyard?.activities?.map(
              (activity: Activity, idx: number) =>
                activity.name === 'Custom Status' && (
                  <p className="text-sm text-muted-foreground" key={`${activity}-${idx}`}>
                    {activity.state}
                  </p>
                )
            )}
            <Alert className="border-none bg-muted">
              <AlertDescription>No activities currently.</AlertDescription>
            </Alert>
          </RenderIf>
        </RenderIf>

        {/* Render custom status including other activities */}
        <RenderIf
          when={Boolean(
            lanyard?.activities && lanyard?.activities.length > 0 && lanyard?.activities[0].name !== 'Custom Status'
          )}
        >
          {lanyard?.activities?.map(
            (activity: Activity, idx: number) =>
              activity.name === 'Custom Status' && (
                <p className="text-sm text-muted-foreground" key={`${activity}-${idx}`}>
                  {activity.state}
                </p>
              )
          )}
          {lanyard?.activities?.map(
            (activity: Activity, idx: number) =>
              activity.name !== 'Custom Status' && (
                <DiscordActivityCard activity={activity} data={lanyard as Data} key={idx} />
              )
          )}
        </RenderIf>
      </CardContent>
    </Card>
  );
};
