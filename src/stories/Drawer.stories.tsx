import Drawer from '@components/Drawer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    children: <button>I'm button</button>,
  },
};

export const LoggedOut: Story = {};
