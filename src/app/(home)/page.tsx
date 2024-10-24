import { About } from "@/components/about";
import { Experience } from "@/components/features/experience/experience";
import { Projects } from "@/components/features/projects/projects";
import { HeroSection } from "@/components/hero-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SectionLayout } from "@/components/ui/section-layout";
import { fetchGithubRepos } from "@/lib/api/github";

export default async function Home() {
	const githubRepos = await fetchGithubRepos();

	return (
		<>
			<AuroraBackground>
				<HeroSection className="container relative" />
			</AuroraBackground>
			<SectionLayout className="container relative">
				<About />
				<Experience />
				<Projects repositories={githubRepos} />
			</SectionLayout>
		</>
	);
}
