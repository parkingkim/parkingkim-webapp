import { BackIcon, RightArrowIcon } from '@assets/index';
import Text from '@components/Text';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bar, Partition } from '..';
import styled from 'styled-components';

const Profile = () => {
  const location = useLocation();
  const { name, email } = location.state;
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/menu');
  };

  const goToChangePassword = () => {
    navigate('/change-password');
  };

  return (
    <>
      <HeadContainer>
        <BackIcon onClick={goBack} />
        <Text fontStyle="bold" size="xl">
          내 정보 관리
        </Text>
        <Text fontStyle="md" size="sm">
          내 정보를 관리해보세요!
        </Text>
      </HeadContainer>
      <Partition />
      <NameAndEmail>
        <Text fontStyle="md" size="sm" color="gray">
          이름
        </Text>
        <Text fontStyle="semi-bold" size="md">
          {name}
        </Text>
      </NameAndEmail>
      <Bar />
      <NameAndEmail>
        <Text fontStyle="md" size="sm" color="gray">
          이메일
        </Text>
        <Text fontStyle="semi-bold" size="md">
          {email}
        </Text>
      </NameAndEmail>
      <Bar />
      <ChangePasswordButton onClick={goToChangePassword}>
        <Text fontStyle="semi-bold" size="md">
          비밀번호 변경
        </Text>
        <RightArrowIcon />
      </ChangePasswordButton>
    </>
  );
};

export const HeadContainer = styled.div`
  display: flex;
  padding: 10px 20px 20px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const NameAndEmail = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const ChangePasswordButton = styled.button`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;
  gap: 10px;
`;

export default Profile;
