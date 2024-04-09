import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface IDocsConfig {
  mainNav: MainNavItem[];
  sidebarNav?: SidebarNavItem[];
}

export const docsConfig: IDocsConfig = {
  mainNav: [
    {
      title: 'Experience',
      href: '/#experience',
    },
    {
      title: 'Projects',
      href: '/#projects',
    },
    {
      title: 'Stack',
      href: '/#stack',
    },
    {
      title: 'Resume',
      href: '/#resume',
    },
  ],
};
