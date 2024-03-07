import { CheckIcon } from '@assets/index';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OnBoardingConfirm = () => {
  const navigate = useNavigate();

  const goEdit = () => {
    navigate('/onboarding');
  };

  return (
    <Container>
      <EditButton onClick={goEdit}>수정</EditButton>
      <h1>
        파킹킴이 분석한 <br />
        ‘김앵두’님의 <br />
        맞춤 주차장 유형이에요!
      </h1>
      <List>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          가까운게 제일 중요
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          공영주차장을 선호
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          전기차 사용자
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          가까운게 제일 중요
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          공영주차장을 선호
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          전기차 사용자
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          가까운게 제일 중요
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          공영주차장을 선호
        </Item>
        <Item>
          <CheckIcon width={'16px'} height={'16px'} />
          전기차 사용자
        </Item>
        <Filter />
      </List>
      <Button width="100%">시작하기</Button>
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

const EditButton = styled.button`
  color: #bdc4cb;
  font-size: 12px;
`;

const List = styled.ul`
  max-height: 400px;
  overflow: scroll;

  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (width <= 415px) {
    max-height: 300px;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 63px;
  margin-top: 1rem;
  font-size: 20px;
  color: #bdc4cb;
  font-weight: bold;
  padding-left: 20px;
  gap: 10px;
  box-sizing: border-box;

  background-color: #f5f5f5;
  border-radius: 10px;

  & > svg > * {
    stroke: #bdc4cb;
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 126px;

  background: linear-gradient(to top, white, transparent);

  position: sticky;
  bottom: 0;
`;

export default OnBoardingConfirm;
