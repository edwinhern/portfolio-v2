import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface IDocsConfig {
  mainNav: MainNavItem[];
  sidebarNav?: SidebarNavItem[];
}

export const docsConfig: IDocsConfig = {
  mainNav: [
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
  ],
};
