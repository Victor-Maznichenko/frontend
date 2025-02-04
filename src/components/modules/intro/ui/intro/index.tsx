'use client';

import { Icons, Typography } from '@/components/ui';
import { staggerInView } from '@/utils/constants/motion-animation-props';
import { motion } from 'motion/react';
import { IntroPreview } from '../preview';
import styles from './styles.module.scss';

const enterAnimation = staggerInView();

export const Intro = () => {
   return (
      <section className={styles.intro}>
         <div className="container">
            <div className={styles.intro__inner}>
               <div className={styles.intro__info}>
                  <Typography
                     className={styles.intro__title}
                     variant="heading_L"
                     as={motion.h1}
                     glitch
                     {...enterAnimation()}
                  >
                     Фронтенд Разработчик.
                  </Typography>

                  <Typography
                     className={styles.intro__description}
                     variant="text_L"
                     as={motion.p}
                     {...enterAnimation()}
                  >
                     Мне нравится создавать красивые, надежные и машбируемые продукты с хорошим пользовательским опытом и анимациями.
                  </Typography>

                  <motion.div
                     className={styles.intro__benefits}
                     {...enterAnimation()}
                  >
                     <Typography className={styles.intro__benefit} variant="text_XS">Постоянное совершенствование и инновационный подход, основанные на глубоком теоретическом знании React и JavaScript.</Typography>
                     <Typography className={styles.intro__benefit} variant="text_XS">Опыт в верстке уникальных и сложных интерфейсов, основанный на проверенных методах и креативных решениях.</Typography>
                  </motion.div>
               </div>

               <IntroPreview src="/images/avatar.jpg" />
            </div>
         </div>
         <Icons.IntroDecorationLine className={styles.intro__decorationLine} />
      </section>
   );
};
