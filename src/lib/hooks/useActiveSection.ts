'use client';

import { usePathname } from 'next/navigation';

export function useActiveSection() {
  const pathname = usePathname();

  return (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };
}

