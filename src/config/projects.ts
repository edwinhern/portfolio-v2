export interface ProjectItem {
  description: string;
  githubUrl?: string;
  image?: string;
  skills?: string[];
  title: string;
  websiteUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    description:
      'Welcome to the Express TypeScript Boilerplate 2024 – a streamlined, efficient, and scalable foundation for building powerful backend services. This boilerplate merges modern tools and practices in Express.js and TypeScript, enhancing productivity, code quality, and performance.',
    githubUrl: 'https://github.com/edwinhern/express-typescript-2024',
    skills: ['Express.js', 'TypeScript', 'ESLint', 'Prettier', 'Jest', 'Supertest', 'Docker', 'GitHub Actions'],
    // image: '/assets/projects/express-typescript-2024.jpg',
    title: 'Express+Typescript-2024',
    websiteUrl: 'https://express.hernandezserver.com/',
  },
  {
    description:
      'Service Outage website for the University of North Texas. Provides operational updates of the services that our students/instructors use on a daily basis.',
    githubUrl: 'https://github.com/edwinhern/untstatus-next',
    skills: ['Next.js', 'Tailwind CSS', 'Vercel', 'GitHub Actions'],
    // image: 'https://www.untstatus.com/assets/logos/logo-100.svg',
    title: 'UNT Status',
    websiteUrl: 'https://www.untstatus.com/',
  },
  {
    description:
      'A full-stack web application that focuses on detecting potentail forest fires, notifies users, and updates on a map. This was a custom hardware device that was built using Arduino and AWS Services.',
    githubUrl: '',
    skills: [
      'Next.js',
      'AWS Services',
      'Tailwind CSS',
      'Mapbox',
      'React-Map-GL',
      'S3 Bucket',
      'Lambda',
      'API Gateway',
      'DynamoDB',
      'SNS Notifications',
    ],
    title: 'Wild Fire Tracker',
  },
];
