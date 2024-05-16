import Button from '@components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary',
  },
};

export const Tertiary: Story = {
  args: {
    color: 'tertiary',
    children: 'Tertiary',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    children: 'Large',
  },
};
export const Medium: Story = {
  args: {
    color: 'primary',
    children: 'Medium',
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    children: 'Small',
  },
};
