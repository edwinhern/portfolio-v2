import React, { type ReactNode } from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ children, className, ...rest }) => {
	const childrenArray = React.Children.toArray(children);

	return (
		<div className={cn(className)} {...rest}>
			{childrenArray.map((child, index) => (
				<React.Fragment key={`${child?.toLocaleString()}-${index}`}>
					<Separator />
					{child}
				</React.Fragment>
			))}
		</div>
	);
};
