'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { revealUpVariants } from '@/lib/motion';

type FadeUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={revealUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

