import type { Icons } from "@/components/ui/icons";

declare global {
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
