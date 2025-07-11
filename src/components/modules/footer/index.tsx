'use client';
import { motion } from 'motion/react';
import { Typography } from '@/components/ui';
import { staggerInView } from '@/utils/constants/motion-animation-props';
import styles from './styles.module.scss';

const enterAnimation = staggerInView();

const SOCIAL_LINKS = [
   { name: 'Telegram', href: 'https://t.me/victor_maznichenko' },
   { name: 'LinkedIn', href: 'https://www.linkedin.com/in/victor-maznichenko/' },
   { name: 'VK', href: 'https://vk.com/victor_maznichenko' },
   { name: 'Email', href: 'mailto:victor_maznichenko@mail.ru' },
   { name: 'Github', href: 'https://github.com/Victor-Maznichenko/' },
   { name: '+8 920 457 45 79', href: 'tel:+89204574579' },
];

export const Footer = () => (
   <motion.footer {...enterAnimation()} className={styles.footer}>
      <div className="container">
         <ul className={styles.footer__contacts}>
            {SOCIAL_LINKS.map(({ name, href }) => (
               <li key={href}>
                  <Typography as="a" variant="text_XS" href={href} target="_blank" rel="noopener noreferrer">
                     {name}
                  </Typography>
               </li>
            ))}
         </ul>
      </div>
   </motion.footer>
);
