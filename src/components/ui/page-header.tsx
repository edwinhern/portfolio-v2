import Balance from 'react-wrap-balancer';

import { cn } from '@/lib/utils';

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn('flex max-w-4xl flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20', className)}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Balance
      className={cn(
        'font-heading text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]',
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <Balance className={cn('text-md font-body text-muted-foreground sm:text-xl', className)} {...props} />;
}

function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex w-full items-center  space-x-4 py-4 md:pb-10', className)} {...props} />;
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
