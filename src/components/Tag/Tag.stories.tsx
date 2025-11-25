import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'go',
  },
};

export const WithLink: Story = {
  args: {
    children: 'go',
    href: '/tags/go/',
  },
};

export const WithOnClick: Story = {
  args: {
    children: 'go',
    onClick: () => alert('Tag clicked!'),
  },
};

export const MultipleTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>go</Tag>
      <Tag>php</Tag>
      <Tag>rust</Tag>
      <Tag>javascript</Tag>
      <Tag>testing</Tag>
    </div>
  ),
};
