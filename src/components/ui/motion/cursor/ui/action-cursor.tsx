import type { SlowedCords } from '../lib/types';
import { motion } from 'motion/react';
import { CURSOR_OUTLINE_SIZE } from '../lib';
import styles from './style.module.scss';

interface CursorActionProps extends SlowedCords {}

export const CursorAction = ({ slowedX, slowedY }: CursorActionProps) => (
   <motion.div
      className={styles.cursorActionWrap}
      style={{ x: slowedX, y: slowedY, width: CURSOR_OUTLINE_SIZE }}
   >
      <motion.div
         className={styles.cursorAction}
         animate={{ scale: 1.2 }}
         initial={{ scale: 0 }}
         exit={{ scale: 0 }}
      />
   </motion.div>
);
