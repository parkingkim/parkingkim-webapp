import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OnboardingStart = () => {
  const navigate = useNavigate();

  const goOnboarding = () => {
    navigate('/onboarding');
  };

  return (
    <Container>
      <h1>
        가입이 완료 되었어요! <br />
        목적지까지 파킹킴과 <br />
        함께해요 :)
      </h1>
      <Button width="100%" onClick={goOnboarding}>
        파킹킴 시작하기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 5rem 2rem;
  flex-direction: column;
  justify-content: space-between;

  line-height: 28px;
  text-align: start;

  & > span {
    color: #bdc4cb;
  }

  & > h1 {
    margin: 2rem 0 2rem 0.5rem;

    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;

export default OnboardingStart;
