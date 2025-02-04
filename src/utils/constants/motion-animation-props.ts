import type { ValueAnimationTransition } from 'motion/react';

export const staggerInView = (step = 0.1) => {
   let delay = 0;

   return ({ duration = 0.4, ...props }: Partial<ValueAnimationTransition> = {}) => ({
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { delay: (delay += step), duration, ...props },
   });
};
