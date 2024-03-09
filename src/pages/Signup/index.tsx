import { CheckIcon, CloseIcon } from '@assets/index';
import Modal from '@components/Modal';
import Button from '@components/Button';
import useBoolean from '@hooks/useBoolean';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import useNumbersRefs from './hooks/useNumbersRefs';
import MonoInputGroup from './components/MonoInputGroup';
import SixInputsGroup from './components/SixInputsGroup';

const Signup = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  const { inputRefs, moveFocus } = useNumbersRefs();

  const sliderRef = useRef<Slider>(null);
  const isModalOpen = useBoolean(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [password, setPassword] = useState('');
  const [againPassword, setAgainPassword] = useState('');

  const 서비스동의 = useBoolean();
  const 본인확인동의 = useBoolean();
  const 마케팅동의 = useBoolean();

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: ReactElement[]) => <DotsContainer>{dots}</DotsContainer>,
    afterChange: (index: number) => setSlideIndex(index),
  };

  const goLogin = () => {
    navigate('/login');
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changeNumbers = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    numbers[index] = e.target.valueAsNumber;
    setNumbers([...numbers]);
    moveFocus(index);
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const changeAgainPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setAgainPassword(e.target.value);
  };

  // const removeAll = () => {
  //   setName('');
  // };

  const slickNext = () => {
    if (!sliderRef.current) return;

    switch (slideIndex) {
      case 0:
        sliderRef.current.slickNext();
        break;
      case 1:
        // TODO: 이메일 유효성 검사
        isModalOpen.on();
        break;
      case 2:
        // TODO: 인증번호 유효성 검사
        sliderRef.current.slickNext();
        break;
      case 3:
        // TODO: 비번 유효성 검사
        sliderRef.current.slickNext();
        break;
      case 4:
        // TODO: 재입력 비번 검사
        navigate('/onboarding/start');
    }
  };

  const agreeAll = () => {
    if (서비스동의.value && 본인확인동의.value && 마케팅동의.value) {
      서비스동의.off();
      본인확인동의.off();
      마케팅동의.off();
    } else {
      서비스동의.on();
      본인확인동의.on();
      마케팅동의.on();
    }
  };

  const slickEmail = () => {
    if (!sliderRef.current) return;
    sliderRef.current.slickGoTo(2);
    isModalOpen.off();
  };

  return (
    <>
      <CloseContainer onClick={goLogin}>
        <CloseIcon />
      </CloseContainer>
      <Slider {...sliderSettings} ref={sliderRef}>
        <MonoInputGroup
          id="name"
          label={'파킹킴과 함께 할 \n이름을 알려주세요!'}
          type="text"
          value={name}
          onChange={changeName}
          placeholder="이름 입력"
        />
        <MonoInputGroup
          id="email"
          label={'회원가입을 위한\n 이메일을 입력해주세요!'}
          type="text"
          value={email}
          onChange={changeEmail}
          placeholder="이메일 입력"
        />
        <SixInputsGroup
          id="numbers"
          label={'본인확인을 위해\n이메일로 인증번호를 전송했어요!'}
          numbers={numbers}
          inputRefs={inputRefs}
          onChange={changeNumbers}
        />
        <MonoInputGroup
          id="password"
          label={'보안을 위해 비밀번호를 입력해주세요!'}
          type="password"
          value={password}
          onChange={changePassword}
          placeholder="비밀번호 입력"
        />
        <MonoInputGroup
          id="againPassword"
          label={'확인을 위해\n 재입력해주세요!'}
          type="password"
          value={againPassword}
          onChange={changeAgainPassword}
          placeholder="비밀번호 재입력"
        />
      </Slider>
      <Button color="secondary" onClick={slickNext}>
        다음
      </Button>
      <Modal isOpen={isModalOpen.value} onClick={isModalOpen.off} height="360px">
        <Agreement>
          <h1>
            파킹킴을 사용하기 위해 <br />
            약관에 동의해주세요!
          </h1>
          <AgreeButton
            isAgreed={서비스동의.value && 본인확인동의.value && 마케팅동의.value}
            onClick={agreeAll}
          >
            <CheckIcon />
            모두 동의합니다
          </AgreeButton>
          <AgreeButton isAgreed={서비스동의.value} onClick={서비스동의.toggle}>
            <CheckIcon />
            서비스 관련 이용 약관 (필수)
          </AgreeButton>
          <AgreeButton isAgreed={본인확인동의.value} onClick={본인확인동의.toggle}>
            <CheckIcon />
            본인확인 서비스 관련 이용 약관 (필수)
          </AgreeButton>
          <AgreeButton isAgreed={마케팅동의.value} onClick={마케팅동의.toggle}>
            <CheckIcon />
            마케팅 정보 알림 및 수신 동의 (선택)
          </AgreeButton>
          <Button color="secondary" onClick={slickEmail}>
            다음
          </Button>
        </Agreement>
      </Modal>
    </>
  );
};

const Agreement = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  height: 100%;
  & > h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const AgreeButton = styled.button<{ isAgreed: boolean }>`
  font-size: 18px;
  color: ${({ isAgreed }) => (isAgreed ? 'black' : '#bdc4cb')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  padding: 0;
  margin-bottom: 18px;
  letter-spacing: -1px;
  font-weight: 600;

  & > svg > * {
    stroke: ${({ isAgreed }) => (isAgreed ? 'black' : '#bdc4cb')};
    opacity: 0.5;
  }
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 3rem;
  z-index: 1;
  cursor: pointer;

  & > svg > * {
    stroke: #120924;
    opacity: 0.5;
  }
`;

const DotsContainer = styled.div`
  height: 10px;

  top: 3rem;

  & > li {
    margin-left: -5px;
  }

  & li > button::before {
    font-size: 8px !important;
  }
`;

export default Signup;
