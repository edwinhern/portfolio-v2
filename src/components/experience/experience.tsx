import { TracingBeam } from '@/components/ui/tracing-beam';

import { ExperienceCard } from './experience-card';
import { experiences } from './experience-config';

export function Experience() {
  return (
    <section
      className="flex flex-col items-start justify-start gap-4 py-16 md:mx-16"
      data-testid="experience-section"
      id="experience-section"
    >
      <TracingBeam className="flex flex-col">
        <div className="flex flex-col gap-4">
          <h2 className="scroll-m-20 text-center font-heading text-3xl font-extrabold tracking-tight md:text-left lg:text-4xl">
            Where I&apos;ve Worked
          </h2>
          {experiences.map((experience, idx) => (
            <ExperienceCard
              company={experience.company}
              date={experience.date}
              description={experience.description}
              employmentType={experience.employmentType}
              image={experience.image}
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
