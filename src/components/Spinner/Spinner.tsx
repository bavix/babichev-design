import { memo } from 'react';
import { cn } from '../../utils/cn';
import { useI18n } from '../../i18n';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  'aria-label'?: string;
}

const SIZE_CLASSES = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
} as const;

export const Spinner = memo<SpinnerProps>(
  ({ size = 'sm', className = '', 'aria-label': ariaLabel, ...props }) => {
    const { t } = useI18n();
    const label = ariaLabel || t('common.loading');

    return (
      <div
        className={cn('pixel-spinner', SIZE_CLASSES[size], className)}
        role="status"
        aria-label={label}
        {...props}
      >
        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
