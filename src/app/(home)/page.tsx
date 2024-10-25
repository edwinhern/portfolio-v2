import { About } from "@/components/about";
import { Experience } from "@/components/features/experience/experience";
import { HeroSection } from "@/components/features/hero/hero-section";
import { Projects } from "@/components/features/projects/projects";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SectionLayout } from "@/components/ui/section-layout";
import { fetchGithubRepos } from "@/lib/github";

export default async function Home() {
	const githubRepos = await fetchGithubRepos();

	return (
		<>
			<AuroraBackground>
				<HeroSection />
			</AuroraBackground>
			<SectionLayout className="container relative">
				<About />
				<Experience />
				<Projects repositories={githubRepos} />
			</SectionLayout>
		</>
	);
}
