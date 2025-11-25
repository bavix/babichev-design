import React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Button } from '../Button';

export interface SocialLink {
  name: string;
  url: string;
}

export interface SocialLinksCardProps {
  title?: string;
  links: SocialLink[];
}

export const SocialLinksCard: React.FC<SocialLinksCardProps> = ({ title = 'LINKS', links }) => {
  return (
    <Box>
      <Typography variant="h2" size="base" pixel className="mb-3">
        {title}
      </Typography>

      <div className="grid grid-cols-2 gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button size="xs" className="w-full text-center">
              {link.name}
            </Button>
          </a>
        ))}
      </div>
    </Box>
  );
};
