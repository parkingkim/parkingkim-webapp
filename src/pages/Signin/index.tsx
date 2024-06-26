import { GoogleLogo, KakaoLogo } from '@assets/index';
import Button from '@components/Button';
import { isValidEmail, isValidPassword } from '@utils/index';
import styled from 'styled-components';
import useSignin from './hooks/useSignin';
import useNavigatePage from '@hooks/useNavigatePage';
import usePostSignin from './hooks/usePostSignin';

const Signin = () => {
  const { email, password, typeEmail, typePassword } = useSignin();
  const navigatePage = useNavigatePage();
  const { mutate, isError } = usePostSignin();

  const enter = () => {
    mutate({ email, password });
  };

  return (
    <>
      <Header>
        <h1>
          주차의 상상은
          <br /> 현실이 된다
        </h1>
        <h2>
          파킹킴은 목적지와 사용자의 취향을 분석해 <br />
          가장 적합한 주차장을 추천해 드려요. 파킹킴은 주차장뿐 아니라 목적지까지의 경로도
          알려드려요.
        </h2>
      </Header>
      <Form onSubmit={enter}>
        <Input
          id="email"
          value={email}
          placeholder="이메일 입력"
          minLength={20}
          maxLength={50}
          onChange={typeEmail}
          $isError={isError}
        />
        <Input
          id="password"
          type="password"
          value={password}
          placeholder="비밀번호 입력"
          minLength={5}
          maxLength={20}
          onChange={typePassword}
          $isError={isError}
        />
        {isError && <p>이메일 또는 비밀번호를 다시 확인해주세요.</p>}
        <Button
          width={'80%'}
          disabled={!(isValidEmail(email) && isValidPassword(password))}
          onClick={enter}
        >
          다음
        </Button>
      </Form>
      <OptionContainer>
        <button onClick={navigatePage('/signup')}>회원가입</button>
        <button>비밀번호 찾기</button>
      </OptionContainer>
      <Footer>
        <Title>
          <hr />
          소셜 계정으로 로그인
          <hr />
        </Title>
        <SocialAccountsContainer>
          <KakaoLogo />
          <GoogleLogo />
        </SocialAccountsContainer>
        <NonMemberButton onClick={navigatePage('/')}>비회원으로 접속하기 {'>'}</NonMemberButton>
      </Footer>
    </>
  );
};

const NonMemberButton = styled.button`
  align-self: end;

  color: #ababab;
`;

const SocialAccountsContainer = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: center;
  gap: 15px;

  & > svg {
    cursor: pointer;
  }
`;

const Header = styled.header`
  display: flex;
  padding: 6rem 4rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  & > h1 {
    font-size: 24px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: -3%;
  }

  & > h2 {
    margin-top: 20px;

    color: #ababab;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > p {
    width: 80%;
    margin-bottom: 10px;

    color: #ff40a8;
    text-align: start;
  }
`;

const Input = styled.input<{ $isError: boolean }>`
  box-sizing: border-box;
  width: 80%;
  height: 50px;
  padding: 0 15px;

  background-color: #f5f5f5;
  border: ${({ $isError }) => ($isError ? '1px solid #FF40A8' : '0')};

  border-radius: 10px;

  color: #2e2e2e;

  font-size: 14px;

  &::placeholder {
    color: #ababab;
  }

  &:focus {
    outline: none;
  }

  &:last-of-type {
    margin-bottom: ${({ $isError }) => ($isError ? '0' : '20px')};
  }
`;

const OptionContainer = styled.div`
  display: flex;
  height: 15px;
  margin: 20px;
  align-self: center;

  & > button {
    height: 17px;
    padding: 0;
    padding: 0 10px;

    background-color: transparent;
    border: 0;
    border-radius: 0;

    color: #ababab;
    font-size: 14px;
    font-weight: 500;
    outline: 0;

    &:not(:first-child) {
      border-left: 1px solid ${({ theme }) => theme.gray};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-self: center;
`;

const Title = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  color: #848484;
  font-size: 14px;

  & > hr {
    width: 30%;
    height: 1px;

    background-color: ${({ theme }) => theme.gray};
    border: 0;
  }
`;

export default Signin;
