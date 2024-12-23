import Link from "next/link";

import { siteConfig } from "@/config/site";
import type { GitHubRepository } from "@/lib/api/github/types";
import { ProjectGrid } from "./components/ProjectGrid";

interface ProjectsProps {
	repositories: GitHubRepository[];
}

export const Project: React.FC<ProjectsProps> = ({ repositories }) => {
	return (
		<section className="md:space-y-4">
			<h2 className="text-3xl lg:text-4xl" id="projects-section">
				Projects
			</h2>
			<ProjectGrid repositories={repositories} />
			<Link className="mt-2 flex justify-end text-sm underline" href={siteConfig.links.githubRepositories}>
				See More...
			</Link>
		</section>
	);
};
