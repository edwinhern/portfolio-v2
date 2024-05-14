export const siteConfig = {
  assets: {
    avatar: '/assets/images/avatar.png',
    discordGif: '/assets/gifs/discord.gif',
    logo: '/assets/images/logo.png',
    resume: '/assets/resume/Edwin-Hernandez-Resume-2024.pdf',
  },
  description: 'Software Engineer, Gamer, Soccer Player, and minimalist, based in Dallas, TX.',
  keywords: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Vitest',
    'React Testing Library',
    'Framer Motion',
    'shadcn/ui',
    'Aceternity UI',
  ],
  links: {
    github: 'https://github.com/edwinhern',
    githubRepo: 'https://github.com/edwinhern/portfolio-v2',
    githubRepositories: 'https://github.com/edwinhern?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/edwinhern/',
  },
  name: 'Edwin Hernandez',
  opImage: '/og-image.png',
  siteTitle: 'edwinhern',
  url: new URL('https://edwinhern.vercel.app'),
};

export type SiteConfig = typeof siteConfig;
