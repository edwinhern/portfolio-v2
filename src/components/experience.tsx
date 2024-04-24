import { ExperienceCard } from '@/components/ui/experience-card';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { experiences } from '@/config/experience';

export function Experience() {
  return (
    <section id="experience-section" className="flex flex-col items-start justify-start gap-4 py-20 sm:py-24 md:mx-16">
      <div className="flex flex-col gap-4 md:hidden">
        <h2 className="mb-4 w-full scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
          Where I&apos;ve Worked
        </h2>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.title}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
            skills={experience.skills}
          />
        ))}
      </div>
      <TracingBeam className="hidden px-6 md:flex md:flex-col">
        <div className="flex flex-col gap-4">
          <h2 className="mb-4 w-full scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            Where I&apos;ve Worked
          </h2>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
