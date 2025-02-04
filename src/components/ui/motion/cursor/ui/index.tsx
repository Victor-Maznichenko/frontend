'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useBoundaryOpacity, useCursorPosition } from '../lib';
import { CursorAction } from './action-cursor';
import { DefaultCursor } from './default-cursor';
import styles from './style.module.scss';

export const Cursor = () => {
   const { x, y, slowedX, slowedY, isDefaultCursor } = useCursorPosition();
   const opacity = useBoundaryOpacity(x, y, 25);

   return (
      <motion.div className={styles.cursor} style={{ opacity }}>
         <AnimatePresence>
            {isDefaultCursor && (
               <DefaultCursor
                  x={x}
                  y={y}
                  slowedX={slowedX}
                  slowedY={slowedY}
                  isDefaultCursor={isDefaultCursor}
               />
            )}
         </AnimatePresence>

         <AnimatePresence>
            {!isDefaultCursor && (
               <CursorAction
                  slowedX={slowedX}
                  slowedY={slowedY}
               />
            )}
         </AnimatePresence>
      </motion.div>
   );
};
