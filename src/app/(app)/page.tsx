import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { HeroSection } from '@/components/hero-section';
import { Projects } from '@/components/projects';
import { Stack } from '@/components/stack';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { SectionLayout } from '@/components/ui/section-layout';

export default function Home() {
  return (
    <>
      <AuroraBackground>
        <HeroSection className="container relative" />
      </AuroraBackground>
      <SectionLayout className="container relative">
        <About />
        <Experience />
        <Projects />
        <Stack />
      </SectionLayout>
    </>
  );
}
