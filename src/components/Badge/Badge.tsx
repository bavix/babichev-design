import React, { memo, useMemo } from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'xs' | 'sm' | 'md';
  dot?: boolean;
  children?: React.ReactNode;
}

const VARIANT_CLASSES = {
  default: 'pixel-badge-default',
  primary: 'pixel-badge-primary',
  success: 'pixel-badge-success',
  warning: 'pixel-badge-warning',
  danger: 'pixel-badge-danger',
  info: 'pixel-badge-info',
} as const;

const SIZE_CLASSES = {
  xs: 'text-xs px-1.5 py-0.5',
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-2.5 py-1.5',
} as const;

const DOT_SIZE_CLASSES = {
  xs: 'w-2 h-2',
  sm: 'w-2.5 h-2.5',
  md: 'w-3 h-3',
} as const;

export const Badge = memo<BadgeProps>(
  ({ variant = 'default', size = 'sm', dot = false, children, className = '', ...props }) => {
    const classes = useMemo(
      () =>
        cn(
          'pixel-badge inline-flex items-center justify-center font-bold pixel-text border-2',
          VARIANT_CLASSES[variant],
          dot ? DOT_SIZE_CLASSES[size] : SIZE_CLASSES[size],
          dot && 'rounded-full p-0',
          !dot && 'rounded',
          className
        ),
      [variant, size, dot, className]
    );

    if (dot) {
      return <span className={classes} aria-label={String(children)} {...props} />;
    }

    return (
      <span className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
