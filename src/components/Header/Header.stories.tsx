import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'MAXIM BABICHEV',
    subtitle: 'SOFTWARE DEVELOPER | GO | PHP | RUST',
    logoUrl: 'https://babichev.net/assets/svg/mascot.svg',
    logoAlt: 'Go Gopher - mascot of Maxim Babichev site',
    menuItems: [
      { identifier: 'about', name: 'ABOUT', url: '/' },
      { identifier: 'projects', name: 'PROJECTS', url: '/projects/' },
      { identifier: 'articles', name: 'ARTICLES', url: '/articles/' },
    ],
    activeMenuItem: 'about',
  },
};

export const WithoutLogo: Story = {
  args: {
    title: 'MAXIM BABICHEV',
    subtitle: 'SOFTWARE DEVELOPER | GO | PHP | RUST',
    menuItems: [
      { identifier: 'about', name: 'ABOUT', url: '/' },
      { identifier: 'projects', name: 'PROJECTS', url: '/projects/' },
    ],
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: 'MAXIM BABICHEV',
    logoUrl: 'https://babichev.net/assets/svg/mascot.svg',
    menuItems: [
      { identifier: 'about', name: 'ABOUT', url: '/' },
      { identifier: 'projects', name: 'PROJECTS', url: '/projects/' },
    ],
  },
};

export const WithoutMenu: Story = {
  args: {
    title: 'MAXIM BABICHEV',
    subtitle: 'SOFTWARE DEVELOPER | GO | PHP | RUST',
    logoUrl: 'https://babichev.net/assets/svg/mascot.svg',
  },
};
