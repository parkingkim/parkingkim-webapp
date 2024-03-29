import { BackIcon } from '@assets/index';
import { useNavigate } from 'react-router-dom';
import { HeadContainer } from '../Profile';
import styled from 'styled-components';
import { useState } from 'react';
import Text from '@components/Text';
import { Bar } from '..';

const tabs = ['공지사항', '이벤트'];

const notices = [
  { title: '공지사항1', content: '공지사항 내용1', date: '2023.12.31' },
  { title: '공지사항2', content: '공지사항 내용2', date: '2024.1.31' },
  { title: '공지사항3', content: '공지사항 내용3', date: '2024.2.4' },
  { title: '공지사항1', content: '공지사항 내용1', date: '2023.12.31' },
  { title: '공지사항2', content: '공지사항 내용2', date: '2024.1.31' },
  { title: '공지사항3', content: '공지사항 내용3', date: '2024.2.4' },
  { title: '공지사항1', content: '공지사항 내용1', date: '2023.12.31' },
  { title: '공지사항2', content: '공지사항 내용2', date: '2024.1.31' },
  { title: '공지사항3', content: '공지사항 내용3', date: '2024.2.4' },
  { title: '공지사항1', content: '공지사항 내용1', date: '2023.12.31' },
  { title: '공지사항2', content: '공지사항 내용2', date: '2024.1.31' },
  { title: '공지사항3', content: '공지사항 내용3', date: '2024.2.4' },
];

const events = [
  { title: '이벤트1', content: '이벤트 내용1', date: '2023.12.31' },
  { title: '이벤트2', content: '이벤트 내용2', date: '2024.1.31' },
  { title: '이벤트3', content: '이벤트 내용3', date: '2024.2.4' },
];

const Notifications = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/menu');
  };

  const changeTab = (index: number) => () => {
    setCurrentTabIndex(index);
  };

  // TODO: 공지/이벤트 조회 api 연동

  return (
    <>
      <HeadContainer>
        <BackIcon onClick={goBack} />
      </HeadContainer>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <Tab $isCurrent={index === currentTabIndex} onClick={changeTab(index)}>
            <Text size="md" color={currentTabIndex === index ? 'dark-gray' : 'gray'}>
              {tab}
            </Text>
          </Tab>
        ))}
      </TabsContainer>
      <ContentContainer>
        {currentTabIndex === 0
          ? notices.map((notice) => (
              <>
                <Content>
                  <Text size="md" fontStyle="bold">
                    {notice.title}
                  </Text>
                  <Text size="xs" color="gray">
                    {notice.date}
                  </Text>
                </Content>
                <Bar />
              </>
            ))
          : events.map((event) => (
              <>
                <Content>
                  <Text size="md" fontStyle="bold">
                    {event.title}
                  </Text>
                  <Text size="xs" color="gray">
                    {event.date}
                  </Text>
                </Content>
                <Bar />
              </>
            ))}
      </ContentContainer>
    </>
  );
};

const TabsContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;

const Tab = styled.button<{ $isCurrent: boolean }>`
  display: flex;
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;

  background: none;
  border-radius: 0;
  border-bottom: ${({ theme, $isCurrent }) =>
    $isCurrent ? `2px solid ${theme.darkGray}` : `2px solid transparent`};

  color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.darkGray : theme.gray)};
  font-size: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 202px);
  overflow: scroll;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  width: calc(100% - 40px);
  padding: 25px 20px;
  flex-direction: column;
  align-items: flex-start;
`;

export default Notifications;
