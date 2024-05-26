import { EmploymentType } from '@/types/enum';

export const experiences: ExperienceItem[] = [
  {
    company: 'Tesla Inc.',
    date: {
      end: 'May 2024',
      start: 'Jul 2023',
    },
    description:
      "Worked full-stack to build the admin configuration portal for Tesla's new Payroll System. Transitioned to the frontend team to lead the development of the admin portal. Contributed to backend micro-services using C# and MySQL, and helped in onboarding new team members.",
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
      'Enhanced the employee persona experience, focusing on features for timecard and schedule views using Angular, as part of Tesla’s new Payroll System. Contributed to backend micro-services using .NET Core.',
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
    description: 'Contributed to a Java/Spring Boot batch application for processing over 100k US home loans.',
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
      'Assisted in managing the annual HackUNT event with over 400 participants. Focused on event planning, coordination, and managing relationships with key sponsors like GitHub and JPMorgan. Played a significant role in developing and maintaining the event’s website.',
    employmentType: EmploymentType.PartTime,
    skills: ['Event Planning', 'Sponsorship Management'],
    title: 'Technical Lead',
  },
  {
    company: 'Seizing Every Opportunity (SEO)',
    date: {
      end: 'Aug 2021',
      start: 'Jun 2021',
    },
    description:
      'Learned full-stack development principles and developed web applications using Python and Flask, deployed on Heroku. Emphasized agile methods, testing, and pair programming, significantly improving technical and team collaboration skills.',
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
