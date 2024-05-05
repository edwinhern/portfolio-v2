import type { API, Data } from 'use-lanyard';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/ui/icons';

interface DiscordStatusProps {
  data: Data;
}

export const DiscordStatus: React.FC<DiscordStatusProps> = ({ data }) => {
  const status = (status: Data['discord_status']) => {
    const statusMap: Record<Data['discord_status'], { color: string; text: string }> = {
      dnd: { color: '#F04747', text: 'Do Not Disturb' },
      idle: { color: '#FAA61A', text: 'Idle' },
      offline: { color: 'gray', text: 'Offline' },
      online: { color: '#49d073', text: 'Online' },
    };

    return statusMap[status] || { color: 'gray', text: 'Offline' };
  };

  const statusInfo = status(data.discord_status);

  return (
    <div className="flex flex-col  items-baseline  gap-4 sm:flex-row">
      <div className="flex gap-2">
        <div className="flex items-center justify-center">
          <Avatar>
            <AvatarImage
              src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}`}
            />
            <AvatarFallback>EH</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="text-lg font-bold">{data.discord_user.global_name}</div>
          <p className="text-xs text-muted-foreground">{data.discord_user.username}</p>
        </div>
      </div>
      <div className="flex gap-2" style={{ color: statusInfo.color }}>
        <Icons.discord />
        <span className="text-sm">{statusInfo.text}</span>
      </div>
    </div>
  );
};
