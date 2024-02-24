import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextStyleType = 'x-bold' | 'semi-bold' | 'bold' | 'md' | 'regular' | 'sm-regular';
type TextColorType = 'dark-gray' | 'black' | 'gray' | 'light-gray' | 'btn-gray';
type TextSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

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
        return theme.btnGray;
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
      case 'xxl':
        return '22px';
      case 'xxxl':
        return '24px';
      default:
        return '16px';
    }
  }};

  font-style: normal;
  line-height: normal;
`;

export default Text;
