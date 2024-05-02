import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const PasswordInput = ({ placeholder, ...props }: PasswordInputProps) => {
  return <StyledPasswordInput type="password" placeholder={placeholder} {...props} />;
};

const StyledPasswordInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 0 15px;

  background-color: ${({ theme }) => theme.gray5};

  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.gray40};
  font-size: 14px;
`;

export default PasswordInput;
