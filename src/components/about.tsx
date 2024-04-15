import Link, { LinkProps } from 'next/link';

import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

interface TextUrlProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const TextUrl = ({ className, children, href }: TextUrlProps) => (
  <Link href={href} className={cn('text-primary hover:underline', className)} target="_blank" rel="noopener noreferrer">
    &nbsp;{children}
  </Link>
);

export function About() {
  return (
    <section className="flex flex-col items-start justify-start gap-4 py-16">
      <h2 id="about-section" className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        About Me
      </h2>
      <Reveal
        className="text-md lg:text-base lg:font-medium"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
      >
        <p className="lg:text-xl">
          Hello! I&apos;m a Software Engineer based in the vibrant tech hubs of Dallas and Austin, TX.
        </p>
        <br />

        <p className="leading-8 lg:text-lg">
          Since diving into coding in 2019, I&apos;ve loved the magic of turning ideas into reality. From humble
          beginnings with C++ to crafting my
          <TextUrl href="https://edwinhern.github.io/edwinhern/">first portfolio</TextUrl>, every line of code has been
          a step in my journey of constant growth.
          <br />
          <br />
          Resilience is key; despite initial setbacks in securing internships, my determination led me to seize
          opportunities that sharpened my full-stack capabilities at
          <TextUrl href=" https://www.seo-usa.org/">SEO</TextUrl> and
          <TextUrl href="https://www.jpmorganchase.com/">JPMorgan Chase & Co.</TextUrl> Today, I channel that same
          dedication into enhancing
          <TextUrl href="https://www.tesla.com/">Tesla&apos;s</TextUrl> payroll systems as a P2 Software Engineer.
          <br />
          <br />
          My current focus is on building software that makes a difference—high-quality, scalable applications that are
          as enjoyable to use as they are efficient. With each project, I aim to bridge the gap between technology and
          user-friendly experiences.
          <br />
          <br />
          Outside the digital world, I explore life’s various flavors through video games, culinary adventures, and
          travel. I believe in balance—pushing the boundaries of code during the day and embracing the joy of new
          experiences after hours.
          <br />
          <br />
          I&apos;m driven by the belief that technology not only solves problems but also connects and enhances lives.
          Let&apos;s build tomorrow, together.
        </p>
      </Reveal>
    </section>
  );
}
