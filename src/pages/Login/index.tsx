import MobileView from '@components/MobileView';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const typeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const typePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  console.log(id, password);

  return (
    <MobileView>
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
      <Form>
        <Input
          id="id"
          value={id}
          placeholder="아이디 입력"
          minLength={5}
          maxLength={20}
          onChange={typeId}
        />
        <Input
          id="password"
          value={password}
          placeholder="비밀번호 입력"
          minLength={5}
          maxLength={20}
          onChange={typePassword}
        />
        <Button>로그인</Button>
      </Form>
      <OptionContainer>
        <button>회원가입</button>
        <button>아이디 찾기</button>
        <button>비밀번호 찾기</button>
      </OptionContainer>
      <Footer>
        <Title>
          <hr />
          소셜 계정으로 로그인
          <hr />
        </Title>
      </Footer>
    </MobileView>
  );
};

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
  }

  & > h2 {
    color: ${({ theme }) => theme.lightGray};
    font-size: 14px;
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

  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;

  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.lightGray};
  }

  &:focus {
    border-color: black;

    outline: none;
  }
`;

const Button = styled.button`
  width: 80%;
  height: 54px;
  margin-top: 5px;

  background-color: ${({ theme }) => theme.lightGray};
  border: none;
  border-radius: 10px;

  color: white;
  font-size: 16px;

  &:hover {
    background-color: black;
  }
`;

const OptionContainer = styled.div`
  display: grid;
  width: 70%;
  height: 15px;
  margin: 20px;
  align-self: center;
  grid-template-columns: repeat(3, 1fr);

  & > button {
    height: 17px;
    padding: 0;

    background-color: transparent;
    border: 0;
    border-radius: 0;

    color: ${({ theme }) => theme.lightGray};
    font-size: 14px;
    outline: 0;

    &:not(:first-child) {
      border-left: 1px solid ${({ theme }) => theme.lightGray};
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

const Title = styled.h1`
  display: flex;

  color: ${({ theme }) => theme.lightGray};
  font-size: 16px;

  & > hr {
    width: 100px;
    height: 1px;

    background-color: ${({ theme }) => theme.lightGray};
    border: 0;
  }
`;

export default Login;
