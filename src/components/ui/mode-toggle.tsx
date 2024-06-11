'use client';

import React, { useCallback } from 'react';

import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button, ButtonProps } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const ModeToggleButton: React.FC<DropdownMenuTriggerProps> = ({ className, ...props }) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger {...props} asChild>
        <Button className={cn(className)} size="icon" variant="ghost">
          <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const MobileModeToggleButton: React.FC<ButtonProps> = ({ className, ...props }) => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <Button
      {...props}
      className={cn('items-start justify-start border-none font-heading', className)}
      onClick={toggleTheme}
      variant="outline"
    >
      <span className="flex items-center gap-2">
        {theme === 'light' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
        <span>Appearance</span>
      </span>
    </Button>
  );
};
