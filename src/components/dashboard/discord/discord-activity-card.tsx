import type { Activity, Data, Spotify } from 'use-lanyard';

import Image from 'next/image';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ElapsedTime } from './timer/elapsed-time';

interface DiscordActivityCardProps {
  activity: Activity;
  data: Data;
}

function ActivityImage({ activity, data }: { activity: Activity; data: Data }) {
  const isSpotify = activity.assets?.large_image?.startsWith('spotify:');
  const imageUrl = isSpotify
    ? (data.spotify as Spotify)?.album_art_url
    : activity.assets?.large_image
      ? `https://media.discordapp.net/external/${activity.assets.large_image.replace('mp:external/', '')}`
      : `https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=2048`;

  if (!activity.assets && !activity.application_id) {
    return (
      <Image
        alt="Discord Icon"
        className="flex size-20 items-center justify-center rounded bg-card object-cover"
        height={1000}
        src={'/assets/gifs/discord.gif'}
        width={1200}
      />
    );
  }

  return (
    <Image
      alt="Activity Image"
      className="size-20 rounded object-cover"
      height={1000}
      src={imageUrl as string}
      width={1200}
    />
  );
}

export function DiscordActivityCard({ activity, data }: DiscordActivityCardProps) {
  return (
    <Alert className="flex flex-col items-center gap-3 border-none bg-primary text-center sm:flex-row sm:text-left">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <ActivityImage activity={activity} data={data} />
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

        <AlertDescription className="line-clamp-1">
          {activity.timestamps?.start ? <ElapsedTime unixTimestamp={activity.timestamps.start} /> : null}
        </AlertDescription>
      </div>
    </Alert>
  );
}
