import React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';

export interface AboutCardProps {
  title?: string;
  children: React.ReactNode;
}

export const AboutCard: React.FC<AboutCardProps> = ({ title = 'ABOUT ME', children }) => {
  return (
    <Box padding="lg">
      <div className="border-b-2 border-pixel-border pb-3 mb-5">
        <Typography variant="h2" size="xl" pixel>
          {title}
        </Typography>
      </div>

      <div className="space-y-4 text-sm sm:text-base leading-relaxed">{children}</div>
    </Box>
  );
};
