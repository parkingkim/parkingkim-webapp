import { CloseIcon } from '@assets/index';
import Button from '@components/Button';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

const Signup = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);

  const [name, setName] = useState('');

  const goLogin = () => {
    navigate('/login');
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const removeAll = () => {
    setName('');
  };

  return (
    <>
      <CloseContainer onClick={goLogin}>
        <CloseIcon />
      </CloseContainer>
      <Slider {...sliderSettings} ref={sliderRef}>
        <Group>
          <Label>
            파킹킴과 함께 할 <br />
            이름을 알려주세요!
          </Label>
          <MonoInput type="text" value={name} onChange={changeName} placeholder="이름 입력" />
          {name.length > 0 && (
            <InputCloseContainer onClick={removeAll}>
              <CloseIcon />
            </InputCloseContainer>
          )}
        </Group>
        <Group>
          <Label>
            파킹킴과 함께 할<br />
            이름을 알려주세요!
          </Label>
          <MonoInput />
        </Group>
      </Slider>
      <Button color="secondary">다음</Button>
    </>
  );
};

const Group = styled.section`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  position: relative;
`;

const Label = styled.label`
  font-size: 24px;
  font-weight: bold;
  padding-left: 32px;
  align-self: start;
  text-align: start;
`;

const MonoInput = styled.input`
  border: 0;
  border-bottom: 1px solid #120924;
  width: 90%;
  height: 40px;
  font-size: 18px;
  padding-left: 10px;

  margin-top: 30px;

  &::placeholder {
    font-size: 18px;
    color: #bdc4cb;
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
    opacity: 50%;
  }
`;

const InputCloseContainer = styled.div`
  position: absolute;
  bottom: 11px;
  right: 21px;
  z-index: 1;
  cursor: pointer;

  & > svg > * {
    stroke: #120924;
    opacity: 50%;
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

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: (dots: ReactElement[]) => <DotsContainer>{dots}</DotsContainer>,
};

export default Signup;
