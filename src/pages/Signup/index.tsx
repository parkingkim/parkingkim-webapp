import { CheckIcon, CloseIcon } from '@assets/index';
import Modal from '@components/Modal';
import Button from '@components/Button';
import useBoolean from '@hooks/useBoolean';
import { ReactElement, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import useNumbersRefs from './hooks/useNumbersRefs';
import MonoInputGroup from './components/MonoInputGroup';
import SixInputsGroup from './components/SixInputsGroup';
import useSignup from './hooks/useSignup';
import { REGEX } from '@constants/index';

const SLIDE_INDEX = {
  name: 0,
  email: 1,
  numbers: 2,
  password: 3,
  againPassword: 4,
} as const;

const Signup = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const { inputRefs, moveFocus } = useNumbersRefs();
  const sliderRef = useRef<Slider>(null);
  const isModalOpen = useBoolean(false);
  const 서비스동의 = useBoolean();
  const 본인확인동의 = useBoolean();
  const 마케팅동의 = useBoolean();
  const { name, email, numbers, password, againPassword, changeValue, changeNumbers, clear } =
    useSignup();

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

  const moveNumbersFocus = (index: number) => () => {
    changeNumbers(index);
    moveFocus(index);
  };

  const goLogin = () => {
    navigate('/login');
  };

  const openAgreement = () => {
    if (REGEX.email.test(email)) {
      isModalOpen.on();
    }
  };

  const slickNext = () => {
    if (!sliderRef.current) return;

    switch (slideIndex) {
      case SLIDE_INDEX.name:
        sliderRef.current.slickNext();
        break;
      case SLIDE_INDEX.email:
        openAgreement();
        break;
      case SLIDE_INDEX.numbers:
        // TODO: 인증번호 유효성 검사
        sliderRef.current.slickNext();
        break;
      case SLIDE_INDEX.password:
        // TODO: 비번 유효성 검사
        sliderRef.current.slickNext();
        break;
      case SLIDE_INDEX.againPassword:
        // TODO: 재입력 비번 검사
        navigate('/onboarding/start');
    }
  };

  const agreeAll = () => {
    if (서비스동의.value && 본인확인동의.value && 마케팅동의.value) {
      서비스동의.off();
      본인확인동의.off();
      마케팅동의.off();
      return;
    }
    서비스동의.on();
    본인확인동의.on();
    마케팅동의.on();
  };

  const slickEmail = () => {
    if (!sliderRef.current) return;
    sliderRef.current.slickGoTo(SLIDE_INDEX.numbers);
    isModalOpen.off();
  };

  return (
    <>
      <CloseContainer onClick={goLogin}>
        <CloseIcon />
      </CloseContainer>
      <Slider {...sliderSettings} ref={sliderRef}>
        <Slide>
          <MonoInputGroup
            id="name"
            label={'파킹킴과 함께 할 \n이름을 알려주세요!'}
            type="text"
            value={name}
            clear={clear}
            onChange={changeValue}
            placeholder="이름 입력"
          />
        </Slide>
        <Slide>
          <MonoInputGroup
            id="email"
            label={'회원가입을 위한\n 이메일을 입력해주세요!'}
            type="text"
            value={email}
            clear={clear}
            onChange={changeValue}
            placeholder="이메일 입력"
          />
          {!REGEX.email.test(email) && email.length > 0 && (
            <p>올바른 이메일 형식으로 작성해주세요!</p>
          )}
        </Slide>
        <Slide>
          <SixInputsGroup
            id="numbers"
            label={'본인확인을 위해\n이메일로 인증번호를 전송했어요!'}
            numbers={numbers}
            inputRefs={inputRefs}
            onChange={moveNumbersFocus}
          />
        </Slide>
        <Slide>
          <MonoInputGroup
            id="password"
            label={'보안을 위해 비밀번호를 입력해주세요!'}
            type="password"
            value={password}
            clear={clear}
            onChange={changeValue}
            placeholder="비밀번호 입력"
          />
          {password.length === 0 ? (
            <Description>영어 대,소문자 포함 10자 이상</Description>
          ) : (
            !REGEX.password.test(password) && <p>영어 대,소문자 포함 10자 이상으로 입력해주세요!</p>
          )}
        </Slide>
        <Slide>
          <MonoInputGroup
            id="againPassword"
            label={'확인을 위해\n 재입력해주세요!'}
            type="password"
            value={againPassword}
            clear={clear}
            onChange={changeValue}
            placeholder="비밀번호 재입력"
          />
          {againPassword.length !== 0 && password !== againPassword && (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}
        </Slide>
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

const Slide = styled.div`
  & > p {
    margin-top: 10px;
    margin-left: 30px;
    text-align: start;

    color: #ff6060;
  }
`;

const Description = styled.p`
  color: #d9d9d9 !important;
`;

const Agreement = styled.section`
  display: flex;
  height: 100%;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;

  & > h1 {
    margin-bottom: 20px;

    font-size: 20px;
  }
`;

const AgreeButton = styled.button<{ isAgreed: boolean }>`
  display: flex;
  width: 100%;
  padding: 0;
  margin-bottom: 18px;
  justify-content: flex-start;
  align-items: center;

  color: ${({ isAgreed }) => (isAgreed ? 'black' : '#bdc4cb')};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1px;
  gap: 10px;

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
