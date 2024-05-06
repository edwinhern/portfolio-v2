import type { Data, Spotify } from 'use-lanyard';

import Image from 'next/image';
import { Activity } from 'use-lanyard';

import { RenderIf } from '@/components/common/render-if';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Icons } from '@/components/ui/icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ElapsedTime } from './timer/elapsed-time';
import { ProgressBar } from './timer/progress-bar';

interface DiscordActivityCardProps {
  activity: Activity;
  data: Data;
}

export function DiscordActivityCard({ activity, data }: DiscordActivityCardProps) {
  return (
    <Alert className="flex flex-col items-center gap-3 border-none bg-primary text-center sm:flex-row sm:text-left">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <RenderIf
              when={Boolean(
                activity.assets && activity.assets.large_image && activity.assets.large_image.startsWith('spotify:')
              )}
            >
              <Image
                alt="Activity image 01"
                className="size-20 rounded object-cover"
                height={90}
                src={(data.spotify as Spotify)?.album_art_url as string}
                width={90}
              />
            </RenderIf>

            <RenderIf
              when={Boolean(
                activity.assets &&
                  activity.application_id &&
                  !(activity.assets.large_image && activity.assets.large_image.startsWith('spotify:'))
              )}
            >
              <Image
                alt="Activity image 02"
                className="size-20 rounded object-cover"
                height={1000}
                src={`https://media.discordapp.net/external/${activity?.assets?.large_image.replace('mp:external/', '')}`}
                width={1200}
              />
            </RenderIf>

            <RenderIf when={Boolean(!activity.assets && activity.application_id)}>
              <Image
                alt="Activity image"
                className="size-20 rounded object-cover"
                height={1000}
                src={`https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=2048`}
                width={1200}
              />
            </RenderIf>

            <RenderIf when={!activity.assets && !activity.application_id}>
              <div className="flex size-20 items-center justify-center rounded bg-card object-cover">
                <Icons.discord className="size-12" />
              </div>
            </RenderIf>
          </TooltipTrigger>
          <TooltipContent>
            {activity.assets ? activity.assets.large_text || activity.name : activity.name}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div>
        <AlertTitle className="line-clamp-1">{activity.name}</AlertTitle>
        <AlertDescription className="line-clamp-1">{activity.details || null}</AlertDescription>
        <AlertDescription className="line-clamp-1">{activity.state || null}</AlertDescription>
        <AlertDescription className="flex justify-center sm:block">
          {activity.timestamps && activity.timestamps.start && activity.timestamps.end ? (
            <ProgressBar end={activity.timestamps.end} start={activity.timestamps.start} />
          ) : null}
        </AlertDescription>
        <AlertDescription className="line-clamp-1">
          {activity.timestamps && activity.timestamps.start ? (
            <ElapsedTime unixTimestamp={activity.timestamps.start} />
          ) : null}
        </AlertDescription>
      </div>
    </Alert>
  );
}
