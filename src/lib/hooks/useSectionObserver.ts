'use client';

import { useEffect, useState } from 'react';

export function useSectionObserver<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px'
) {
  const [element, setElement] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, threshold, rootMargin]);

  return { setElement, isVisible };
}

