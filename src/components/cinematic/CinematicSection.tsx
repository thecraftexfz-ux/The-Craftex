import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type CinematicSectionProps = {
  children: ReactNode;
  className?: string;
};

export function CinematicSection({ children, className }: CinematicSectionProps) {
  return <section className={cn('luxury-section relative overflow-hidden', className)}>{children}</section>;
}

