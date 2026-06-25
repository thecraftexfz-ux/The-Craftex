import type { Variants } from 'framer-motion';

import { luxuryEase, motionDurations } from './transitions';

export const revealUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.slow,
      ease: luxuryEase
    }
  }
};

export const maskRevealVariants: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1.5,
      ease: luxuryEase
    }
  }
};

export const cinematicFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionDurations.cinematic,
      ease: luxuryEase
    }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08
    }
  }
};

