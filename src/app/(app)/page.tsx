import { About } from '@/components/about';
import { HeroSection } from '@/components/common/hero-section';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Stack } from '@/components/stack';

export default function Home() {
  return (
    <div className="container relative">
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Stack />
    </div>
  );
}
