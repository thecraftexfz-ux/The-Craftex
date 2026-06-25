import type { Variants } from 'framer-motion';

import { luxuryEase } from './transitions';

export const parallaxYVariants: Variants = {
  hidden: { y: 30, opacity: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.4, ease: luxuryEase }
  }
};

export const navGlassVariants: Variants = {
  top: {
    backdropFilter: 'blur(0px)',
    backgroundColor: 'rgba(242, 231, 222, 0.01)',
    borderColor: 'rgba(203, 198, 188, 0.0)'
  },
  scrolled: {
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(242, 231, 222, 0.82)',
    borderColor: 'rgba(123, 119, 110, 0.2)',
    transition: { duration: 0.8, ease: luxuryEase }
  }
};

