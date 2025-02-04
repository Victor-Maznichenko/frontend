import type { MotionValue } from 'motion/react';

export interface Cords {
   x: MotionValue<number>;
   y: MotionValue<number>;
}

export interface SlowedCords {
   slowedX: MotionValue<number>;
   slowedY: MotionValue<number>;
}
