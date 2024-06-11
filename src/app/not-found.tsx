import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/ui/page-header';
import { cn } from '@/lib/utils';

export default function NotFoundPage() {
  return (
    <section className="container relative min-h-dvh max-w-3xl space-y-4">
      <PageHeader className="items-start">
        <PageHeaderHeading className="text-2xl font-semibold sm:text-2xl md:text-2xl lg:text-2xl">
          Not Found
        </PageHeaderHeading>
        <PageHeaderDescription className="font-light text-muted sm:text-base md:text-base lg:text-base">
          This link might be broken, deleted, or moved. Nevertheless, there’s nothing to see here...
        </PageHeaderDescription>

        <PageActions>
          <Link className={cn(buttonVariants({ variant: 'outline' }))} href="/">
            <ArrowBigLeft className="mr-2 size-4" />
            Go back home
          </Link>
        </PageActions>
      </PageHeader>
    </section>
  );
}
