'use client';

import { useState } from 'react';
import Balancer from 'react-wrap-balancer';

import { PlusCircle, XCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

interface ExperienceDescriptionProps {
  description: string;
}

export const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapsible className="w-full" onOpenChange={setIsOpen} open={isOpen}>
      {!isOpen && (
        <CardDescription className="text-foreground">
          <Balancer as="p" className="text-base/loose md:text-lg/loose" preferNative={false} ratio={0.3}>
            {`${description.substring(0, 100)}...`}
          </Balancer>
        </CardDescription>
      )}

      <CollapsibleContent>
        <CardDescription className="text-foreground">
          <Balancer as="p" className="text-base/loose md:text-lg/loose" preferNative={false} ratio={0.3}>
            {description}
          </Balancer>
        </CardDescription>
      </CollapsibleContent>

      <CollapsibleTrigger asChild>
        <Button className={cn('flex gap-2 text-sm')} onClick={toggleDescription} size={'sm'} variant={'outline'}>
          {!isOpen ? <PlusCircle className="size-5" /> : <XCircle className="size-5" />}
          {!isOpen ? 'See More' : 'See Less'}
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
};
