import { RightArrowIcon } from '@assets/index';
import Text from '@components/Text';
import styled from 'styled-components';

const userInfo = {
  name: '김민수',
  email: 'abc@gmail.com',
};

const Menu = () => {
  /** 추후 통신 코드 도입시 목데이터 제거합니다 */
  return (
    <>
      <UserInfoContainer>
        <Text fontStyle="bold" size="xxl">
          내 정보
        </Text>
        <UserInfoButton>
          <NameAndEmail>
            <Text fontStyle="bold" size="lg">
              {userInfo.name}
            </Text>
            <Text fontStyle="regular" size="lg" color="btn-gray">
              {userInfo.email}
            </Text>
          </NameAndEmail>
          <RightArrowIcon />
        </UserInfoButton>
      </UserInfoContainer>
      <Partition />
      <MenuButton>
        <Text fontStyle="md" size="lg">
          공지/이벤트
        </Text>
      </MenuButton>
      <Bar />
      <MenuButton>
        <Text fontStyle="md" size="lg">
          쿠폰함
        </Text>
      </MenuButton>
      <Bar />
      <MenuButton>
        <Text fontStyle="md" size="lg">
          집/회사 관리
        </Text>
      </MenuButton>
      <Bar />
      <SubMenuButton>
        <Text size="md" color="gray">
          고객센터
        </Text>
      </SubMenuButton>
      <SubMenuButton>
        <Text size="md" color="gray">
          로그아웃
        </Text>
      </SubMenuButton>
    </>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 25px;
`;

const UserInfoButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

const NameAndEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

const Partition = styled.div`
  width: 100%;
  min-width: 100%;
  height: 7px;
  background: #f6f6f6;
`;

const Bar = styled.div`
  width: 100%;
  min-width: 100%;
  height: 2px;
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
