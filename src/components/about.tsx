import Link, { LinkProps } from 'next/link';

import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

interface TextUrlProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const TextUrl = ({ children, className, href }: TextUrlProps) => (
  <Link className={cn('text-primary', className)} href={href} rel="noopener noreferrer" target="_blank">
    &nbsp;<span className="hover:underline">{children}</span>
  </Link>
);

export function About() {
  return (
    <section className="flex flex-col space-y-4 px-4" data-testid="about-section">
      <h1 className="text-3xl lg:text-4xl" id="about-section">
        About Me
      </h1>
      <Reveal
        className="text-base/loose text-foreground lg:text-lg/loose"
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p>Hi 👋 I&apos;m a software engineer, gamer, soccer player, and minimalist based in Dallas, Texas.</p>

        <p>
          My coding journey began in 2019 with C++ in college. Inspired by my parents&apos; support and the opportunity
          to be a first-generation college student, I built my first terminal script to show,
          <span className="font-medium italic text-primary">&quot;Hey familia, I can do this.&quot; </span>
          This experience sparked my passion for turning ideas into reality.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          <p>
            &quot;échele con ganas,&quot; a constant reminder to give my all, rise out of poverty, and achieve greatness
            for our family.
          </p>
        </blockquote>

        <p>
          Along the way, I&apos;ve met amazing mentors and friends who have helped me grow. From creating apps to help
          friends with car registration and trash collection to developing platforms for school software services, every
          project has been a step in my journey of constant growth.
        </p>
        <p>
          I thrive on building high-quality, scalable applications that bridge the gap between technology and
          user-friendly experiences. Outside of work, I dive into video games, culinary adventures, and travel,
          balancing the push of code with the pull of new experiences.
        </p>
        <p>
          Driven by the belief that technology can connect and enhance lives, I’m excited to build tomorrow, together.
        </p>
      </Reveal>
    </section>
  );
}
