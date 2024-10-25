import type { Icons } from "@/components/ui/icons";

declare global {
	/**
	 * @description Represents duration of work experience.
	 **/
	type ExperienceDate = {
		end: string;
		start: string;
	};

	/**
	 * @description Represents an item in the work experience section.
	 **/
	type ExperienceItem = {
		company: string;
		date: ExperienceDate;
		description: string;
		employmentType: EmploymentType;
		image?: string;
		skills?: string[];
		title: string;
	};

	/**
	 * @description Represents an item in the navigation menu.
	 **/
	type NavItem = {
		disabled?: boolean;
		external?: boolean;
		href: string;
		icon?: keyof typeof Icons;
		label?: string;
		title: string;
	};
}
