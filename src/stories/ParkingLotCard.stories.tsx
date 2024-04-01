import ParkingLotCard from '@components/ParkingLotCard';

import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/ParkingLotCard',
  component: ParkingLotCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ParkingLotCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '부산대학교 주차장',
    price: 4500,
    ETA: 15,
    parkingType: '공영',
    isFavorite: false,
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};
