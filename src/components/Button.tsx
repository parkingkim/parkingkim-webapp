import styled from 'styled-components';

type ButtonColor = 'primary' | 'secondary';

interface ButtonProps {
  width?: string;
  color?: ButtonColor;
  disabled?: boolean;
}

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return '#0DC5FF';
    case 'secondary':
      return '#bdc4cb';
  }
};

const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  width: ${({ width = '90%' }) => width};
  height: 54px;
  align-self: center;

  background-color: ${({ color = 'primary' }) => getButtonColor(color)};

  border: 0;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;

  color: white;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
