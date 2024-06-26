import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Text from './Text';
import {
  BlueHomeIcon,
  BlueMyInfoIcon,
  BlueParkingIcon,
  HomeIcon,
  MyInfoIcon,
  ParkingIcon,
} from '@assets/index';

const tabs = ['홈', '내 주차장', '내 정보'];

const tabIcons = [
  {
    default: <HomeIcon />,
    active: <BlueHomeIcon />,
  },
  {
    default: <ParkingIcon />,
    active: <BlueParkingIcon />,
  },
  {
    default: <MyInfoIcon />,
    active: <BlueMyInfoIcon />,
  },
];

const BottomTabBar = () => {
  const navigate = useNavigate();
  // TODO: 현재의 url을 읽어서 currentTabIndex의 초깃값을 set하는 로직
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const changeTab = (index: number) => () => {
    // TODO: 라우팅 변경 로직
    setCurrentTabIndex(index);

    switch (index) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/my-parking-lots');
        break;
      case 2:
        navigate('/menu');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <Tab key={tab} $isCurrent={index === currentTabIndex} onClick={changeTab(index)}>
          {index === currentTabIndex ? tabIcons[index].active : tabIcons[index].default}
          <Text color={index === currentTabIndex ? 'blue100' : 'gray100'} size="sm">
            {tab}
          </Text>
        </Tab>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.nav`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  max-width: 500px;
  padding: 0 2rem;
  justify-content: space-between;

  background: #fff;

  position: fixed;
  bottom: 0;
`;

const Tab = styled.button<{ $isCurrent: boolean }>`
  display: flex;
  width: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export default BottomTabBar;
