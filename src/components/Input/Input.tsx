import React, { memo, useMemo, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled';
  fullWidth?: boolean;
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

const SIZE_CLASSES = {
  sm: 'text-sm px-3 py-2',
  md: 'text-base px-4 py-2.5',
  lg: 'text-lg px-5 py-3',
} as const;

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        size = 'md',
        variant = 'default',
        fullWidth = false,
        error = false,
        leftIcon,
        rightIcon,
        className = '',
        containerClassName = '',
        disabled,
        ...props
      },
      ref
    ) => {
      const containerClasses = useMemo(
        () => cn('pixel-input-container', fullWidth && 'w-full', containerClassName),
        [fullWidth, containerClassName]
      );

      const inputClasses = useMemo(
        () =>
          cn(
            'pixel-input',
            SIZE_CLASSES[size],
            variant === 'filled' && 'pixel-input-filled',
            error && 'pixel-input-error',
            leftIcon ? 'pl-10' : undefined,
            rightIcon ? 'pr-10' : undefined,
            fullWidth && 'w-full',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          ),
        [size, variant, error, leftIcon, rightIcon, fullWidth, disabled, className]
      );

      return (
        <div className={containerClasses}>
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pixel-text-muted z-10">
              {leftIcon}
            </div>
          )}
          <input ref={ref} className={inputClasses} disabled={disabled} {...props} />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pixel-text-muted z-10">
              {rightIcon}
            </div>
          )}
        </div>
      );
    }
  )
);

Input.displayName = 'Input';
