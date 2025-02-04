'use client';

import type { MotionValue } from 'motion/react';
import { useTransform } from 'motion/react';
import { CURSOR_OUTLINE_CENTER } from '../constants';

export const useBoundaryOpacity = (
   x: MotionValue<number>,
   y: MotionValue<number>,
   margin: number,
) => {
   const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
   const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
   const opacityX = useTransform(
      x,
      [0, margin, windowWidth - margin, windowWidth - CURSOR_OUTLINE_CENTER],
      [0, 1, 1, 0],
   );

   const opacityY = useTransform(
      y,
      [0, margin, windowHeight - margin, windowHeight - CURSOR_OUTLINE_CENTER],
      [0, 1, 1, 0],
   );

   const opacity = useTransform(
      [opacityX, opacityY],
      ([opacityX, opacityY]: number[]) => Math.min(opacityX, opacityY),
   );

   return opacity;
};
