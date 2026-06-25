'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { cn } from '@/lib/utils/cn';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ParallaxImage({ src, alt, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden layered-shadow', className)}>
      <motion.div style={{ y }} className="relative h-full w-full">
        <Image src={src} alt={alt} fill sizes="(max-width:768px)100vw,50vw" className="object-cover" />
      </motion.div>
    </div>
  );
}

