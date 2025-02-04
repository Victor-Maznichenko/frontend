'use client';
import { staggerInView } from '@/utils/constants/motion-animation-props';
import { motion } from 'motion/react';
import styles from './styles.module.scss';

const enterAnimation = staggerInView();

export const Footer = () => (
   <motion.footer {...enterAnimation()} className={styles.footer}>
      <div className="container">
         <ul className={styles.footer__contacts}>
            <li>
               <a href="https://t.me/victor_maznichenko">Telegram</a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/victor-maznichenko/">LinkedIn</a>
            </li>
            <li>
               <a href="https://vk.com/victor_maznichenko">VK</a>
            </li>
            <li>
               <a href="mailto:victor_maznichenko@mail.ru">Email</a>
            </li>
            <li>
               <a href="https://github.com/Victor-Maznichenko/">Github</a>
            </li>
            <li>
               <a href="tel:+89204574579">+8 920 457 45 79</a>
            </li>
         </ul>
      </div>
   </motion.footer>
);
