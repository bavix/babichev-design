import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled', 'elevated'],
    },
    interactive: {
      control: 'boolean',
    },
    clickable: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    hover: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: 'This is a pixel box',
  },
};

export const SmallPadding: Story = {
  args: {
    children: 'Small padding',
    padding: 'sm',
  },
};

export const MediumPadding: Story = {
  args: {
    children: 'Medium padding (default)',
    padding: 'md',
  },
};

export const LargePadding: Story = {
  args: {
    children: 'Large padding',
    padding: 'lg',
  },
};

export const NoPadding: Story = {
  args: {
    children: 'No padding',
    padding: 'none',
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <div className="space-y-2">
        <h2 className="text-lg font-bold pixel-text">BOX TITLE</h2>
        <p className="text-sm">
          This is a box with some content inside. It has a pixel-style border and shadow.
        </p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Box variant="default">Default Box</Box>
      <Box variant="outlined">Outlined Box</Box>
      <Box variant="filled">Filled Box</Box>
      <Box variant="elevated">Elevated Box</Box>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Box interactive>Interactive Box (hover effect)</Box>
      <Box clickable onClick={() => alert('Clicked!')}>
        Clickable Box
      </Box>
      <Box hover>Box with hover effect</Box>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
