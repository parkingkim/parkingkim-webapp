import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TextSizeType = 'x-bold' | 'semi-bold' | 'bold' | 'md' | 'regular' | 'sm-regular';

interface TextProps extends PropsWithChildren {
  size?: TextSizeType;
}

const Text = ({ size = 'regular', children }: TextProps) => {
  return <StyledText $size={size}>{children}</StyledText>;
};

const StyledText = styled.p<{ $size: TextSizeType }>`
  color: #000;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
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
`;

export default Text;
