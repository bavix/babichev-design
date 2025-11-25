import { memo } from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { cn } from '../../utils/cn';

export interface ProjectLink {
  type: 'github' | 'docs' | 'service' | 'debugger';
  url: string;
  label: string;
}

export interface ProjectCardProps {
  title: string;
  url: string;
  excerpt?: string;
  date?: string;
  tags?: string[];
  links?: ProjectLink[];
  variant?: 'default' | 'compact';
  loading?: boolean;
  onClick?: () => void;
  featured?: boolean;
  status?: 'active' | 'archived' | 'deprecated';
}

export const ProjectCard = memo<ProjectCardProps>(
  ({
    title,
    url,
    excerpt,
    date,
    tags = [],
    links = [],
    variant = 'default',
    loading = false,
    onClick,
    featured = false,
    status,
  }) => {
    if (loading) {
      return (
        <Box
          className={cn(
            'hover:border-pixel-border-light transition-colors',
            featured && 'border-pixel-accent',
            'pointer-events-none',
            status === 'archived' && 'opacity-60',
            status === 'deprecated' && 'opacity-40'
          )}
        >
          <div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 w-full"
            aria-busy="true"
            aria-label="Loading project"
          >
            <div className="flex-1 min-w-0 space-y-4">
              <div className="space-y-2.5">
                <div className="h-7 skeleton rounded w-3/4" />
                <div className="h-7 skeleton rounded w-1/2" />
              </div>
              <div className="space-y-2">
                <div className="h-4 skeleton rounded w-full" />
                <div className="h-4 skeleton rounded w-5/6" />
                <div className="h-4 skeleton rounded w-4/6" />
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <div className="h-5 skeleton rounded w-16" />
                <div className="h-5 skeleton rounded w-20" />
                <div className="h-5 skeleton rounded w-14" />
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <div className="h-8 skeleton rounded w-20" />
                <div className="h-8 skeleton rounded w-16" />
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 sm:flex-shrink-0">
              {variant === 'default' && <div className="h-4 skeleton rounded w-20" />}
              <div className="h-8 skeleton rounded w-28" />
            </div>
          </div>
        </Box>
      );
    }

    return (
      <Box
        className={cn(
          'hover:border-pixel-border-light transition-colors',
          featured && 'border-pixel-accent',
          onClick && 'cursor-pointer',
          status === 'archived' && 'opacity-60',
          status === 'deprecated' && 'opacity-40'
        )}
        onClick={onClick}
        interactive={!!onClick}
      >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1 min-w-0">
              <a href={url} className="block mb-3">
                <Typography
                  variant="h2"
                  size="lg"
                  pixel
                  className="mb-3 break-words hover:text-pixel-border-light transition-colors"
                >
                  {title.toUpperCase()}
                </Typography>
              </a>
              {excerpt && (
                <Typography
                  variant="p"
                  size="sm"
                  className="text-pixel-text-muted leading-relaxed mb-4"
                >
                  &gt; {excerpt}
                </Typography>
              )}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      href={`/tags/${tag.toLowerCase()}/`}
                      className="text-xs text-pixel-text-muted hover:text-pixel-border-light transition-colors"
                    >
                      #{tag.toUpperCase()}
                    </a>
                  ))}
                </div>
              )}
              {links.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button size="xs">{link.label.toUpperCase()}</Button>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col items-end gap-2 sm:flex-shrink-0">
              {variant === 'default' && date && (
                <Typography
                  variant="p"
                  size="xs"
                  pixel
                  className="text-pixel-text-muted whitespace-nowrap"
                >
                  &gt; {date}
                </Typography>
              )}
              <a href={url}>
                <Button size="xs">VIEW DETAILS</Button>
              </a>
            </div>
          </div>
      </Box>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';
