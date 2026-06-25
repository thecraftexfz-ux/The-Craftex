'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import { createMagneticMotion } from '@/lib/gsap/magnetic';
import { cn } from '@/lib/utils/cn';

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function MagneticButton({ className, children, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return createMagneticMotion(element);
  }, []);

  return (
    <button ref={ref} className={cn('will-change-transform', className)} {...props}>
      {children}
    </button>
  );
}

