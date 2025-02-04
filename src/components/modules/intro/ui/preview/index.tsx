/* eslint-disable react/no-array-index-key */
'use client';

import type { ComponentProps } from 'react';
import { Icons, MotionImage, Typography } from '@/components/ui';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { useState } from 'react';
import styles from './styles.module.scss';
import { AnimationStatus, PREVIEW_ANIMATIONS } from './utils';

interface IntroPreviewProps extends Omit<ComponentProps<typeof motion.div>, 'children'> {
   src: string;
}

export const IntroPreview = ({ src, className, ...props }: IntroPreviewProps) => {
   const [isLoad, setIsLoad] = useState<AnimationStatus>(AnimationStatus.Initial);

   return (
      <motion.div
         className={clsx(styles.introPreview, className)}
         animate={isLoad}
         {...PREVIEW_ANIMATIONS.preview}
         {...props}
      >
         <div className={styles.introPreview__img}>
            <MotionImage
               animate={isLoad}
               src={src}
               width={1280}
               height={1280}
               loading="lazy"
               onLoad={() => setIsLoad(AnimationStatus.Loaded)}
               alt="Фото"
               {...PREVIEW_ANIMATIONS.image}
            />
         </div>
         <Typography className={styles.introPreview__firstName} as="span" variant="text_L">Виктор</Typography>
         <Typography className={styles.introPreview__lastName} as="span" variant="text_L">Мазниченко</Typography>
         {isLoad && PREVIEW_ANIMATIONS.squareGrids.map((animation, index) => (
            <Icons.SquareGrid
               as={motion.svg}
               animate={isLoad}
               key={`squareGrid-${index}`}
               className={clsx(styles[`introPreview__squareGrid${index + 1}`])}
               size={150}
               {...animation}
            />
         ))}
         {isLoad && PREVIEW_ANIMATIONS.zigzagLines.map((animation, index) => (
            <Icons.ZigzagLine
               as={motion.svg}
               animate={isLoad}
               key={`zigzagLine-${index}`}
               className={clsx(styles[`introPreview__zigzagLine${index + 1}`])}
               size={51}
               {...animation}
            />
         ))}
      </motion.div>
   );
};
