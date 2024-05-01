import { ExperienceCard } from '@/components/ui/experience-card';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { experiences } from '@/config/experience';

export function Experience() {
  return (
    <section className="flex flex-col items-start justify-start gap-4 py-16 md:mx-16" id="experience-section">
      <div className="flex flex-col gap-4 md:hidden">
        <h2 className="w-full scroll-m-20 text-center font-heading text-3xl font-extrabold tracking-tight lg:text-4xl">
          Where I&apos;ve Worked
        </h2>
        {experiences.map((experience, idx) => (
          <ExperienceCard
            company={experience.company}
            date={experience.date}
            description={experience.description}
            employmentType={experience.employmentType}
            key={`${experience.title}-${idx}`}
            skills={experience.skills}
            title={experience.title}
          />
        ))}
      </div>
      <TracingBeam className=" hidden md:flex md:flex-col">
        <div className="flex flex-col gap-4">
          <h2 className="scroll-m-20 font-heading text-3xl font-extrabold tracking-tight lg:text-4xl">
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
