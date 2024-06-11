import { type PropsWithChildren } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

import { RenderIf } from '../render-if';

interface SideMenuProps extends PropsWithChildren {
  className?: string;
  title?: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ children, className, title }) => {
  return (
    <ScrollArea className={cn('hidden lg:flex lg:w-60 lg:flex-col lg:border-r xl:w-72', className)}>
      <RenderIf when={Boolean(title)}>
        <div className="sticky top-0 z-10 border-b px-5 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-tight">{title}</span>
          </div>
        </div>
      </RenderIf>
      <div className="p-3">{children}</div>
    </ScrollArea>
  );
};
