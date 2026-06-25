'use client';

import { useEffect, useRef } from 'react';

import { createCursorSmoothing } from '@/lib/gsap/cursor';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const cleanup = createCursorSmoothing(cursor);

    return cleanup;
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[130] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-secondary-fixed/20 backdrop-blur-sm md:block"
      aria-hidden
    />
  );
}

