import Coupon from '@pages/Menu/Coupons/components/Coupon';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Coupon',
  component: Coupon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Coupon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    discountRate: 10,
    discountName: '설날 연휴 공용주차장',
    expirationDate: '2022-02-28',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '100px',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};
