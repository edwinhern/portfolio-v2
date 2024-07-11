"use client";

import type { Activity, Data } from "use-lanyard";

import { useLanyardWS } from "use-lanyard";

import { RenderIf } from "@/components/common/render-if";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Skeleton } from "@/components/ui/skeleton";

import { DiscordActivityCard } from "./discord-activity-card";
import { DiscordStatus } from "./discord-status";

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
    {activities?.map(
      (activity, idx) =>
        activity.name !== "Custom Status" && (
          <DiscordActivityCard activity={activity} data={lanyard as Data} key={`${activity.name}-${idx}`} />
        ),
    )}
  </>
);

export const DiscordActivity = () => {
  const userID = BigInt("196399908771725312");
  const lanyard = useLanyardWS(`${userID}`);

  return (
    <Reveal
      className="relative flex flex-1"
      initial="visible"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-medium">Discord activity</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {/* Render if no data is present */}
          <RenderIf when={!lanyard}>
            <NoDataSkeleton />
          </RenderIf>

          <RenderIf when={Boolean(lanyard?.discord_status)}>
            <DiscordStatus data={lanyard as Data} />

            {/* Render if no activities */}
            <RenderIf when={!lanyard?.activities?.length}>
              <Alert className="border-none bg-secondary">
                <AlertDescription>No activities currently.</AlertDescription>
              </Alert>
            </RenderIf>

            {/* Render activities */}
            <RenderIf when={Boolean(lanyard?.activities?.some((a) => a?.name !== "Custom Status"))}>
              <ActivityFeed activities={lanyard?.activities || []} lanyard={lanyard as Data} />
            </RenderIf>
          </RenderIf>
        </CardContent>
      </Card>
    </Reveal>
  );
};
