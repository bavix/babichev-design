import type { Meta, StoryObj } from '@storybook/react-vite';
import { AboutCard } from './AboutCard';
import { Typography } from '../Typography';

const meta: Meta<typeof AboutCard> = {
  title: 'Components/Cards/AboutCard',
  component: AboutCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutCard>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Typography variant="p" pixel>
          &gt; Hello! My name is <span className="text-pixel-accent font-bold">Maxim</span> — a
          Software Developer who turns ideas into code and code into solutions. I love clean code,
          interesting challenges, and coffee ☕
        </Typography>
        <div className="space-y-4 border-l-2 border-pixel-border pl-4 sm:pl-6">
          <Typography variant="p" pixel>
            &gt; Originally from <span className="text-pixel-border-light">Krasnodar Region</span>,
            where I got my first programming skills.
          </Typography>
          <Typography variant="p" pixel>
            &gt; Started with <span className="text-pixel-border-light">Objective C</span> and{' '}
            <span className="text-pixel-border-light">Swift</span>, then moved to backend with{' '}
            <span className="text-pixel-border-light">PHP</span>.
          </Typography>
        </div>
      </>
    ),
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'CUSTOM TITLE',
    children: (
      <Typography variant="p" pixel>
        &gt; This is a custom about card with a custom title.
      </Typography>
    ),
  },
};
