import styled from 'styled-components';

type ButtonColor = 'primary' | 'secondary' | 'teritiary';

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
    case 'teritiary':
      return '#5639ff';
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
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;
