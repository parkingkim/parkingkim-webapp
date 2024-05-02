import { BackIcon } from '@assets/index';
import { HeadContainer } from '..';
import { useNavigate } from 'react-router-dom';
import Text from '@components/Text';
import PasswordInput from './components/PasswordInput';
import styled from 'styled-components';
import usePassword from './hook/usePassword';

const ChangePassword = () => {
  const navigate = useNavigate();
  const {
    curPassword,
    newPassword,
    againPassword,
    handlePasswordChange,
    isCurPasswordValid,
    isNewPasswordValid,
    isAgainPasswordValid,
  } = usePassword();

  const goBack = () => {
    navigate('/profile');
  };

  const isButtonDisabled = () =>
    !isCurPasswordValid ||
    !isNewPasswordValid ||
    !isAgainPasswordValid ||
    curPassword === newPassword ||
    newPassword !== againPassword;

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
      <ThickBar />
      <InputContainer>
        <CurrentPasswordWrapper>
          <Text size="sm" color="gray80">
            현재 비밀번호
          </Text>
          <PasswordInput
            placeholder="현재 비밀번호 입력"
            onChange={(e) => handlePasswordChange('curPassword')(e)}
          />
          <Text size="xs" color="error">
            현재 비밀번호를 잊으셨나요?
          </Text>
        </CurrentPasswordWrapper>
        <NewPasswordContainer>
          <Text size="sm" color="gray80">
            새 비밀번호
          </Text>
          <PasswordInput
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            onChange={(e) => handlePasswordChange('newPassword')(e)}
          />
          <Text size="sm" color="gray80">
            새 비밀번호 확인
          </Text>
          <PasswordInput
            placeholder="새 비밀번호를 재입력해주세요"
            onChange={(e) => handlePasswordChange('againPassword')(e)}
          />
        </NewPasswordContainer>
        <ChangePasswordButton disabled={isButtonDisabled()}>
          <Text size="xl" color="white" fontStyle="bold">
            저장하기
          </Text>
        </ChangePasswordButton>
      </InputContainer>
    </>
  );
};

const ThickBar = styled.div`
  width: 100%;
  height: 7px;
  min-width: 100%;

  background: linear-gradient(to bottom, #dcdcdc 0%, #f6f6f6 30%);
`;

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

  background-color: ${({ theme }) => theme.blue100};
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);

  position: absolute;
  bottom: 20px;

  color: white;
  font-size: 20px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.gray60};
    cursor: not-allowed;
  }
`;

export default ChangePassword;
