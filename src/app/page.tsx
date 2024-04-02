import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';

export default function Home() {
  return (
    <main className="flex size-full min-h-lvh flex-col gap-8 p-5 md:p-10">
      <h1 className="font-heading text-5xl">Welcome!</h1>
      <h2 className="bg-primary font-body text-5xl">Edwin Hernandez</h2>
      <ThemeToggleButton />
    </main>
  );
}
