import React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';

export interface ContactInfoCardProps {
  title?: string;
  email?: string;
  phone?: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  title = 'CONTACTS',
  email,
  phone,
}) => {
  return (
    <Box>
      <Typography variant="h2" size="base" pixel className="mb-3">
        {title}
      </Typography>

      <div className="space-y-2 text-sm">
        {email && (
          <a
            href={`mailto:${email}`}
            className="block hover:text-pixel-border-light transition-colors"
          >
            <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
              &gt; EMAIL:
            </Typography>
            <Typography variant="p" size="sm" className="font-bold break-all">
              {email}
            </Typography>
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className="block hover:text-pixel-border-light transition-colors"
          >
            <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
              &gt; PHONE:
            </Typography>
            <Typography variant="p" size="sm" className="font-bold break-all">
              {phone}
            </Typography>
          </a>
        )}
      </div>
    </Box>
  );
};
