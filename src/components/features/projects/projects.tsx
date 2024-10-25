import Link from "next/link";

import { siteConfig } from "@/config/site";
import type { GitHubRepository } from "@/lib/api/github/types";
import { GitHubRepositoryHoverCard } from "./github-repository-hover-card";

interface ProjectsProps {
	repositories: GitHubRepository[];
}

export const Projects: React.FC<ProjectsProps> = ({ repositories }) => {
	return (
		<section className="md:space-y-4" data-testid="project-section">
			<h2 className="text-3xl lg:text-4xl" id="projects-section">
				Projects
			</h2>
			<GitHubRepositoryHoverCard items={repositories} />
			<Link className="mt-2 flex justify-end text-sm underline" href={siteConfig.links.githubRepositories}>
				See More...
			</Link>
		</section>
	);
};
