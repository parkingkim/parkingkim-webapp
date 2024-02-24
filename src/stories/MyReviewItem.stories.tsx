import MyReviewItem from '@pages/MyParkingLots/MyReviews/components/MyReviewItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/MyReviewItem',
  component: MyReviewItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyReviewItem>;

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
      <div style={{ width: '415px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
