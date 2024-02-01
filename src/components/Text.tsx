import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextSizeType = 'x-bold' | 'semi-bold' | 'bold' | 'md' | 'regular' | 'sm-regular';
type TextColorType = 'dark-gray' | 'black' | 'gray' | 'light-gray' | 'btn-gray';

interface TextProps extends PropsWithChildren {
  size?: TextSizeType;
  color?: TextColorType;
}

const Text = ({ size = 'regular', color = 'dark-gray', children }: TextProps) => {
  return (
    <StyledText $size={size} $color={color}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{ $size: TextSizeType; $color: TextColorType }>`
  ${({ $size }) => {
    switch ($size) {
      case 'x-bold':
        return 'font-size: 24px;  font-weight: 800; letter-spacing: -0.72px;';
      case 'semi-bold':
        return 'font-size: 22px; font-weight: 600; letter-spacing: -0.44px;';
      case 'bold':
        return 'font-size: 20px; font-weight: 700; ';
      case 'md':
        return 'font-size: 16px; font-weight: 500; letter-spacing: -0.64px;';
      case 'regular':
        return 'font-size: 14px; font-weight: 400; letter-spacing: -0.42px;';
      case 'sm-regular':
        return 'font-size: 11px; font-weight: 400; letter-spacing: -0.33px;';
      default:
        return 'font-size: 14px; font-weight: 400;';
    }
  }}
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

  font-style: normal;
  line-height: normal;
  margin: 0;
`;

export default Text;
