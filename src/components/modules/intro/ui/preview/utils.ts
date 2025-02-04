export enum AnimationStatus {
   Initial = 'initial',
   Loaded = 'loaded',
}

interface AnimationConfig {
   initialProps: Record<string, string | number | number[]>;
   loadedProps: Record<string, string | number | number[]>;
   transitionProps: {
      damping?: boolean;
      duration?: number;
      delay?: number;
   };
}

const createAnimationConfig = ({ initialProps, loadedProps, transitionProps }: AnimationConfig) => ({
   initial: AnimationStatus.Initial,
   variants: {
      [AnimationStatus.Initial]: initialProps,
      [AnimationStatus.Loaded]: loadedProps,
   },
   transition: transitionProps,
});

const fadeInConfig = (delay: number, duration: number) => ({
   initial: AnimationStatus.Initial,
   variants: {
      [AnimationStatus.Initial]: { opacity: 0 },
      [AnimationStatus.Loaded]: { opacity: 1 },
   },
   transition: { delay, duration },
});

export const PREVIEW_ANIMATIONS = {
   preview: fadeInConfig(1, 0.3),
   image: createAnimationConfig({
      initialProps: { scale: 1.5, filter: 'blur(10px)' },
      loadedProps: { scale: [1.5, 1.1, 1], filter: 'blur(0)' },
      transitionProps: { damping: false, duration: 0.5, delay: 1 },
   }),
   zigzagLines: [
      createAnimationConfig({
         initialProps: { opacity: 0, y: 40, x: -40 },
         loadedProps: { opacity: 1, y: 0, x: 0 },
         transitionProps: { duration: 0.4, delay: 1.3 },
      }),
      createAnimationConfig({
         initialProps: { translateY: '-50%', rotate: '45deg', opacity: 0, x: 50 },
         loadedProps: { translateY: '-50%', rotate: '45deg', opacity: 1, x: 0 },
         transitionProps: { duration: 0.6, delay: 1 },
      }),
      createAnimationConfig({
         initialProps: { rotate: '90deg', opacity: 0, y: -20, x: 20 },
         loadedProps: { rotate: '90deg', opacity: 1, y: 0, x: 0 },
         transitionProps: { duration: 0.2, delay: 1.3 },
      }),
   ],
   squareGrids: [
      fadeInConfig(1.3, 0.6),
      fadeInConfig(1.4, 0.6),
   ],
};
