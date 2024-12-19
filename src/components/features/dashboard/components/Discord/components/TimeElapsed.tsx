"use client";

import { useEffect, useState } from "react";

import { discordTimestamp } from "../Discord.utils";

interface TimeElapsedProps {
	unixTimestamp: number;
}

export const TimeElapsed: React.FC<TimeElapsedProps> = ({ unixTimestamp }) => {
	const [timeAgo, setTimeAgo] = useState(discordTimestamp(unixTimestamp));

	useEffect(() => {
		const getUpdateInterval = (diff: number) => {
			if (diff >= 86400000) return 3600000; // 1 hour for days
			if (diff >= 3600000) return 60000; // 1 minute for hours
			if (diff >= 60000) return 1000; // 1 second for minutes
			return 1000; // 1 second for seconds
		};

		const diff = Date.now() - unixTimestamp;
		const updateInterval = getUpdateInterval(diff);

		const intervalId = setInterval(() => {
			setTimeAgo(discordTimestamp(unixTimestamp));
		}, updateInterval);

		return () => clearInterval(intervalId);
	}, [unixTimestamp]);

	return <>{timeAgo}</>;
};
