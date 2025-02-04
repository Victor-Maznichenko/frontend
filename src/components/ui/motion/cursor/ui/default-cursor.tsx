import type { Cords, SlowedCords } from '../lib/types';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { CURSOR_DOT_SIZE, CURSOR_OUTLINE_SIZE } from '../lib';
import styles from './style.module.scss';

interface DefaultCursorProps extends Cords, SlowedCords {
   isDefaultCursor: boolean;
}

export const DefaultCursor = ({ isDefaultCursor, x, y, slowedX, slowedY }: DefaultCursorProps) => (
   <>
      <motion.div
         className={clsx(styles.cursorOutline, !isDefaultCursor && styles.filled)}
         style={{ x: slowedX, y: slowedY, width: CURSOR_OUTLINE_SIZE }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      />

      <motion.div
         className={styles.cursorDot}
         style={{ x, y, width: CURSOR_DOT_SIZE }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      />
   </>
);
