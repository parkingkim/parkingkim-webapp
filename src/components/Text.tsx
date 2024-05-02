import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextStyleType = 'x-bold' | 'semi-bold' | 'bold' | 'md' | 'regular' | 'sm-regular';
type TextColorType =
  | 'dark-gray'
  | 'black'
  | 'gray'
  | 'light-gray'
  | 'btn-gray'
  | 'white'
  | 'red'
  | 'error'
  | 'gray5'
  | 'gray10'
  | 'gray20'
  | 'gray40'
  | 'gray60'
  | 'gray80'
  | 'gray100'
  | 'blue100';
type TextSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface TextProps extends PropsWithChildren, HTMLAttributes<HTMLParagraphElement> {
  fontStyle?: TextStyleType;
  color?: TextColorType;
  size?: TextSizeType;
}

const Text = ({
  fontStyle = 'md',
  size = 'md',
  color = 'dark-gray',
  children,
  ...props
}: TextProps) => {
  return (
    <StyledText $fontStyle={fontStyle} $size={size} $color={color} {...props}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{
  $fontStyle: TextStyleType;
  $color: TextColorType;
  $size: TextSizeType;
}>`
  margin: 0;
  display: flex;
  color: ${({ $color, theme }) => {
    switch ($color) {
      case 'dark-gray':
        return theme.darkGray;
      case 'black':
        return theme.black;
      case 'gray':
        return theme.gray;
      case 'light-gray':
        return theme.lightGray;
      case 'btn-gray':
        return theme.gray80;
      case 'white':
        return 'white';
      case 'red':
        return theme.red;
      case 'error':
        return theme.error;
      case 'gray5':
        return theme.gray5;
      case 'gray10':
        return theme.gray10;
      case 'gray20':
        return theme.gray20;
      case 'gray40':
        return theme.gray40;
      case 'gray60':
        return theme.gray60;
      case 'gray80':
        return theme.gray80;
      case 'gray100':
        return theme.gray100;
      case 'blue100':
        return theme.blue100;
      default:
        return theme.darkGray;
    }
  }};

  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs':
        return '11px';
      case 'sm':
        return '14px';
      case 'md':
        return '16px';
      case 'lg':
        return '18px';
      case 'xl':
        return '20px';
      case '2xl':
        return '22px';
      case '3xl':
        return '24px';
      default:
        return '16px';
    }
  }};

  font-weight: ${({ $fontStyle }) => {
    switch ($fontStyle) {
      case 'x-bold':
        return '800';
      case 'bold':
        return '700';
      case 'semi-bold':
        return '600';
      case 'md':
        return '500';
      default:
        return '400';
    }
  }};

  font-style: normal;
  line-height: normal;

  letter-spacing: ${({ $fontStyle }) => {
    switch ($fontStyle) {
      case 'x-bold':
        return '-0.72px;';
      case 'semi-bold':
        return '-0.44px';
      case 'md':
        return '-0.64px';
      case 'regular':
        return '-0.42px';
      case 'sm-regular':
        return '-0.33px';
    }
  }};
`;

export default Text;
