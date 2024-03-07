import ParkingLotItem from '@pages/MyParkingLots/components/ParkingLotItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/FavoriteParkingLotItem',
  component: ParkingLotItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParkingLotItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    parkingLot: {
      parkingId: '1',
      parkingName: '영호주차장',
      estimatedFee: '3000',
      estimatedWalkingTime: '',
      parkingType: '노외',
      isFavorite: true,
      latitude: '34.333213',
      longitude: '54.434312',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', height: '100px' }}>
        <Story />
      </div>
    ),
  ],
};
