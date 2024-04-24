import { Icons } from '@/components/ui/icons';

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export const mainNav: NavItem[] = [
  {
    title: 'About',
    href: '/#about-section',
  },
  {
    title: 'Experience',
    href: '/#experience-section',
  },
  {
    title: 'Projects',
    href: '/#projects-section',
  },
  {
    title: 'Stack',
    href: '/#stack-section',
  },
  {
    title: 'Resume',
    href: '/assets/Edwin-Hernandez-Resume-2024.pdf',
  },
];
