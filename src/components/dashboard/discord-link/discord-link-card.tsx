'use client';

import { ArrowUpIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/ui/reveal';

export const DiscordLinkCard = () => {
  return (
    <Reveal
      initial="visible"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.4, ease: 'easeInOut' },
      }}
    >
      <Card className="relative flex h-64 md:flex-1">
        <Link className="flex size-full items-center justify-center" href={'https://discord.com/users/edwinhern'}>
          <Image
            alt={'Discord Logo'}
            className="scale-75 md:w-72 md:scale-100"
            draggable={false}
            height={1000}
            src="/assets/gifs/discord.gif"
            width={1200}
          />
        </Link>
        <ArrowUpIcon className="absolute bottom-0 right-0 m-2 size-8 rotate-45 text-white" />
      </Card>
    </Reveal>
  );
};
