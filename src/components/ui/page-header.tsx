import Balance from 'react-wrap-balancer';

import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn('mx-auto flex max-w-4xl flex-col items-center gap-2 py-8 md:py-0 lg:m-auto', className)}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Reveal initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}>
      <Balance
        className={cn(
          'text-center font-heading text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]',
          className
        )}
        {...props}
      />
    </Reveal>
  );
}

function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn('text-md max-w-[750px] text-center font-body text-muted-foreground sm:text-xl', className)}
      {...props}
    />
  );
}

function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Reveal initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}>
      <div className={cn('flex w-full items-center justify-center space-x-4 py-4 md:pb-10', className)} {...props} />
    </Reveal>
  );
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
