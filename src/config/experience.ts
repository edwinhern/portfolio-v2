export interface ExperienceItem {
  company: string;
  date: string;
  description: string;
  image?: string;
  skills: string[];
  title: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Tesla Inc.',
    date: 'Jul 2023 - Present',
    // date: { start: 'July 2023', end: 'Present' },
    description:
      'Recently joined the company as a Software Engineer 1. I am responsible for developing and maintaining software applications for internal use. I work closely with the product owner and other team members to deliver high-quality software solutions.',
    image: '/assets/companies/tesla.jpg',
    skills: [
      'C#',
      '.NET Core',
      'TypeScript',
      'React',
      'Agile Development',
      'Jira',
      'MySQL',
      'Docker',
      'REST API',
      'CI/CD',
      'Unit Testing',
      'Redux',
    ],
    title: 'Software Engineer II',
  },
  {
    company: 'Tesla Inc.',
    date: 'Feb 2023 - March 2024',
    // date: { start: 'August 2022', end: 'December 2022' },
    description:
      'Recently joined the company as a Software Engineer 1. I am responsible for developing and maintaining software applications for internal use. I work closely with the product owner and other team members to deliver high-quality software solutions.',
    image: '/assets/companies/tesla-02.jpg',
    skills: ['C#', '.NET Core', 'Angular', 'TypeScript', 'Agile Development', 'Jira'],
    title: 'Software Engineer Intern',
  },
  {
    company: 'JPMorgan Chase & Co.',
    date: 'Feb 2023 - March 2024', // · 1 yr 2 mos
    // date: 'Feb 2023 - March 2024', // · 1 yr 2 mos
    description:
      'I architected a scalable system for rapid deployment, making key decisions on cloud infrastructure, database management, and design paradigms. Led a team of 3 in developing backend services for web and mobile using REST APIs and component-based software engineering. Collaborated with frontend engineers for seamless integration, implemented CI/CD pipelines with GitHub Actions for automated build, test, and deployment processes.',
    skills: [
      'REST API',
      'TypeScript',
      'NestJS',
      'NextJS',
      'Supabase',
      'Tailwind CSS',
      'Jest',
      'Figma',
      'Digital Ocean',
      'Agile Development',
      'CI/CD',
      'Database Management',
      'Unit Testing',
    ],
    title: 'Backend Engineer Intern',
  },
  {
    company: 'Seizing Every Opportunity (SEO)',
    date: 'August 2022 - January 2023 · 6 mos',
    description:
      'Designed and developed web system that streamlines inventory management process for internal employees. Collaborated with other engineers on existing internal systems to add new features and fix bugs.',
    skills: [
      'Full Stack Development',
      'Java',
      'TypeScript',
      'Spring Boot',
      'Angular',
      'PostgreSQL',
      'SCSS',
      'Figma',
      'Pivotal Cloud Foundry',
      'Agile Development',
      'Unit Testing',
    ],
    title: 'Full Stack Developer Intern',
  },
];
