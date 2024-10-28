import type { Activity, Data } from "use-lanyard";

import { ActivityCard } from "./ActivityCard";

interface ActivityFeedProps {
	activities: Activity[];
	lanyard: Data;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities, lanyard }) => {
	return (
		<>
			{activities?.map(
				(activity, idx) =>
					activity.name !== "Custom Status" && (
						<ActivityCard activity={activity} data={lanyard as Data} key={`${activity.name}-${idx}`} />
					),
			)}
		</>
	);
};
