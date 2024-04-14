import { HeroSection } from '@/components/common/hero-section';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <div className="container relative">
      <HeroSection />
      <Experience />
      <Projects />
    </div>
  );
}
