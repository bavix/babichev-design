import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArticleCard } from './ArticleCard';

const meta: Meta<typeof ArticleCard> = {
  title: 'Components/Cards/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    title: 'How to Build a Design System',
    url: '/articles/design-system/',
    excerpt: 'A comprehensive guide to building a design system from scratch',
    date: '02.01.2024',
    tags: ['design', 'ui', 'react'],
  },
};

export const Compact: Story = {
  args: {
    title: 'Compact Article Card',
    url: '/articles/compact/',
    excerpt: 'This is a compact version',
    tags: ['go', 'backend'],
    variant: 'compact',
  },
};

export const WithoutTags: Story = {
  args: {
    title: 'Article Without Tags',
    url: '/articles/no-tags/',
    excerpt: 'This article has no tags',
    date: '02.01.2024',
  },
};

export const WithoutExcerpt: Story = {
  args: {
    title: 'Article Without Excerpt',
    url: '/articles/no-excerpt/',
    date: '02.01.2024',
    tags: ['go'],
  },
};

export const Featured: Story = {
  args: {
    title: 'Featured Article',
    url: '/articles/featured/',
    excerpt: 'This is a featured article with special styling',
    date: '02.01.2024',
    tags: ['featured', 'important'],
    featured: true,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Article',
    url: '/articles/loading/',
    loading: true,
  },
};

export const WithOnClick: Story = {
  args: {
    title: 'Clickable Article',
    url: '/articles/clickable/',
    excerpt: 'Click anywhere on the card',
    date: '02.01.2024',
    tags: ['interactive'],
    onClick: () => alert('Article clicked!'),
  },
};
