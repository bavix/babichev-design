import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/Cards/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'Laravel Wallet',
    url: '/projects/laravel-wallet/',
    excerpt: 'A flexible package for managing wallets in Laravel applications',
    date: '02.01.2024',
    tags: ['php', 'laravel', 'payment', 'wallet'],
    links: [
      { type: 'github', url: 'https://github.com/bavix/laravel-wallet', label: 'GITHUB' },
      { type: 'docs', url: 'https://laravel-wallet.docs', label: 'DOCS' },
    ],
  },
};

export const Compact: Story = {
  args: {
    title: 'Compact Project',
    url: '/projects/compact/',
    excerpt: 'This is a compact version',
    tags: ['go'],
    links: [{ type: 'github', url: 'https://github.com/example', label: 'GITHUB' }],
    variant: 'compact',
  },
};

export const WithoutLinks: Story = {
  args: {
    title: 'Project Without Links',
    url: '/projects/no-links/',
    excerpt: 'This project has no external links',
    date: '02.01.2024',
    tags: ['go'],
  },
};

export const WithoutTags: Story = {
  args: {
    title: 'Project Without Tags',
    url: '/projects/no-tags/',
    excerpt: 'This project has no tags',
    date: '02.01.2024',
    links: [{ type: 'github', url: 'https://github.com/example', label: 'GITHUB' }],
  },
};

export const Featured: Story = {
  args: {
    title: 'Featured Project',
    url: '/projects/featured/',
    excerpt: 'This is a featured project',
    date: '02.01.2024',
    tags: ['featured', 'important'],
    links: [{ type: 'github', url: 'https://github.com/example', label: 'GITHUB' }],
    featured: true,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Project',
    url: '/projects/loading/',
    loading: true,
  },
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ProjectCard
        title="Active Project"
        url="/projects/active/"
        excerpt="This project is active"
        status="active"
        links={[{ type: 'github', url: 'https://github.com/example', label: 'GITHUB' }]}
      />
      <ProjectCard
        title="Archived Project"
        url="/projects/archived/"
        excerpt="This project is archived"
        status="archived"
        links={[{ type: 'github', url: 'https://github.com/example', label: 'GITHUB' }]}
      />
      <ProjectCard
        title="Deprecated Project"
        url="/projects/deprecated/"
        excerpt="This project is deprecated"
        status="deprecated"
        links={[{ type: 'github', url: 'https://github.com/example', label: 'GITHUB' }]}
      />
    </div>
  ),
};

export const WithOnClick: Story = {
  args: {
    title: 'Clickable Project',
    url: '/projects/clickable/',
    excerpt: 'Click anywhere on the card',
    date: '02.01.2024',
    tags: ['interactive'],
    links: [{ type: 'github', url: 'https://github.com/example', label: 'GITHUB' }],
    onClick: () => alert('Project clicked!'),
  },
};
