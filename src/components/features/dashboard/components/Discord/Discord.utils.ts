interface TimeUnit {
	value: number;
	unit: string;
	threshold: number;
}

const formatUnit = (value: number, unit: string): string => `${value} ${unit}${value !== 1 ? "s" : ""}`;

const getTimeUnits = (seconds: number): TimeUnit[] => [
	{ value: Math.floor(seconds / 86400), unit: "day", threshold: 86400 },
	{ value: Math.floor((seconds % 86400) / 3600), unit: "hour", threshold: 3600 },
	{ value: Math.floor((seconds % 3600) / 60), unit: "minute", threshold: 60 },
	{ value: seconds % 60, unit: "second", threshold: 1 },
];

export function discordTimestamp(unixTimestamp: number): string {
	const seconds = Math.floor((Date.now() - unixTimestamp) / 1000);
	const timeUnits = getTimeUnits(seconds);

	const primaryUnit = timeUnits.find((unit) => unit.value > 0) ?? timeUnits[3];
	const secondaryUnit = timeUnits[timeUnits.indexOf(primaryUnit) + 1];

	const primary = formatUnit(primaryUnit.value, primaryUnit.unit);

	if (!secondaryUnit?.value) return primary;
	return `${primary}, ${formatUnit(secondaryUnit.value, secondaryUnit.unit)}`;
}
