import { GitHubRepositoryHoverCard } from '@/components/ui/github-repository-hover-card';

interface ProjectsProps {
  repositories: GithubRepo[];
}

export const Projects: React.FC<ProjectsProps> = ({ repositories }) => {
  return (
    <section className="flex flex-col py-16" id="projects-section">
      <h2 className="scroll-m-20 font-heading text-3xl font-extrabold tracking-tight lg:text-4xl">Projects</h2>
      <GitHubRepositoryHoverCard items={repositories} />
    </section>
  );
};
