import { GitHubRepositoryHoverCard } from './github-repository-hover-card';

interface ProjectsProps {
  repositories: GithubRepo[];
}

export const Projects: React.FC<ProjectsProps> = ({ repositories }) => {
  return (
    <section className="flex flex-col py-16" data-testid="project-section" id="projects-section">
      <h2 className="scroll-m-20 text-center font-heading text-3xl font-extrabold tracking-tight md:text-start lg:text-4xl">
        Projects
      </h2>
      <GitHubRepositoryHoverCard items={repositories} />
    </section>
  );
};
