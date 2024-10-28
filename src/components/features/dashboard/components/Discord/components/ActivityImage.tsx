import Image from "next/image";
import type { Activity, Data, Spotify } from "use-lanyard";

interface ActivityImageProps {
	activity: Activity;
	data: Data;
}

export const ActivityImage: React.FC<ActivityImageProps> = ({ activity, data }) => {
	const isSpotify = activity.assets?.large_image?.startsWith("spotify:");
	const imageUrl = isSpotify
		? (data.spotify as Spotify)?.album_art_url
		: activity.assets?.large_image
			? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
			: `https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=2048`;

	if (!activity.assets && !activity.application_id) {
		return (
			<Image
				alt="Discord Icon"
				className="flex size-20 items-center justify-center rounded bg-card object-cover"
				height={1000}
				src={"/assets/gifs/discord.gif"}
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
};
