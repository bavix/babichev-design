import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger', 'ghost'],
    },
    active: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'BUTTON',
    size: 'xs',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">DEFAULT</Button>
      <Button variant="primary">PRIMARY</Button>
      <Button variant="secondary">SECONDARY</Button>
      <Button variant="danger">DANGER</Button>
      <Button variant="ghost">GHOST</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button size="xs">EXTRA SMALL</Button>
      <Button size="sm">SMALL</Button>
      <Button size="md">MEDIUM</Button>
      <Button size="lg">LARGE</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: 'LOADING...',
    loading: true,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button leftIcon={<span>→</span>}>WITH LEFT ICON</Button>
      <Button rightIcon={<span>→</span>}>WITH RIGHT ICON</Button>
      <Button leftIcon={<span>→</span>} rightIcon={<span>←</span>}>
        BOTH ICONS
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button iconOnly aria-label="Close">
        ×
      </Button>
      <Button iconOnly aria-label="Edit">
        ✎
      </Button>
      <Button iconOnly aria-label="Delete" variant="danger">
        🗑
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button>DEFAULT</Button>
      <Button active>ACTIVE</Button>
      <Button disabled>DISABLED</Button>
      <Button loading>LOADING</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-64">
      <Button fullWidth>FULL WIDTH BUTTON</Button>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button onClick={() => alert('Clicked!')}>CLICK ME</Button>
      <Button variant="primary" onClick={() => alert('Primary clicked!')}>
        PRIMARY ACTION
      </Button>
      <Button variant="danger" onClick={() => alert('Danger clicked!')}>
        DANGEROUS ACTION
      </Button>
    </div>
  ),
};
