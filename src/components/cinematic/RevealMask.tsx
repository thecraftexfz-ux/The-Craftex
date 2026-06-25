'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { maskRevealVariants } from '@/lib/motion';

type RevealMaskProps = {
  children: ReactNode;
  className?: string;
};

export function RevealMask({ children, className }: RevealMaskProps) {
  return (
    <motion.div
      className={className}
      variants={maskRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

