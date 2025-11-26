import React, { memo, useMemo, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const SIZE_CLASSES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

export const Label = memo(
  forwardRef<HTMLLabelElement, LabelProps>(
    (
      { size = 'md', required = false, disabled = false, className = '', children, ...props },
      ref
    ) => {
      const classes = useMemo(
        () =>
          cn(
            'pixel-label',
            SIZE_CLASSES[size],
            'font-bold pixel-text block mb-2',
            disabled && 'opacity-50',
            className
          ),
        [size, disabled, className]
      );

      return (
        <label ref={ref} className={classes} {...props}>
          {children}
          {required && <span className="text-pixel-accent ml-1">*</span>}
        </label>
      );
    }
  )
);

Label.displayName = 'Label';
