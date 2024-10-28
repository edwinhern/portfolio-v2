import { cn } from "@/lib/utils";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export const Card = ({ children, className }: CardProps) => {
	return (
		<div className={cn("relative z-20 size-full rounded-md bg-card text-card-foreground shadow-sm", className)}>
			<div className="relative z-50">
				<div className="flex flex-col space-y-1 p-3.5">{children}</div>
			</div>
		</div>
	);
};
