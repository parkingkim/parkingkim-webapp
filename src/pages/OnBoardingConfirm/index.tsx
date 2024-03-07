import Button from '@components/Button';
import styled from 'styled-components';

const OnBoardingConfirm = () => {
  return (
    <Container>
      <span>수정</span>
      <h1>
        파킹킴이 분석한 <br />
        ‘김앵두’님의 <br />
        맞춤 주차장 유형이에요!
      </h1>
      <List>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Item>fdfd</Item>
        <Filter />
      </List>
      <Button>시작하기</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 2rem;
  text-align: start;

  line-height: 28px;

  & > span {
    color: #bdc4cb;
  }

  & > h1 {
    margin: 2rem 0 2rem 0.5rem;

    font-size: 24px;
    font-weight: bold;
  }
`;

const List = styled.ul`
  height: 400px;
  overflow: scroll;

  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.li`
  width: 100%;
  height: 63px;
  margin-top: 1rem;

  background-color: #f5f5f5;
  border-radius: 10px;
`;

const Filter = styled.div`
  width: 100%;
  height: 126px;

  background: linear-gradient(to top, white, transparent);

  position: sticky;
  bottom: 0;
`;

export default OnBoardingConfirm;
