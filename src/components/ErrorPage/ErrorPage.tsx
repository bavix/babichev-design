import React from 'react';
import { Typography } from '../Typography';

export interface ErrorPageProps {
  code: number;
  title: string;
  description: string;
  characterUrl?: string;
  characterAlt?: string;
  info?: Array<{ label: string; value: string; highlight?: boolean }>;
  backButtonText?: string;
  backUrl?: string;
  onBackClick?: () => void;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  code,
  title,
  description,
  characterUrl,
  characterAlt,
  info = [],
  backButtonText = '< Return to home',
  backUrl = '/',
  onBackClick,
}) => {
  const errorClass = `error-${code}`;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className={`max-w-2xl w-full text-center space-y-8 ${errorClass}`}>
        <div className="space-y-6">
          <div className="error-code-display">
            <div className="error-code-number">{code}</div>
          </div>

          <div className="space-y-3">
            <Typography variant="h1" size="2xl" pixel className="error-title">
              {title.toUpperCase()}
            </Typography>
            <Typography variant="p" size="sm" className="error-description">
              {description}
            </Typography>
          </div>
        </div>

        {characterUrl && (
          <div className="flex justify-center">
            <div className="w-40 h-40 sm:w-48 sm:h-48">
              <img
                src={characterUrl}
                alt={characterAlt || `Error ${code}`}
                className="w-full h-full opacity-80 error-character"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>
        )}

        {info.length > 0 && (
          <div className="text-xs pixel-text text-pixel-text-muted space-y-1 max-w-md mx-auto">
            {info.map((item, index) => (
              <div key={index}>
                &gt; {item.label}:{' '}
                <span className={item.highlight ? 'text-pixel-accent' : 'text-pixel-text'}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4">
          {onBackClick ? (
            <button
              onClick={onBackClick}
              className="text-pixel-border-light hover:text-pixel-text text-sm pixel-text underline transition-colors"
            >
              {backButtonText}
            </button>
          ) : (
            <a
              href={backUrl}
              className="text-pixel-border-light hover:text-pixel-text text-sm pixel-text underline transition-colors"
            >
              {backButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
