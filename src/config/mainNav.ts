import { Icons } from '@/components/ui/icons';

export interface NavItem {
  disabled?: boolean;
  external?: boolean;
  href: string;
  icon?: keyof typeof Icons;
  label?: string;
  title: string;
}

export const mainNav: NavItem[] = [
  {
    href: '/#about-section',
    title: 'About',
  },
  {
    href: '/#experience-section',
    title: 'Experience',
  },
  {
    href: '/#projects-section',
    title: 'Projects',
  },
];
