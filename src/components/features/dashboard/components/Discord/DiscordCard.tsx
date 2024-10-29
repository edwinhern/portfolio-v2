"use client";

import type { Data, DiscordUser } from "use-lanyard";

import { RenderIf } from "@/components/common/render-if";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { ActivityFeed } from "./components/ActivityFeed";
import { ActivitySkeleton } from "./components/ActivitySkeleton";
import { StatusDisplay } from "./components/StatusDisplay";
import { useDiscordStatus } from "./hooks/useDiscordStatus";

interface DiscordCardProps {
	userId: bigint;
}

export const DiscordCard: React.FC<DiscordCardProps> = ({ userId }) => {
	const { isLoading, status, activities, user } = useDiscordStatus(userId);

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
					<CardTitle className="font-medium text-base">Discord activity</CardTitle>
				</CardHeader>

				<CardContent className="flex flex-col gap-4">
					{/* Render if no data is present */}
					<RenderIf when={isLoading}>
						<ActivitySkeleton />
					</RenderIf>

					<RenderIf when={Boolean(status)}>
						<StatusDisplay user={user as DiscordUser} status={status} />

						{/* Render if no activities */}
						<RenderIf when={!activities?.length}>
							<Alert className="border-none bg-secondary">
								<AlertDescription>No activities currently.</AlertDescription>
							</Alert>
						</RenderIf>

						{/* Render activities */}
						<RenderIf when={Boolean(activities?.some((a) => a?.name !== "Custom Status"))}>
							<ActivityFeed activities={activities || []} />
						</RenderIf>
					</RenderIf>
				</CardContent>
			</Card>
		</Reveal>
	);
};
