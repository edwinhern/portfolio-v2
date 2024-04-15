import { About } from '@/components/about';
import { HeroSection } from '@/components/common/hero-section';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Stack } from '@/components/stack';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Home() {
  return (
    <>
      <AuroraBackground>
        <HeroSection className="container relative" />
      </AuroraBackground>
      <div className="container relative">
        <About />
        <Experience />
        <Projects />
        <Stack />
      </div>
    </>
  );
}
