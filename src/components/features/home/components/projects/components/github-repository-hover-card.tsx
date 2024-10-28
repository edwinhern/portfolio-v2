"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { CARD_ANIMATION } from "../constants";
import { useGridLayout } from "../hooks/useGridLayout";
import type { GitHubRepositoryHoverCardProps } from "../types";
import { RepositoryCard } from "./repository-card";

export const GitHubRepositoryHoverCard: React.FC<GitHubRepositoryHoverCardProps> = ({ className, items }) => {
	const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
	const gridLayoutClass = useGridLayout(items.length);

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2", gridLayoutClass, className)}>
			{items.map((item, idx) => (
				<Link
					className="group relative block size-full p-2"
					href={item.link}
					key={item.link}
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								{...CARD_ANIMATION}
								className="absolute inset-0 block size-full rounded-lg bg-card-foreground text-card-foreground shadow-sm"
								layoutId="hoverBackground"
							/>
						)}
					</AnimatePresence>
					<RepositoryCard repository={item} />
				</Link>
			))}
		</div>
	);
};
