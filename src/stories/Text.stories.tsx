import Text from '@components/Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Text',
  },
  argTypes: {
    fontStyle: { control: 'radio' },
    size: { control: 'radio' },
    color: { control: 'radio' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ExtraBold: Story = {
  args: {
    fontStyle: 'x-bold',
    size: 'xxxl',
    children: 'Pretendard,ExtraBold,24pt,-3%',
  },
};
export const SemiBold: Story = {
  args: {
    fontStyle: 'semi-bold',
    children: 'Pretendard,SemiBold,22pt,-2%',
  },
};
export const Bold: Story = {
  args: {
    fontStyle: 'bold',
    size: 'xl',
    children: 'Pretendard, Bold,20pt',
  },
};
export const Medium: Story = {
  args: {
    fontStyle: 'md',
    size: 'lg',
    children: 'Pretendard,Medium,16',
  },
};
export const Regular: Story = {
  args: {
    fontStyle: 'regular',
    size: 'md',
    children: 'Pretendard,Regular,14pt,-3%',
  },
};
export const SmallRegular: Story = {
  args: {
    fontStyle: 'sm-regular',
    size: 'sm',
    children: 'Pretendard, Regular, 11pt, -3%',
  },
};
