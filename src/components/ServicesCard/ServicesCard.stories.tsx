import type { Meta, StoryObj } from '@storybook/react-vite';
import { ServicesCard } from './ServicesCard';

const meta: Meta<typeof ServicesCard> = {
  title: 'Components/Cards/ServicesCard',
  component: ServicesCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ServicesCard>;

export const Default: Story = {
  args: {
    services: [
      {
        name: 'EXCALIDRAW',
        url: 'https://excalidraw.babichev.net',
        description: 'Online whiteboard',
      },
    ],
  },
};

export const MultipleServices: Story = {
  args: {
    services: [
      {
        name: 'EXCALIDRAW',
        url: 'https://excalidraw.babichev.net',
        description: 'Online whiteboard',
      },
      {
        name: 'SERVICE 2',
        url: 'https://example.com',
        description: 'Another service description',
      },
      {
        name: 'SERVICE 3',
        url: 'https://example.com',
        description: 'Yet another service',
      },
    ],
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'MY SERVICES',
    services: [
      {
        name: 'SERVICE 1',
        url: 'https://example.com',
        description: 'Service description',
      },
    ],
  },
};
