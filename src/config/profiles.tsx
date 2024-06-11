import { ReactElement } from 'react';

import { Icons } from '@/components/ui/icons';

type SocialItem = {
  icon?: ReactElement['props'];
  title: string;
  url: string;
  username?: string;
};

export const socialMedia: SocialItem[] = [
  {
    icon: <Icons.twitter className="size-4" />,
    title: 'X (Twitter)',
    url: 'https://twitter.com/intent/user?screen_name=onurschu',
    username: 'edwinhern',
  },
  {
    icon: <Icons.gitHub className="size-4" />,
    title: 'GitHub',
    url: 'https://github.com/suyalcinkaya',
  },
];
