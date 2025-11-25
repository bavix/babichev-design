import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Navigation/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    login: 'REZ1DENT3',
    name: 'Maxim Babichev',
    startYear: 2014,
  },
};

export const CustomStartYear: Story = {
  args: {
    login: 'USER123',
    name: 'John Doe',
    startYear: 2020,
  },
};
