'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { navigation } from '@/data/navigation';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import { cn } from '@/lib/utils/cn';

import { Container } from './Container';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('glass-nav fixed inset-x-0 top-0 z-[110]', scrolled && 'scrolled')}>
      <Container className="py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-tight text-primary md:text-3xl">
            The Craftex Studio
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn('nav-link', isActive(item.href) && 'active text-primary')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="label-caps border border-secondary px-8 py-4 text-secondary transition-all duration-700 hover:bg-secondary hover:text-white"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            className="text-primary md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="text-2xl leading-none">{open ? 'Ã—' : 'â‰¡'}</span>
          </button>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-700 md:hidden',
            open ? 'max-h-96 pt-6' : 'max-h-0'
          )}
        >
          <div className="glass-panel space-y-5 p-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn('block label-caps text-on-surface-variant', isActive(item.href) && 'text-primary')}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

