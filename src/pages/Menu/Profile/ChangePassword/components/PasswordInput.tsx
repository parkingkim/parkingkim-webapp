import styled from 'styled-components';

interface PasswordInputProps {
  placeholder?: string;
}

const PasswordInput = ({ placeholder }: PasswordInputProps) => {
  return <StyledPasswordInput placeholder={placeholder} />;
};

const StyledPasswordInput = styled.input`
  box-sizing: border-box;
  padding: 0 15px;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 10px;
  color: ${({ theme }) => theme.gray};
  font-size: 14px;
`;

export default PasswordInput;
