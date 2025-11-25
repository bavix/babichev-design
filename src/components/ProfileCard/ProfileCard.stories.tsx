import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'Components/Cards/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    login: 'REZ1DENT3',
    name: 'Maxim Babichev',
    profession: 'Software Developer',
    githubUrl: 'https://github.com/rez1dent3',
    logoUrl: 'https://babichev.net/assets/svg/logo.svg',
  },
};

export const WithoutLogo: Story = {
  args: {
    login: 'REZ1DENT3',
    name: 'Maxim Babichev',
    profession: 'Software Developer',
    githubUrl: 'https://github.com/rez1dent3',
  },
};

export const WithoutGithub: Story = {
  args: {
    login: 'REZ1DENT3',
    name: 'Maxim Babichev',
    profession: 'Software Developer',
  },
};
