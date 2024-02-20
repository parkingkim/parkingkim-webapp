import { useState } from 'react';
import styled from 'styled-components';

const tabs = ['홈', '?', '?'];

const BottomTabBar = () => {
  // TODO: 현재의 url을 읽어서 currentTabIndex의 초깃값을 set하는 로직
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const changeTab = (index: number) => () => {
    // TODO: 라우팅 변경 로직
    setCurrentTabIndex(index);
  };

  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <Tab $isCurrent={index === currentTabIndex} onClick={changeTab(index)}>
          {tab}
        </Tab>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.nav`
  display: flex;
  box-sizing: border-box;
  width: 500px;
  height: 80px;
  padding: 0 2rem;
  justify-content: space-between;

  background: #fff;

  position: fixed;
  bottom: 0;
`;

const Tab = styled.button<{ $isCurrent: boolean }>`
  width: 3rem;
  background-color: ${({ $isCurrent }) => ($isCurrent ? 'gray' : 'transparent')};
`;

export default BottomTabBar;
