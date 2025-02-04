'use client';

import type { LinkProps } from 'next/link';
import { motion } from 'motion/react';
import Link from 'next/link';

export const MotionLink = motion.create((props: LinkProps) => {
   return <Link {...props} />;
});
