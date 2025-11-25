import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label', 'code', 'pre'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
    pixel: {
      control: 'boolean',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'accent', 'success', 'warning', 'danger'],
    },
    truncate: {
      control: 'boolean',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'HEADING 1',
    pixel: true,
    size: '3xl',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'HEADING 2',
    pixel: true,
    size: '2xl',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'HEADING 3',
    pixel: true,
    size: 'xl',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph with regular text styling.',
    size: 'base',
  },
};

export const PixelText: Story = {
  args: {
    variant: 'p',
    children: 'PIXEL TEXT STYLE',
    pixel: true,
    size: 'base',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Typography size="xs">Extra Small Text</Typography>
      <Typography size="sm">Small Text</Typography>
      <Typography size="base">Base Text</Typography>
      <Typography size="lg">Large Text</Typography>
      <Typography size="xl">Extra Large Text</Typography>
      <Typography size="2xl">2XL Text</Typography>
      <Typography size="3xl">3XL Text</Typography>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Typography variant="h1" pixel size="3xl">
        H1 HEADING
      </Typography>
      <Typography variant="h2" pixel size="2xl">
        H2 HEADING
      </Typography>
      <Typography variant="h3" pixel size="xl">
        H3 HEADING
      </Typography>
      <Typography variant="p" size="base">
        Regular paragraph text
      </Typography>
      <Typography variant="span" pixel size="sm">
        SPAN TEXT
      </Typography>
      <Typography variant="code" size="sm">
        code example
      </Typography>
      <Typography variant="label" size="sm">
        Label text
      </Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Typography weight="light">Light weight text</Typography>
      <Typography weight="normal">Normal weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
      <Typography weight="extrabold">Extrabold weight text</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Typography color="default">Default color</Typography>
      <Typography color="muted">Muted color</Typography>
      <Typography color="accent">Accent color</Typography>
      <Typography color="success">Success color</Typography>
      <Typography color="warning">Warning color</Typography>
      <Typography color="danger">Danger color</Typography>
    </div>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Typography truncate>
        This is a very long text that will be truncated with ellipsis
      </Typography>
      <Typography lineClamp={2}>
        This is a very long text that will be clamped to two lines. It should show ellipsis after
        the second line.
      </Typography>
      <Typography lineClamp={3}>
        This is a very long text that will be clamped to three lines. It should show ellipsis after
        the third line. This demonstrates the line clamp functionality.
      </Typography>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text spreads across the full width of the container, creating even spacing between
        words.
      </Typography>
    </div>
  ),
};
