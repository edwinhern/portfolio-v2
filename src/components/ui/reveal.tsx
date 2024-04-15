'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

export const Reveal = ({ className, children, ...props }: RevealProps) => {
  return (
    <motion.div className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
};
