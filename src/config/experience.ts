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
    description:
      'Stepping up from intern to a full-stack engineer, I joined Tesla in the midst of a project sprint. My first chapter was about pairing with a mentor to craft an Admin Configurator, touching everything from database scripts to front-end elements. The thrill was in creating a query-builder component, now a shared tool across Tesla’s software suite.',
    image: '/assets/companies/tesla.jpg',
    skills: [
      'React',
      'Redux',
      'TypeScript',
      'C#',
      '.NET Core',
      'REST API',
      'MySQL',
      'Docker',
      'CI/CD',
      'Unit Testing',
      'Agile Development',
      'Jira',
    ],
    title: 'Software Engineer II',
  },
  {
    company: 'Tesla Inc.',
    date: 'Aug 2022 - Dec 2022',
    description:
      'As an intern, my Tesla story began with building the Payroll System from scratch while juggling school. It was a dive into front-end and a peek into back-end, where learning was as rapid as the development itself.',
    image: '/assets/companies/tesla-02.jpg',
    skills: ['Angular', 'TypeScript', 'C#', '.NET Core', 'Agile Development', 'Jira'],
    title: 'Software Engineer',
  },
  {
    company: 'JPMorgan Chase & Co.',
    date: 'Jun 2022 - Aug 2022',
    description:
      'At JPMorgan Chase, my internship was about batch processes and loans, a blend of coding and learning, set in a space where making a tangible impact was as important as acquiring new skills.',
    image: '/assets/companies/jpmc.jpg',
    skills: ['Java', 'Spring Boot', 'Agile Methodologies', 'Batch Processing', 'Financial Systems'],
    title: 'Software Engineer',
  },
  {
    company: "Engineer's United",
    date: 'Aug 2020 - Feb 2022',
    description:
      'With Engineer’s United, I helped turn HackUNT from an idea to an event that drew hundreds. It was about coding, coordination, and creating experiences, where I also got my hands dirty coding the event site itself.',
    skills: ['Web Development', 'Event Planning', 'Community Building', 'Team Leadership', 'Sponsorship Management'],
    title: 'Technical Lead',
  },
  {
    company: 'Seizing Every Opportunity (SEO)',
    date: 'Jun 2021 - Aug 2021',
    description:
      'SEO was where my development story took root. In an immersive bootcamp, I learned full-stack development and team collaboration, leading to my first successful deployments on Heroku.',
    image: '/assets/companies/seo.png',
    skills: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'RESTful API',
      'MySQL',
      'Unit Testing',
      'Agile Development',
      'Pair Programming',
      'Debugging',
    ],
    title: 'Tech Developer',
  },
];
