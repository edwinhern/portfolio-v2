import Image from 'next/image';
import Link from 'next/link';

import { NavigationLink } from '@/components/common/navbar/navigation-link';
import { buttonVariants } from '@/components/ui/button';
import { MobileModeToggleButton } from '@/components/ui/mode-toggle';
import { mainNav } from '@/config/mainNav';
import { socialMedia } from '@/config/profiles';
import { cn } from '@/lib/utils';

export const MenuContent: React.FC = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link
          className={cn(buttonVariants({ variant: 'outline' }), 'justify-start gap-2 border-none font-heading')}
          href="/"
        >
          <Image
            alt="Edwin Hernandez"
            className="size-8 rounded-full border shadow-sm"
            height={40}
            loading="lazy"
            src="/assets/images/profile.jpg"
            width={90}
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">Edwin Hernandez</span>
            <span className="text-muted">Software Engineer</span>
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          {mainNav.map((link) => (
            <NavigationLink href={link.href} icon={link.icon} key={link.href} title={link.title} />
          ))}
          <MobileModeToggleButton />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">Online</span>
        <div className="flex flex-col gap-1">
          {socialMedia.map((profile) => (
            <NavigationLink href={profile.url} icon={profile.icon} key={profile.url} title={profile.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
