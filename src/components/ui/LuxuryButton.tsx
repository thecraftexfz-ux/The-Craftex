import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils/cn';

type LuxuryButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline';
};

export function LuxuryButton({ href, children, className, variant = 'solid' }: LuxuryButtonProps) {
  const classes = cn(
    'label-caps inline-flex items-center justify-center px-10 py-5 transition-all duration-700 ease-luxury',
    variant === 'solid'
      ? 'bg-primary text-white hover:bg-on-surface-variant'
      : 'border border-secondary text-secondary hover:bg-secondary hover:text-white',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}

