import Image from "next/image";
import type { Activity, Data, Spotify } from "use-lanyard";

interface ActivityImageProps {
	activity: Activity;
}

const DISCORD_FALLBACK_GIF = "/assets/gifs/discord.gif";
const IMAGE_DIMENSIONS = {
	height: 1024,
	width: 1024,
};

export const ActivityImage: React.FC<ActivityImageProps> = ({ activity }) => {
	const hasValidAssets = activity.assets || activity.application_id;

	if (!hasValidAssets) {
		return (
			<Image
				src={DISCORD_FALLBACK_GIF}
				alt="Discord Icon"
				className="flex size-20 items-center justify-center rounded bg-card object-cover"
				priority
			/>
		);
	}

	const getActivityImageUrl = (): string => {
		if (activity.assets?.large_image) {
			return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`;
		}

		return `https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=2048`;
	};

	return (
		<Image
			src={getActivityImageUrl()}
			alt={`${activity.name || "Activity"} Icon`}
			className="size-20 rounded object-cover"
			{...IMAGE_DIMENSIONS}
			priority
		/>
	);
};
