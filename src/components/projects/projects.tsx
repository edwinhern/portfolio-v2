import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { GitHubRepositoryHoverCard } from './github-repository-hover-card';

interface ProjectsProps {
  repositories: GithubRepo[];
}

export const Projects: React.FC<ProjectsProps> = ({ repositories }) => {
  return (
    <section className="flex flex-col" data-testid="project-section">
      <h1 className="text-3xl lg:text-4xl" id="projects-section">
        Projects
      </h1>
      <GitHubRepositoryHoverCard items={repositories} />
      <Link className="flex justify-end text-sm underline" href={siteConfig.links.githubRepositories}>
        See More...
      </Link>
    </section>
  );
};
