import type { Data } from "use-lanyard";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface DiscordStatusProps {
  data: Data;
}

export const DiscordStatus: React.FC<DiscordStatusProps> = ({ data }) => {
  const status = (status: Data["discord_status"]) => {
    const statusMap: Record<Data["discord_status"], { cn: string; text: string }> = {
      dnd: { cn: "text-rose-400", text: "Do Not Disturb" },
      idle: { cn: "text-amber-400", text: "Idle" },
      offline: { cn: "text-muted", text: "Offline" },
      online: { cn: "text-emerald-500", text: "Online" },
    };

    return statusMap[status] || statusMap.offline;
  };

  const statusInfo = status(data.discord_status);

  return (
    <div className="flex flex-col items-baseline gap-4 sm:flex-row">
      <div className="flex gap-2">
        <div className="inline-flex items-center justify-center">
          <Avatar>
            <AvatarImage
              src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}`}
            />
            <AvatarFallback className="animate-pulse" />
          </Avatar>
        </div>
        <div>
          <div className="font-bold text-lg">{data.discord_user.global_name}</div>
          <div className="text-muted text-xs">{data.discord_user.username}</div>
        </div>
      </div>
      <div className={cn("flex gap-2", statusInfo.cn)}>
        <Icons.discord />
        <span className="text-sm">{statusInfo.text}</span>
      </div>
    </div>
  );
};
