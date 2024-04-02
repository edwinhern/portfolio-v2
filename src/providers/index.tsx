'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@/providers/theme-provider';

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
