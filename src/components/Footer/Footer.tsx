import React from 'react';
import { Typography } from '../Typography';

export interface FooterProps {
  login: string;
  name: string;
  startYear?: number;
}

export const Footer: React.FC<FooterProps> = ({ login, name, startYear = 2014 }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-pixel-border mt-8 pt-4">
      <div className="text-center">
        <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
          &gt; COPYRIGHT (C) {startYear}-{currentYear}, {name.toUpperCase()} ({login})
        </Typography>
      </div>
    </footer>
  );
};
