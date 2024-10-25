import type { Icons } from "@/components/ui/icons";

type NavItem = {
	disabled?: boolean;
	external?: boolean;
	href: string;
	icon?: keyof typeof Icons;
	label?: string;
	title: string;
};

export const mainNav: NavItem[] = [
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
];
