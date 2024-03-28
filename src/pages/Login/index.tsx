import { GoogleLogo, KakaoLogo } from '@assets/index';
import Button from '@components/Button';
import { REGEX } from '@constants/index';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

// TODO: 유효성 규칙대로 설정
const isValidId = (id: string) => id.length > 5 && REGEX.id.test(id);

// TODO: 유효성 규칙대로 설정
const isValidPassword = (password: string) => password.length > 7 && REGEX.password.test(password);

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const typeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const typePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const enter = () => {
    // TODO: 로그인 성공 혹은 실패로직
  };

  return (
    <>
      <Header>
        <h1>
          파킹킴과 함께 새로운
          <br /> 주차 생활을 시작해요!
        </h1>
        <h2>
          • 파킹킴은 목적지와 사용자의 취향을 분석해 가장 적합한 주차장을 추천해 드려요. <br />•
          파킹킴은 주차장뿐 아니라 목적지까지의 경로도 알려드려요.
        </h2>
      </Header>
      <Form onSubmit={enter}>
        <Input
          id="id"
          value={id}
          placeholder="이메일 입력"
          minLength={5}
          maxLength={20}
          onChange={typeId}
        />
        <Input
          id="password"
          type="password"
          value={password}
          placeholder="비밀번호 입력"
          minLength={5}
          maxLength={20}
          onChange={typePassword}
        />
        <Button width={'80%'} disabled={!(isValidId(id) && isValidPassword(password))}>
          다음
        </Button>
      </Form>
      <OptionContainer>
        <button>회원가입</button>
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
        <NonMemberButton>비회원으로 접속하기 {'>'}</NonMemberButton>
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
  justify-content: center;
  gap: 15px;
  padding: 20px 0;

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
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  height: 50px;
  padding: 0 15px;

  border-radius: 10px;
  background-color: #f5f5f5;
  border: 0;

  font-size: 14px;
  color: #ababab;

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }

  &:focus {
    border-color: black;

    outline: none;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const OptionContainer = styled.div`
  display: grid;
  width: 40%;
  height: 15px;
  margin: 20px;
  align-self: center;
  grid-template-columns: repeat(2, 1fr);

  & > button {
    height: 17px;
    padding: 0;

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
  padding: 2rem 0;
  flex-direction: column;
  align-self: center;
`;

const Title = styled.div`
  display: flex;
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

export default Login;
