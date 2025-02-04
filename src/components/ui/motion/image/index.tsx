'use client';

import type { MotionProps } from 'motion/react';
import type { ImageProps } from 'next/image';
import { motion } from 'motion/react';
import Image from 'next/image';

export const MotionImage = motion.create((props: ImageProps & MotionProps) => {
   return <Image {...props} />;
});
