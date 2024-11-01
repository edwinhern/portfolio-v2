import { AuroraBackground } from "@/components/ui/aurora-background";
import { Separator } from "@/components/ui/separator";
import type { GitHubRepository } from "@/lib/api/github/types";
import { About, Experience, Hero, Project } from "./components";

interface HomePageProps {
	repositories: GitHubRepository[];
}

export const HomePage = ({ repositories }: HomePageProps) => {
	return (
		<>
			<AuroraBackground>
				<Hero />
			</AuroraBackground>

			<div className="container relative">
				<Separator />
				<About />
				<Separator />
				<Experience />
				<Separator />
				<Project repositories={repositories} />
			</div>
		</>
	);
};
