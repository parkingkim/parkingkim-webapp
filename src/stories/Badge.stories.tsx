import Badge from '@components/ParkingLotCard/Badge';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: 4500,
    walkingTime: 15,
    parkingType: '공영',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: '#D9D9D93B',
            padding: '10px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};
