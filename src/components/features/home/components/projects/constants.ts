export const GRID_LAYOUTS = {
	THREE_OR_SIX: "lg:grid-cols-3",
	DEFAULT: "lg:grid-cols-2",
} as const;

export const CARD_ANIMATION = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: { duration: 0.15 },
	},
	exit: {
		opacity: 0,
		transition: { delay: 0.2, duration: 0.15 },
	},
} as const;
