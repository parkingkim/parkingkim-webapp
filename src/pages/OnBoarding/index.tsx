import { ArrowLeftIcon } from '@assets/index';
import { ReactElement, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import useOnBoardingContents from './hooks/useOnBoardingContents';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import OnboardingSlide from './components/OnboardingSlide';

const parkingTypes = [
  { key: 'outside', name: '노외' },
  { key: 'road', name: '노상' },
  { key: 'mechanical', name: '기계식' },
];

const parkingOptions = [
  { key: 'public', name: '공영' },
  { key: 'private', name: '민영' },
];

const parkingPrices = [
  { key: 'free', name: '무료' },
  { key: 'charged', name: '유료', moreOptions: ['현금 결제', '카드 결제'] },
];

const parkingTerms = [
  { key: 'day', name: '하루' },
  {
    key: 'hour',
    name: '1시간',
    isSelected: false,
    moreOptions: ['2시간', '3시간', '4시간', '5시간', '6시간', '7시간'],
  },
];

const electricCars = [
  { key: 'no', name: '전기차를 사용하지 않아요' },
  {
    key: 'yes',
    name: '전기차를 사용해요',
    moreOptions: ['AC 단상', 'DC 차데모', 'DC 콤보', 'AC3 상'],
  },
];

const priorities = [
  { key: 'distance', name: '목적지에서 가까운 순' },
  {
    key: 'price',
    name: '가격이 저렴한 순',
  },
  {
    key: 'recommend',
    name: '파킹킴 추천순',
  },
];

const OnBoarding = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const {
    parkingTypeBooleans,
    parkingOptionBooleans,
    parkingPriceBooleans,
    parkingTermBooleans,
    parkingElectricCarBooleans,
    parkingPriorityBooleans,
    selectParkingOption,
    selectParkingType,
    selectParkingPrice,
    selectParkingTerm,
    selectElectricCar,
    selectPriority,
  } = useOnBoardingContents();

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

  const slickPrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.slickPrev();
  };

  const slickNext = () => {
    if (!sliderRef.current) return;
    if (slideIndex === 5) {
      navigate('/onboarding/confirm');
      return;
    }
    sliderRef.current.slickNext();
  };

  return (
    <>
      {slideIndex !== 0 && (
        <ArrowContainer onClick={slickPrev}>
          <ArrowLeftIcon />
        </ArrowContainer>
      )}
      <Slider {...sliderSettings} ref={sliderRef}>
        <OnboardingSlide
          key="parkingType"
          title={'선호하는 주차장 \n운영 방식을 알려주세요!'}
          isMultipleSelection={true}
          contents={parkingTypes}
          booleans={parkingTypeBooleans}
          onClick={selectParkingType}
        />
        <OnboardingSlide
          key="parkingOption"
          title={'선호하는 주차장 \n유형을 알려주세요!'}
          isMultipleSelection={true}
          contents={parkingOptions}
          booleans={parkingOptionBooleans}
          onClick={selectParkingOption}
        />
        <OnboardingSlide
          key="parkingPrice"
          title={'선호하는 주차장 \n유형을 알려주세요!'}
          isMultipleSelection={true}
          contents={parkingPrices}
          booleans={parkingPriceBooleans}
          onClick={selectParkingPrice}
        />
        <OnboardingSlide
          key="parkingTerm"
          title={'평균적인 주차시간을 \n알려주세요!'}
          isMultipleSelection={false}
          contents={parkingTerms}
          booleans={parkingTermBooleans}
          onClick={selectParkingTerm}
        />
        <OnboardingSlide
          key="electricCar"
          title={'전기차를 이용하시나요? \n선호하는 방식을 선택하세요!'}
          isMultipleSelection={false}
          contents={electricCars}
          booleans={parkingElectricCarBooleans}
          onClick={selectElectricCar}
        />
        <OnboardingSlide
          key="priorityCondition"
          title={'우선순위로 보여줄 \n주차장 조건을 선택하세요!'}
          isMultipleSelection={false}
          contents={priorities}
          booleans={parkingPriorityBooleans}
          onClick={selectPriority}
        />
      </Slider>
      <ButtonContainer>
        <Button color="secondary" onClick={slickNext}>
          확인
        </Button>
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 50px;
  left: 0;
  display: flex;
  justify-content: center;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 3rem;
  z-index: 1;
  cursor: pointer;
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

export default OnBoarding;
