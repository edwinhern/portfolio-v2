export const siteConfig = {
  assets: {
    avatar: '/assets/images/avatar.png',
    logo: '/assets/images/logo.png',
    resume: '/assets/Edwin-Hernandez-Resume-2024.pdf',
  },
  description:
    "Portfolio of Edwin Hernandez, a software engineer based in Dallas, TX. I'm passionate about building accessible, inclusive, and performant web applications.",
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
  url: new URL('https://portfolio-v2-two-murex.vercel.app'),
};

export type SiteConfig = typeof siteConfig;
