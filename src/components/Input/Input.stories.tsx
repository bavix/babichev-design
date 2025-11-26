import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { User, Lock, Search } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="username-default" className="pixel-text text-sm font-bold">
        USERNAME
      </label>
      <Input id="username-default" {...args} />
    </div>
  ),
  args: {
    placeholder: 'Enter username',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-2">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="username-icons" className="pixel-text text-sm font-bold">
          USERNAME
        </label>
        <Input
          id="username-icons"
          {...args}
          leftIcon={<User size={16} />}
          placeholder="Enter username"
        />
      </div>
      <div className="space-y-2">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password-icons" className="pixel-text text-sm font-bold">
          PASSWORD
        </label>
        <Input
          id="password-icons"
          {...args}
          leftIcon={<Lock size={16} />}
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div className="space-y-2">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="search-icons" className="pixel-text text-sm font-bold">
          SEARCH
        </label>
        <Input
          id="search-icons"
          {...args}
          leftIcon={<Search size={16} />}
          placeholder="Search..."
        />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Input {...args} size="sm" placeholder="Small input" />
      <Input {...args} size="md" placeholder="Medium input" />
      <Input {...args} size="lg" placeholder="Large input" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Input {...args} placeholder="Normal state" />
      <Input {...args} placeholder="Disabled state" disabled />
      <Input {...args} placeholder="Error state" error />
      <Input {...args} placeholder="Filled variant" variant="filled" />
    </div>
  ),
};

export const FullWidth: Story = {
  render: (args) => (
    <div className="w-96">
      <Input {...args} fullWidth />
    </div>
  ),
  args: {
    placeholder: 'Full width input',
  },
};
