type NavItem = {
	href: string;
	title: string;
};

export const MAIN_NAV_CONFIG: NavItem[] = [
	{
		href: "/#about-section",
		title: "About",
	},
	{
		href: "/#experience-section",
		title: "Experience",
	},
	{
		href: "/#projects-section",
		title: "Projects",
	},
	{
		href: "/dashboard",
		title: "Dashboard",
	},
] as const;
