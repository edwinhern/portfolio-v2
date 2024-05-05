'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';

import { calculateProgress } from '../utils/time';

interface SpotifyBarProps {
  end: number;
  start: number;
}

export function ProgressBar({ end, start }: SpotifyBarProps) {
  const [progress, setProgress] = React.useState(calculateProgress(start, end));

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(calculateProgress(start, end));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [start, end]);

  return (
    <div className="py-1">
      <Progress className="w-[200px]" value={progress} />
    </div>
  );
}
