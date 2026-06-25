import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return <div className={cn('glass-panel', className)}>{children}</div>;
}

