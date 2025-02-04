'use client';

import { useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { CURSOR_DOT_SIZE, CURSOR_OUTLINE_CENTER, springConfig } from '../constants';
import { addHoverListeners, removeHoverListeners } from '../utils';

export const useCursorPosition = () => {
   const x = useMotionValue(0);
   const y = useMotionValue(0);
   const slowedX = useSpring(0, springConfig);
   const slowedY = useSpring(0, springConfig);
   const [isDefaultCursor, setIsDefaultCursor] = useState(true);

   useEffect(() => {
      const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
         slowedX.set(clientX - CURSOR_OUTLINE_CENTER);
         slowedY.set(clientY - CURSOR_OUTLINE_CENTER);

         x.set(clientX - CURSOR_DOT_SIZE / 2);
         y.set(clientY - CURSOR_DOT_SIZE / 2);
      };

      window?.addEventListener('mousemove', handleMouseMove, { passive: true });

      return () => {
         window?.removeEventListener('mousemove', handleMouseMove);
      };
   }, [isDefaultCursor, slowedX, slowedY, x, y]);

   useEffect(() => {
      const buttons = document.getElementsByTagName('button');
      const links = document.getElementsByTagName('a');

      const elemsEnter = () => setIsDefaultCursor(false);
      const elemsLeave = () => setIsDefaultCursor(true);

      addHoverListeners(buttons, elemsEnter, elemsLeave);
      addHoverListeners(links, elemsEnter, elemsLeave);
      return () => {
         removeHoverListeners(buttons, elemsEnter, elemsLeave);
         removeHoverListeners(buttons, elemsEnter, elemsLeave);
      };
   }, []);

   return { x, y, slowedX, slowedY, isDefaultCursor };
};
