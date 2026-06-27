'use client';

import { useEffect, useMemo, useState } from 'react';

import type { HeroSlide } from '@/types';

import { KenBurnsImage } from './KenBurnsImage';

type HeroSliderProps = {
  slides: HeroSlide[];
};

const INTERVAL = 4500;

export function HeroSlider({ slides }: HeroSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, INTERVAL);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const active = useMemo(() => slides[index], [index, slides]);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-luxury"
          style={{ opacity: slideIndex === index ? 1 : 0 }}
        >
          <KenBurnsImage
            src={slide.src}
            alt={slide.alt}
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            className="object-contain object-center md:object-cover"
          />
        </div>
      ))}
      <div className="cinematic-gradient absolute inset-0" />
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            onClick={() => setIndex(slideIndex)}
            className="h-1.5 w-10 bg-white/30 transition-all duration-500"
            style={{ opacity: slideIndex === index ? 1 : 0.4 }}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
      <span className="sr-only">{active.alt}</span>
    </div>
  );
}
