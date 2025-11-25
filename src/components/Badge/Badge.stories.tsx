import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'BADGE',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge variant="default">DEFAULT</Badge>
      <Badge variant="primary">PRIMARY</Badge>
      <Badge variant="success">SUCCESS</Badge>
      <Badge variant="warning">WARNING</Badge>
      <Badge variant="danger">DANGER</Badge>
      <Badge variant="info">INFO</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
    </div>
  ),
};

export const Dot: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Badge dot variant="success" size="xs" />
        <span className="text-xs pixel-text">XS</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Badge dot variant="success" size="sm" />
        <span className="text-xs pixel-text">SM</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Badge dot variant="success" size="md" />
        <span className="text-xs pixel-text">MD</span>
      </div>
    </div>
  ),
};

export const DotVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge dot variant="success" />
      <Badge dot variant="warning" />
      <Badge dot variant="danger" />
      <Badge dot variant="primary" />
      <Badge dot variant="info" />
      <Badge dot variant="default" />
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>5</Badge>
      <Badge variant="primary">12</Badge>
      <Badge variant="success">42</Badge>
      <Badge variant="danger">99+</Badge>
      <Badge variant="warning">3</Badge>
      <Badge variant="info">7</Badge>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="pixel-box p-6 space-y-4">
      <div className="flex items-center gap-3">
        <span className="pixel-text">Notifications</span>
        <Badge variant="danger">3</Badge>
      </div>
      <div className="flex items-center gap-3">
        <span className="pixel-text">Status</span>
        <Badge variant="success">ACTIVE</Badge>
      </div>
      <div className="flex items-center gap-3">
        <span className="pixel-text">Version</span>
        <Badge variant="info">v2.0</Badge>
      </div>
      <div className="flex items-center gap-3">
        <span className="pixel-text">New</span>
        <Badge dot variant="primary" />
      </div>
    </div>
  ),
};
