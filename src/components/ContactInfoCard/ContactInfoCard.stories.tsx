import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContactInfoCard } from './ContactInfoCard';

const meta: Meta<typeof ContactInfoCard> = {
  title: 'Components/Cards/ContactInfoCard',
  component: ContactInfoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactInfoCard>;

export const Default: Story = {
  args: {
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
  },
};

export const EmailOnly: Story = {
  args: {
    email: 'contact@example.com',
  },
};

export const PhoneOnly: Story = {
  args: {
    phone: '+1 (555) 123-4567',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'CONTACT ME',
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
  },
};
