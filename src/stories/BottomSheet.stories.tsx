import BottomSheet from '@components/BottomSheet';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <button>I'm button</button>,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ height: '100vh' }}>
          <Story />
        </div>
      );
    },
  ],
};
