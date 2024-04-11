'use client';

import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const ModeToggleButton: React.FC<DropdownMenuTriggerProps> = (props) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger {...props} asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle Theme" title="Toggle Theme">
          <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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

export const MobileModeToggleButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  const { setTheme, theme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      {...props}
      onClick={handleThemeChange}
      className={cn(buttonVariants({ variant: 'outline' }), 'space-x-2', className)}
    >
      <span>Appearance</span>
      {theme === 'light' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </div>
  );
};
