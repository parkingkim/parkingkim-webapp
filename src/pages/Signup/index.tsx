import { CloseIcon } from '@assets/index';
import Modal from '@components/Modal';
import Button from '@components/Button';
import useBoolean from '@hooks/useBoolean';
import { ChangeEvent, KeyboardEvent, ReactElement, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import useNumbersRefs from './hooks/useNumbersRefs';
import MonoInputGroup from './components/MonoInputGroup';
import SixInputsGroup from './components/SixInputsGroup';
import useSignup from './hooks/useSignup';
import {
  isValidAgainPassword,
  isValidEmail,
  isValidName,
  isValidNumbers,
  isValidPassword,
} from '@utils/index';
import Agreement from './components/Agreement';
import usePostSignup from './hooks/usePostSignup';
import useNavigatePage from '@hooks/useNavigatePage';
import usePostAuthCode from './hooks/usePostAuthCode';
import useDeleteAuthCode from './hooks/useDeleteAuthCode';
import Alert from '@components/Alert';

const SLIDE_INDEX = {
  name: 0,
  email: 1,
  numbers: 2,
  password: 3,
  againPassword: 4,
} as const;

const Signup = () => {
  const navigate = useNavigatePage();
  const { inputRefs, moveFocus, prevFocus } = useNumbersRefs();

  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const isModalOpen = useBoolean(false);
  const 서비스동의 = useBoolean();
  const 본인확인동의 = useBoolean();
  const 마케팅동의 = useBoolean();
  const canTimerStart = useBoolean(false);
  const isAuthCodeWrong = useBoolean(false);

  const { name, email, numbers, password, againPassword, changeValue, changeNumbers, clear } =
    useSignup();
  const { mutate: postSignup } = usePostSignup();
  const { mutate: postAuthCode } = usePostAuthCode();
  const { mutate: deleteAuthCode } = useDeleteAuthCode(sliderRef, isAuthCodeWrong);

  const moveNumbersFocus = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.valueAsNumber) return;

    changeNumbers(index)(e.target.valueAsNumber);
    moveFocus(index);
  };

  const prevNumbersFocus = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace') return;

    changeNumbers(index)(NaN);
    prevFocus(index);
  };

  const slickEmail = () => {
    if (!sliderRef.current) return;

    setSlideIndex(SLIDE_INDEX.numbers);
    sliderRef.current.slickNext();
    isModalOpen.off();
    canTimerStart.on();
    requestAuthCode();
  };

  const requestAuthCode = () => {
    postAuthCode({ destination: email, authPlatform: 'mail', authCodeCategory: 'signUp' });
  };

  const slickNext = () => {
    if (!sliderRef.current) return;

    switch (slideIndex) {
      case SLIDE_INDEX.name:
        sliderRef.current.slickNext();
        break;
      case SLIDE_INDEX.email:
        isModalOpen.on();
        break;
      case SLIDE_INDEX.numbers:
        deleteAuthCode({
          destination: email,
          authCodePlatform: 'mail',
          authCodeCategory: 'signUp',
          authCode: numbers.join(''),
        });
        break;
      case SLIDE_INDEX.password:
        sliderRef.current.slickNext();
        break;
      case SLIDE_INDEX.againPassword:
        postSignup({ name, email, password });
    }
  };

  const canSlickNext = () => {
    switch (slideIndex) {
      case SLIDE_INDEX.name:
        return isValidName(name);
      case SLIDE_INDEX.email:
        return isValidEmail(email);
      case SLIDE_INDEX.numbers:
        return isValidNumbers(numbers);
      case SLIDE_INDEX.password:
        return isValidPassword(password);
      case SLIDE_INDEX.againPassword:
        return isValidAgainPassword(againPassword, password);
      default:
        return true;
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    touchMove: false,
    appendDots: (dots: ReactElement[]) => <DotsContainer>{dots}</DotsContainer>,
    afterChange: (index: number) => setSlideIndex(index),
  };

  return (
    <>
      <CloseContainer onClick={navigate('/signin')}>
        <CloseIcon />
      </CloseContainer>
      <Slider {...sliderSettings} ref={sliderRef}>
        <Slide key="nameSlide">
          <MonoInputGroup
            id="name"
            label={
              <Label>
                파킹킴과 함께 할 <br />
                <span>이름</span>을 알려주세요!
              </Label>
            }
            type="text"
            value={name}
            clear={clear}
            onChange={changeValue}
            placeholder="이름 입력"
          />
        </Slide>
        <Slide key="emailSlide">
          <MonoInputGroup
            id="email"
            label={
              <Label>
                아이디로 사용할
                <br />
                <span>이메일</span>을 입력해주세요!
              </Label>
            }
            type="text"
            value={email}
            clear={clear}
            onChange={changeValue}
            placeholder="이메일 입력"
          />
          {email.length > 0 && !isValidEmail(email) && <p>올바른 이메일 형식으로 작성해주세요!</p>}
        </Slide>
        <Slide key="numbersSlide">
          <SixInputsGroup
            id="numbers"
            label={
              <Label>
                본인확인을 위해 <br />
                이메일로&nbsp;
                <span>인증번호</span>를 전송했어요!
              </Label>
            }
            numbers={numbers}
            inputRefs={inputRefs}
            onChange={moveNumbersFocus}
            onKeyDown={prevNumbersFocus}
            canTimerStart={canTimerStart.value}
            onClickResendButton={requestAuthCode}
          />
        </Slide>
        <Slide key="passwordSlide">
          <MonoInputGroup
            id="password"
            label={
              <Label>
                보안을 위해 사용할
                <br />
                <span>비밀번호</span>를 입력해주세요!
              </Label>
            }
            type="password"
            value={password}
            clear={clear}
            onChange={changeValue}
            placeholder="비밀번호 입력"
          />
          {password.length === 0 ? (
            <Description>영어, 숫자 포함 8자 이상</Description>
          ) : (
            !isValidPassword(password) && <p>영어, 숫자 포함 8자 이상으로 입력해주세요!</p>
          )}
        </Slide>
        <Slide key="againPasswordSlide">
          <MonoInputGroup
            id="againPassword"
            label={
              <Label>
                확인을 위해
                <br />
                <span>재입력</span>해주세요!
              </Label>
            }
            type="password"
            value={againPassword}
            clear={clear}
            onChange={changeValue}
            placeholder="비밀번호 재입력"
          />
          {againPassword.length !== 0 && !isValidAgainPassword(againPassword, password) && (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}
        </Slide>
      </Slider>
      <Button width="90%" onClick={slickNext} disabled={!canSlickNext()}>
        다음
      </Button>
      <Modal isOpen={isModalOpen.value} onClick={isModalOpen.off} height="360px">
        <Agreement
          서비스동의={서비스동의}
          본인확인동의={본인확인동의}
          마케팅동의={마케팅동의}
          next={slickEmail}
        />
      </Modal>
      <Alert
        isShown={isAuthCodeWrong.value}
        title="인증 실패"
        content={`인증번호가 올바르지 않아요. \n다시 시도해주세요.`}
        topOption="다시 보내기"
        bottomOption="취소"
        onClickTopOption={requestAuthCode}
        onClickBottomOption={isAuthCodeWrong.off}
      />
    </>
  );
};

const Label = styled.label`
  align-self: start;

  font-size: 24px;
  font-weight: bold;
  letter-spacing: -3%;
  white-space: pre-line;
  text-align: start;

  & > span {
    color: #0dc5ff;
  }
`;

const Slide = styled.div`
  max-width: 95%;

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
  pointer-events: none;

  top: 3rem;

  & > li {
    margin-left: -5px;
  }

  & li > button::before {
    font-size: 8px !important;
  }
`;

export default Signup;
