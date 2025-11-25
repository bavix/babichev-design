import React, { memo, useMemo, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Spinner } from '../Spinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  active?: boolean;
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'ghost';
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  children: React.ReactNode;
  'aria-label'?: string;
}

const SIZE_CLASSES = {
  xs: 'text-xs px-3 py-1.5',
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-5 py-2.5',
  lg: 'text-lg px-6 py-3',
} as const;

const ICON_ONLY_SIZE_CLASSES = {
  xs: 'p-1.5',
  sm: 'p-2',
  md: 'p-2.5',
  lg: 'p-3',
} as const;

const VARIANT_CLASSES = {
  default: '',
  primary: 'pixel-button-primary',
  secondary: 'pixel-button-secondary',
  danger: 'pixel-button-danger',
  ghost: 'pixel-button-ghost',
} as const;

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        size = 'xs',
        active = false,
        variant = 'default',
        loading = false,
        fullWidth = false,
        leftIcon,
        rightIcon,
        iconOnly = false,
        children,
        className = '',
        disabled,
        'aria-label': ariaLabel,
        ...props
      },
      ref
    ) => {
      const isDisabled = disabled || loading;

      const classes = useMemo(
        () =>
          cn(
            'pixel-button',
            iconOnly ? ICON_ONLY_SIZE_CLASSES[size] : SIZE_CLASSES[size],
            VARIANT_CLASSES[variant],
            active && 'active',
            loading && 'loading',
            fullWidth && 'w-full',
            iconOnly && 'pixel-button-icon-only',
            isDisabled && 'opacity-50 cursor-not-allowed',
            className
          ),
        [size, variant, active, loading, fullWidth, iconOnly, isDisabled, className]
      );

      const content = useMemo(() => {
        if (loading) {
          return (
            <>
              <Spinner size={size} className="mr-2" />
              {!iconOnly && children}
            </>
          );
        }

        if (iconOnly) {
          return children;
        }

        return (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        );
      }, [loading, iconOnly, children, leftIcon, rightIcon, size]);

      return (
        <button
          ref={ref}
          className={classes}
          disabled={isDisabled}
          aria-label={ariaLabel || (iconOnly ? String(children) : undefined)}
          aria-pressed={active}
          aria-busy={loading}
          {...props}
        >
          {content}
        </button>
      );
    }
  )
);

Button.displayName = 'Button';
