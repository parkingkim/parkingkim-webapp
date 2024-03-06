import styled, { css } from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
}

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 6px 12px;
      `;
    case 'medium':
      return css`
        padding: 8px 16px;
      `;
    case 'large':
      return css`
        padding: 15px 20px;
      `;
    default:
      return '';
  }
};

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return css`
        background-color: transparent;
      `;
    case 'secondary':
      return css`
        background-color: #bdc4cb;
        color: white;
      `;
    case 'tertiary':
      return css`
        background-color: #5639ff;
        color: white;
      `;
    default:
      return '';
  }
};

const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  width: 100%;

  border: ${({ color }) => (color === 'primary' ? '1px solid #bdc4cb' : 'none')};
  border-radius: 10px;
  cursor: pointer;
  ${({ size = 'medium' }) => getButtonSize(size)};
  ${({ color = 'primary' }) => getButtonColor(color)};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
