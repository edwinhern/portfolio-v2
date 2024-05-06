import { Icons } from '@/components/ui/icons';

declare global {
  /**
   * Represents a repository on GitHub.
   * @description This type is associated with the GitHub pinned repositories endpoint
   **/
  type GithubRepo = {
    description: string;
    forks: number;
    image: string;
    language: string;
    languageColor: string;
    link: string;
    owner: string;
    repo: string;
    stars: number;
    website: string;
  };

  /**
   * @description Represents an item in the work experience section.
   **/
  type ExperienceItem = {
    company: string;
    date: string;
    description: string;
    employmentType: EmploymentType;
    image?: string;
    skills?: string[];
    title: string;
  };

  /**
   * @description Represents an item in the navigation menu.
   **/
  type NavItem = {
    disabled?: boolean;
    external?: boolean;
    href: string;
    icon?: keyof typeof Icons;
    label?: string;
    title: string;
  };
}
