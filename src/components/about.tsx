import { CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function About() {
	return (
		<section className="container space-y-4" data-testid="about-section">
			<h2 className="text-3xl lg:text-4xl" id="about-section">
				About Me
			</h2>
			<Reveal
				transition={{ duration: 0.4 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<CardDescription className="space-y-4 text-foreground">
					<p>Hi 👋 I&apos;m a software engineer, gamer, soccer player, and minimalist based in Dallas, Texas.</p>
					<p>
						As a first-generation Mexican-American, I strive to succeed and push my legacy forward through my work and
						personal projects.
					</p>
					<blockquote className="mb-4 border-l-2 pl-6 italic">
						&quot;<span className="text-primary">échele con ganas</span>&quot; - a constant reminder to give my all
					</blockquote>
					<p>
						I developed things as a Full-Stack Software Engineer at Tesla. Previously, I worked as a Frontend Software
						Engineer Intern at Tesla, Backend Software Engineer Intern at JPMorgan Chase & Co., and a Software Engineer
						Intern at SEO.
					</p>
				</CardDescription>
			</Reveal>
		</section>
	);
}
