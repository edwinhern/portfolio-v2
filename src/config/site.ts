export const siteConfig = {
  name: 'edwinhern',
  url: new URL('https://edwinhern.com'),
  opImage: '/og-image.png',
  description:
    "Portfolio of Edwin Hernandez, a software engineer based in Dallas, TX. I'm passionate about building accessible, inclusive, and performant web applications.",
  links: {
    linkedin: 'https://www.linkedin.com/in/edwinhern/',
    github: 'https://github.com/edwinhern',
    githubRepo: 'https://github.com/edwinhern/portfolio-v2',
  },
  assets: {
    logo: '/assets/images/logo.png',
    avatar: '/assets/images/avatar.png',
    resume: '/assets/Edwin-Hernandez-Resume-2024.pdf',
  },
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
};

export type SiteConfig = typeof siteConfig;
