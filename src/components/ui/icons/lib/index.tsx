import type { ComponentProps, ElementType } from 'react';

interface IconPropsOwnProps<E extends ElementType = ElementType> {
   as?: E;
}

export type IconProps<E extends ElementType> = IconPropsOwnProps<E> & Omit<ComponentProps<E>, keyof IconPropsOwnProps>;

export const Icon = <E extends ElementType = 'svg'>({ as, children, ...props }: IconProps<E>) => {
   const Component = as ?? 'svg';

   return (
      <Component {...props}>{children}</Component>
   );
};
