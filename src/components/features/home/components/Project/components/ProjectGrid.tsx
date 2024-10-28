"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import type { GitHubRepository } from "@/lib/api/github/types";
import { cn } from "@/lib/utils";
import { CARD_ANIMATION } from "../Project.constants";
import { useGridLayout } from "../hooks/useGridLayout";
import { ProjectRepositoryCard } from "./ProjectRepositoryCard";

interface ProjectGrid {
	repositories: GitHubRepository[];
}

export const ProjectGrid: React.FC<ProjectGrid> = ({ repositories }) => {
	const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
	const gridLayoutClass = useGridLayout(repositories.length);

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2", gridLayoutClass)}>
			{repositories.map((item, idx) => (
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
					<ProjectRepositoryCard repository={item} />
				</Link>
			))}
		</div>
	);
};
