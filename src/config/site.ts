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
    linkedin: 'https://www.linkedin.com/in/edwinhern/',
  },
  name: 'edwinhern',
  opImage: '/og-image.jpg',
  url: new URL('https://edwinhern.com'),
};

export type SiteConfig = typeof siteConfig;
