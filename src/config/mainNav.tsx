import { BriefcaseIcon, GalleryHorizontal, LayoutDashboardIcon, MessageCircleIcon, SparklesIcon } from 'lucide-react';

export const mainNav: NavItem[] = [
  {
    href: '/',
    icon: <SparklesIcon size={16} />,
    title: 'Home',
  },
  {
    href: '/#about-section',
    icon: <MessageCircleIcon size={16} />,
    title: 'About',
  },
  {
    href: '/#experience-section',
    icon: <BriefcaseIcon size={16} />,
    title: 'Experience',
  },
  {
    href: '/#projects-section',
    icon: <GalleryHorizontal size={16} />,
    title: 'Projects',
  },
  {
    href: '/dashboard',
    icon: <LayoutDashboardIcon size={16} />,
    title: 'Dashboard',
  },
];
