import React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Button } from '../Button';

export interface ProfileCardProps {
  login: string;
  name: string;
  profession: string;
  githubUrl?: string;
  logoUrl?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  login,
  name,
  profession,
  githubUrl,
  logoUrl,
}) => {
  return (
    <Box>
      <div className="flex items-center gap-3 mb-4">
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo"
            className="w-12 h-12 object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        )}
        <div>
          <Typography variant="h2" size="base" pixel>
            USER INFO
          </Typography>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div>
          <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
            &gt; LOGIN:
          </Typography>
          <Typography variant="p" size="sm" className="font-bold">
            {login}
          </Typography>
        </div>
        <div>
          <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
            &gt; NAME:
          </Typography>
          <Typography variant="p" size="sm" className="font-bold">
            {name}
          </Typography>
        </div>
        <div className="pt-2 border-t border-pixel-border">
          <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
            &gt; PROFESSION:
          </Typography>
          <Typography variant="p" size="sm" className="font-bold">
            {profession}
          </Typography>
        </div>
        {githubUrl && (
          <div className="pt-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button size="xs">GITHUB: @{login}</Button>
            </a>
          </div>
        )}
      </div>
    </Box>
  );
};
