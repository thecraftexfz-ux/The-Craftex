'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { staggerContainerVariants } from '@/lib/motion';

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

