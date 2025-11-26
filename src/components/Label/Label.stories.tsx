import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'USERNAME',
  },
};

export const WithInput: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label {...args}>USERNAME</Label>
      <Input placeholder="Enter username" />
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label {...args} required>
        PASSWORD
      </Label>
      <Input type="password" placeholder="Enter password" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label {...args} size="sm">
          SMALL LABEL
        </Label>
        <Input size="sm" placeholder="Small input" />
      </div>
      <div className="space-y-2">
        <Label {...args} size="md">
          MEDIUM LABEL
        </Label>
        <Input size="md" placeholder="Medium input" />
      </div>
      <div className="space-y-6">
        <Label {...args} size="lg">
          LARGE LABEL
        </Label>
        <Input size="lg" placeholder="Large input" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label {...args}>NORMAL LABEL</Label>
        <Input placeholder="Normal state" />
      </div>
      <div className="space-y-2">
        <Label {...args} disabled>
          DISABLED LABEL
        </Label>
        <Input disabled placeholder="Disabled state" />
      </div>
    </div>
  ),
};
