import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" />
        <span className="text-xs pixel-text">XS</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs pixel-text">SM</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs pixel-text">MD</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs pixel-text">LG</span>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <button className="pixel-button px-4 py-2 flex items-center gap-2">
        <Spinner size="sm" />
        Loading...
      </button>
      <button className="pixel-button-primary px-4 py-2 flex items-center gap-2">
        <Spinner size="sm" />
        Processing...
      </button>
    </div>
  ),
};

export const InBox: Story = {
  render: () => (
    <div className="pixel-box p-8 flex items-center justify-center">
      <Spinner size="md" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3">
      <Spinner size="md" aria-label="Loading content" />
      <span className="text-sm pixel-text">Loading content...</span>
    </div>
  ),
};
