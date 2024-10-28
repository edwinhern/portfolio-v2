import { TracingBeam } from "@/components/ui/tracing-beam";

import { experiences } from "./constants";
import { ExperienceCard } from "./experience-card";

export function Experience() {
	return (
		<section className="flex flex-col items-start justify-start gap-4 md:mx-16">
			<TracingBeam className="flex flex-col">
				<div className="flex flex-col gap-4">
					<h1 className="text-3xl lg:text-4xl" id="experience-section">
						Where I&apos;ve Worked
					</h1>
					{experiences.map((experience, idx) => (
						<ExperienceCard
							company={experience.company}
							date={experience.date}
							description={experience.description}
							employmentType={experience.employmentType}
							image={experience.image}
							index={idx}
							key={`${experience.title}-${idx}`}
							skills={experience.skills}
							title={experience.title}
						/>
					))}
				</div>
			</TracingBeam>
		</section>
	);
}
