'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';
import { BurgerMenu, Icons } from '@/components/ui';
import { staggerInView } from '@/utils/constants/motion-animation-props';
import styles from './styles.module.scss';

const enterAnimation = staggerInView();

export const Header = () => (
   <motion.header
      className={styles.header}
      {...enterAnimation()}
   >
      <Link href="/">
         <Icons.Logo
            className={styles.header__logo}
            size={80}
         />
      </Link>
      <BurgerMenu />
   </motion.header>
);
