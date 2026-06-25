'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[120] h-px origin-left bg-primary"
      style={{ width }}
      aria-hidden
    />
  );
}

