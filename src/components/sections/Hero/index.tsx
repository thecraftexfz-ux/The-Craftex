'use client';

import { FadeUp } from '@/components/animations/FadeUp';
import { HeroSlider } from '@/components/cinematic/HeroSlider';
import { Container } from '@/components/layout/Container';
import type { HeroSlide } from '@/types';

const slides: HeroSlide[] = [
  {
    src: '/images/hero3.jpeg',
    alt: 'Bespoke bedroom interior with warm cinematic lighting'
  },
  {
    src: '/images/hero2.png',
    alt: 'Bespoke workspace with artisanal textures'
  },
  {
    src: '/images/hero1.png',
    alt: 'Luxury bespoke living room composition'
  }
];

export default function HeroSection() {
  return (
    <header className="relative flex h-screen items-center overflow-hidden">
      <HeroSlider slides={slides} />
    </header>
  );
}

