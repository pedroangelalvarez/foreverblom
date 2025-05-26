import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Title({ className, as: Comp = 'h1', children, ...props }: TitleProps) {
  return (
    <Comp 
      className={cn(
        'font-cursive text-primary tracking-wider',
        'text-5xl sm:text-6xl md:text-7xl', // Responsive font sizes
        className
      )} 
      {...props}
    >
      {children}
    </Comp>
  );
}

export function SubTitle({ className, as: Comp = 'h2', children, ...props }: TitleProps) {
  return (
    <Comp 
      className={cn(
        'font-cursive text-accent tracking-normal',
        'text-3xl sm:text-4xl', // Responsive font sizes
        className
      )} 
      {...props}
    >
      {children}
    </Comp>
  );
}
