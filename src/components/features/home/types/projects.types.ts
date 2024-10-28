import type { GitHubRepository } from "@/lib/api/github/types";

export interface ProjectsProps {
	repositories: GitHubRepository[];
}

export interface ProjectCardProps {
	repository: GitHubRepository;
	className?: string;
}
