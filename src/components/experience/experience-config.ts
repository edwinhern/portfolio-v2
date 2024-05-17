import { EmploymentType } from '@/types/enum';

export const experiences: ExperienceItem[] = [
  {
    company: 'Tesla Inc.',
    date: {
      end: 'May 2024',
      start: 'Jul 2023',
    },
    description:
      "My first full-time role at Tesla came right after my internship, during a critical project phase. I developed a comprehensive admin configuration system, which allows for customizable profiles and advanced access controls specifically for Payroll Users. This system is designed to handle large-scale operations that impact millions. Additionally, I created a reusable query-builder component that's now used across various Tesla apps, improving development efficiency and user experience.",
    employmentType: EmploymentType.FullTime,
    image: '/assets/companies/tesla.jpg',
    skills: ['React', 'TypeScript', 'C#', 'MySQL'],
    title: 'Software Engineer II',
  },
  {
    company: 'Tesla Inc.',

    date: {
      end: 'Dec 2022',
      start: 'Aug 2022',
    },
    description:
      'As an intern, I was part of the team that developed Tesla’s new Payroll System from the ground up, replacing Kronos. My role focused on frontend development, particularly Angular, but I also contributed to backend services using .NET Core. This internship was a practical application of my classroom learnings, blending full-time work with part-time studies.',
    employmentType: EmploymentType.Intern,
    image: '/assets/companies/tesla-02.jpg',
    skills: ['Angular', 'TypeScript', 'C#', 'MySQL'],
    title: 'Software Engineer',
  },
  {
    company: 'JPMorgan Chase & Co.',
    date: {
      end: 'Aug 2022',
      start: 'Jun 2022',
    },
    description:
      "At JPMorgan, I contributed to a Java/Spring Boot batch application for processing over 100,000 US loans, ensuring rapid and accurate confirmation for homeowners. My role was critical in enhancing the application's efficiency and in integrating a custom API for improved third-party tool interaction.",
    employmentType: EmploymentType.Intern,
    image: '/assets/companies/jpmc.jpg',
    skills: ['Java', 'Spring Boot'],
    title: 'Software Engineer',
  },
  {
    company: "Engineer's United",
    date: {
      end: 'Feb 2022',
      start: 'Aug 2020',
    },
    description:
      'As a Technical Lead for Engineer’s United, I managed the annual HackUNT event, drawing over 400 participants. My responsibilities included event planning, coordination, and managing relationships with key sponsors like GitHub and JPMorgan. I also played a significant role in developing and maintaining the event’s website.',
    employmentType: EmploymentType.PartTime,
    skills: ['Angular', 'Event Planning', 'Leadership', 'Sponsorship Management'],
    title: 'Technical Lead',
  },
  {
    company: 'Seizing Every Opportunity (SEO)',
    date: {
      end: 'Aug 2021',
      start: 'Jun 2021',
    },
    description:
      'At SEO, I underwent an intensive full-stack development bootcamp where I developed web applications using Python and Flask, and deployed them using Heroku. The internship emphasized agile methods, testing, and pair programming, significantly improving my technical and team collaboration skills.',
    employmentType: EmploymentType.Intern,
    skills: ['Python', 'Flask', 'MySQL', 'Heroku'],
    title: 'Tech Developer',
  },
];

export const calculateExperienceDuration = (date: ExperienceDate) => {
  const startDate = new Date(date.start);
  const endDate = new Date(date.end);
  const months = endDate.getMonth() - startDate.getMonth() + 1 + 12 * (endDate.getFullYear() - startDate.getFullYear());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return years > 0
    ? `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`
    : `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
};
