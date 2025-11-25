import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialLinksCard } from './SocialLinksCard';

const meta: Meta<typeof SocialLinksCard> = {
  title: 'Components/Cards/SocialLinksCard',
  component: SocialLinksCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialLinksCard>;

export const Default: Story = {
  args: {
    links: [
      { name: 'GITHUB', url: 'https://github.com/rez1dent3' },
      { name: 'TELEGRAM', url: 'https://t.me/mbabichev' },
      { name: 'TWITTER', url: 'https://twitter.com/rez1dent3' },
      { name: 'HABR', url: 'https://habr.com/users/REZ1DENT3/' },
    ],
  },
};

export const ManyLinks: Story = {
  args: {
    links: [
      { name: 'GITHUB', url: 'https://github.com/rez1dent3' },
      { name: 'TELEGRAM', url: 'https://t.me/mbabichev' },
      { name: 'TWITTER', url: 'https://twitter.com/rez1dent3' },
      { name: 'HABR', url: 'https://habr.com/users/REZ1DENT3/' },
      { name: 'FACEBOOK', url: 'https://www.facebook.com/rez1dent3' },
      { name: 'INSTAGRAM', url: 'https://instagram.com/m.babichev' },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'SOCIAL NETWORKS',
    links: [
      { name: 'GITHUB', url: 'https://github.com/rez1dent3' },
      { name: 'TELEGRAM', url: 'https://t.me/mbabichev' },
    ],
  },
};
