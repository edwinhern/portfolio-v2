import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { HeroSection } from '@/components/hero-section';
import { Projects } from '@/components/projects';
import { Stack } from '@/components/stack';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <AuroraBackground>
        <HeroSection className="container relative" />
      </AuroraBackground>
      <div className="container relative">
        <About />
        <Separator />
        <Experience />
        <Separator />
        <Projects />
        <Separator />
        <Stack />
      </div>
    </>
  );
}
