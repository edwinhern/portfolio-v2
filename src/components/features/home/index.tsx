import React from "react";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Separator } from "@/components/ui/separator";
import type { GitHubRepository } from "@/lib/api/github/types";
import { About, Experience, Hero, Projects } from "./components";

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
				<Projects repositories={repositories} />
			</div>
		</>
	);
};
