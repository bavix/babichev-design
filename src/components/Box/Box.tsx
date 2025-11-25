import React, { memo, useMemo, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'outlined' | 'filled' | 'elevated';
  interactive?: boolean;
  clickable?: boolean;
  loading?: boolean;
  hover?: boolean;
}

const PADDING_CLASSES = {
  none: '',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
} as const;

const VARIANT_CLASSES = {
  default: 'pixel-box',
  outlined: 'pixel-box-outlined',
  filled: 'pixel-box-filled',
  elevated: 'pixel-box-elevated',
} as const;

export const Box = memo(
  forwardRef<HTMLDivElement, BoxProps>(
    (
      {
        children,
        padding = 'md',
        variant = 'default',
        interactive = false,
        clickable = false,
        loading = false,
        hover = false,
        className = '',
        ...props
      },
      ref
    ) => {
      const classes = useMemo(
        () =>
          cn(
            VARIANT_CLASSES[variant],
            PADDING_CLASSES[padding],
            interactive && 'pixel-box-interactive',
            clickable && 'cursor-pointer',
            hover && 'hover:border-pixel-border-light transition-colors',
            loading && 'pixel-box-loading',
            className
          ),
        [variant, padding, interactive, clickable, hover, loading, className]
      );

      return (
        <div ref={ref} className={classes} {...props}>
          {loading ? (
            <div className="space-y-2" aria-busy="true" aria-label="Loading">
              <div className="h-4 skeleton rounded" />
              <div className="h-4 skeleton rounded w-3/4" />
              <div className="h-4 skeleton rounded w-1/2" />
            </div>
          ) : (
            children
          )}
        </div>
      );
    }
  )
);

Box.displayName = 'Box';
