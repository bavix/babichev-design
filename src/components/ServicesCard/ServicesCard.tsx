import React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';

export interface Service {
  name: string;
  url: string;
  description: string;
}

export interface ServicesCardProps {
  title?: string;
  services: Service[];
}

export const ServicesCard: React.FC<ServicesCardProps> = ({ title = 'SERVICES', services }) => {
  return (
    <Box>
      <Typography variant="h2" size="base" pixel className="mb-3">
        {title}
      </Typography>

      <div className="space-y-2">
        {services.map((service, index) => (
          <div key={index} className="border-l-2 border-pixel-border pl-3">
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-pixel-border-light transition-colors"
            >
              <Typography variant="p" size="sm" pixel className="font-bold mb-1">
                &gt; {service.name}
              </Typography>
              <Typography variant="p" size="xs" className="text-pixel-text-muted">
                {service.description}
              </Typography>
            </a>
          </div>
        ))}
      </div>
    </Box>
  );
};
