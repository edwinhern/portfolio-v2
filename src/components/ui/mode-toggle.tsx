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
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger {...props} asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle Theme" title="Toggle Theme">
          {theme === 'light' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
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
  const { theme, setTheme } = useTheme();
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
