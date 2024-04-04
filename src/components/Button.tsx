import theme from '@/theme';
import styled from 'styled-components';

type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'gray80' | 'gray20';

interface ButtonProps {
  width?: string;
  color?: ButtonColor;
  disabled?: boolean;
}

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return theme.blue100;
    case 'secondary':
      return '#bdc4cb';
    case 'tertiary':
      return '#5639ff';
    case 'gray80':
      return theme.gray80;
    case 'gray20':
      return theme.gray20;
  }
};

const Button = styled.button<ButtonProps>`
  display: flex;
  box-sizing: border-box;
  width: ${({ width = '90%' }) => width};
  height: 54px;
  justify-content: center;
  align-items: center;
  align-self: center;

  background-color: ${({ color = 'primary' }) => getButtonColor(color)};

  border: 0;
  border-radius: 10px;
<<<<<<< HEAD

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
=======
  box-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
>>>>>>> 7f6106b (style: stylelint 구동)

  color: white;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;

    background-color: #848484;
    cursor: not-allowed;
  }
`;

export default Button;
