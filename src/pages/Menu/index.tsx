import { RightArrowIcon } from '@assets/index';
import Text from '@components/Text';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/** 추후 통신 코드 도입시 목데이터 제거합니다 */
const userInfo = {
  name: '김민수',
  email: 'abc@gmail.com',
};

const Menu = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile', {
      state: {
        name: userInfo.name,
        email: userInfo.email,
      },
    });
  };

  const goToCoupons = () => {
    navigate('/coupons');
  };

  const goToNotifications = () => {
    navigate('/notifications');
  };

  const goToFrequentDestinations = () => {
    navigate('/frequent-destinations');
  };

  return (
    <>
      <UserInfoContainer>
        <Text fontStyle="bold" size="xl">
          내 정보
        </Text>
        <UserInfoButton onClick={goToProfile}>
          <NameAndEmail>
            <Text fontStyle="bold" size="md">
              {userInfo.name}
            </Text>
            <Text fontStyle="regular" size="xs" color="btn-gray">
              {userInfo.email}
            </Text>
          </NameAndEmail>
          <RightArrowIcon />
        </UserInfoButton>
      </UserInfoContainer>
      <Partition />
      <MenuButton onClick={goToNotifications}>
        <Text fontStyle="md" size="md">
          공지/이벤트
        </Text>
      </MenuButton>
      <Bar />
      <MenuButton onClick={goToCoupons}>
        <Text fontStyle="md" size="md">
          쿠폰함
        </Text>
      </MenuButton>
      <Bar />
      <MenuButton onClick={goToFrequentDestinations}>
        <Text fontStyle="md" size="md">
          집/회사 관리
        </Text>
      </MenuButton>
      <Bar />
      <SubMenuButton>
        <Text size="sm" color="gray">
          고객센터
        </Text>
      </SubMenuButton>
      <SubMenuButton>
        <Text size="sm" color="gray">
          로그아웃
        </Text>
      </SubMenuButton>
    </>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  padding: 30px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
`;

const UserInfoButton = styled.button`
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;

  background: none;
  border: none;

  outline: none;
  cursor: pointer;
`;

const NameAndEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

export const Partition = styled.div`
  width: 100%;
  height: 7px;
  min-width: 100%;

  background: #f6f6f6;
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  min-width: 100%;

  background: #f6f6f6;
`;

const MenuButton = styled.button`
  display: flex;
  padding: 30px 20px;

  background: none;
`;

const SubMenuButton = styled.button`
  display: flex;
  padding: 20px 0 0 20px;

  background: none;
`;

export default Menu;
