import SearchBar from '@components/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Focused: Story = {
  args: {
    isFocused: true,
  },
};
