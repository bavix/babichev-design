import React, { memo, useMemo } from 'react';
import { cn } from '../../utils/cn';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'code'
    | 'pre';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  pixel?: boolean;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'default' | 'muted' | 'accent' | 'success' | 'warning' | 'danger';
  truncate?: boolean;
  lineClamp?: number;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: React.ReactNode;
}

const SIZE_CLASSES = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
} as const;

const WEIGHT_CLASSES = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
} as const;

const COLOR_CLASSES = {
  default: 'text-pixel-text',
  muted: 'text-pixel-text-muted',
  accent: 'text-pixel-accent',
  success: 'text-pixel-border',
  warning: 'text-pixel-accent',
  danger: 'text-red-500',
} as const;

export const Typography = memo<TypographyProps>(
  ({
    variant = 'p',
    size = 'base',
    pixel = false,
    weight = 'normal',
    color = 'default',
    truncate = false,
    lineClamp,
    align,
    children,
    className = '',
    ...props
  }) => {
    const classes = useMemo(
      () =>
        cn(
          SIZE_CLASSES[size],
          WEIGHT_CLASSES[weight],
          COLOR_CLASSES[color],
          pixel && 'pixel-text',
          truncate && (lineClamp ? `line-clamp-${lineClamp}` : 'truncate'),
          align && `text-${align}`,
          className
        ),
      [size, weight, color, pixel, truncate, lineClamp, align, className]
    );

    const Component = variant;

    return (
      <Component className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
