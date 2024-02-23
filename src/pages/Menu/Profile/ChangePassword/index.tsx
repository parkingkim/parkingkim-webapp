import { BackIcon } from '@assets/index';
import { HeadContainer } from '..';
import { useNavigate } from 'react-router-dom';
import Text from '@components/Text';
import { Partition } from '../..';
import PasswordInput from './components/PasswordInput';
import styled from 'styled-components';

const ChangePassword = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/profile');
  };

  return (
    <>
      <HeadContainer>
        <BackIcon onClick={goBack} />
        <Text fontStyle="bold" size="xl">
          비밀번호 변경
        </Text>
        <Text fontStyle="md" size="sm">
          파킹킴 아이디의 비밀번호를 변경해주세요.
        </Text>
      </HeadContainer>
      <Partition />
      <InputContainer>
        <CurrentPasswordWrapper>
          <Text size="sm">현재 비밀번호</Text>
          <PasswordInput placeholder="현재 비밀번호 입력" />
          <a>현재 비밀번호를 잊으셨나요?</a>
        </CurrentPasswordWrapper>
        <NewPasswordContainer>
          <Text size="sm">새 비밀번호</Text>
          <PasswordInput placeholder="영문, 숫자, 특수문자 포함 8자 이상" />
          <Text size="sm">새 비밀번호 확인</Text>
          <PasswordInput />
        </NewPasswordContainer>
        <ChangePasswordButton>완료</ChangePasswordButton>
      </InputContainer>
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  width: calc(100% - 40px);
  height: calc(100% - 300px);
  padding: 25px 20px;
  flex-direction: column;

  position: relative;
`;

const CurrentPasswordWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  & > a {
    margin-top: 6px;

    border-bottom: 1px solid ${({ theme }) => theme.darkGray};

    color: ${({ theme }) => theme.darkGray};
    font-size: 12px;
  }
`;

const NewPasswordContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  gap: 6px;

  & > :nth-child(2) {
    margin-bottom: 6px;
  }
`;

const ChangePasswordButton = styled.button`
  display: flex;
  width: calc(100% - 40px);
  padding: 15px 0;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.gray};
  border-radius: 10px;

  position: absolute;
  bottom: 0;

  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export default ChangePassword;
