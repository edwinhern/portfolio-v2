'use client';

import { useState } from 'react';

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

  if (description.length < 100) {
    return <CardDescription className="text-foreground">{description}</CardDescription>;
  }

  return (
    <Collapsible className="w-full" onOpenChange={setIsOpen} open={isOpen}>
      {!isOpen && (
        <CardDescription className="text-foreground">{`${description.substring(0, 100)}...`}</CardDescription>
      )}

      <CollapsibleContent>
        <CardDescription className="text-foreground">{description}</CardDescription>
      </CollapsibleContent>

      <CollapsibleTrigger asChild>
        <Button className={cn('mt-2 flex gap-2 text-sm')} onClick={toggleDescription} size={'sm'} variant={'outline'}>
          {!isOpen ? <PlusCircle className="size-5" /> : <XCircle className="size-5" />}
          {!isOpen ? 'See More' : 'See Less'}
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
};
