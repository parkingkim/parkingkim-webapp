import { ArrowLeftIcon } from '@assets/index';
import { ReactElement, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import useOnBoardingContents from './hooks/useOnBoardingContents';
import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';
import OnboardingSlide from './components/OnboardingSlide';

const OnBoarding = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const {
    parkingManagements,
    parkingTypes,
    parkingPrices,
    parkingTerms,
    electricCars,
    priorityConditions,
    selectParkingManagement,
    selectParkingType,
    selectParkingPrice,
    selectParkingTerm,
    selectElectricCar,
    selectPriorityCondition,
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
    if (slideIndex === 4) {
      navigate('/onboading/confirm');
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
          onClick={selectParkingType}
        />
        <OnboardingSlide
          key="parkingManagement"
          title={'선호하는 주차장 \n유형을 알려주세요!'}
          isMultipleSelection={true}
          contents={parkingManagements}
          onClick={selectParkingManagement}
        />
        <OnboardingSlide
          key="parkingPrice"
          title={'선호하는 주차장 \n유형을 알려주세요!'}
          isMultipleSelection={true}
          contents={parkingPrices}
          onClick={selectParkingPrice}
        />
        <OnboardingSlide
          key="parkingTerm"
          title={'평균적인 주차시간을 \n알려주세요!'}
          isMultipleSelection={false}
          contents={parkingTerms}
          onClick={selectParkingTerm}
        />
        <OnboardingSlide
          key="electricCar"
          title={'전기차를 이용하시나요? \n선호하는 방식을 선택하세요!'}
          isMultipleSelection={false}
          contents={electricCars}
          onClick={selectElectricCar}
        />
        <OnboardingSlide
          key="priorityCondition"
          title={'우선순위로 보여줄 \n주차장 조건을 선택하세요!'}
          isMultipleSelection={false}
          contents={priorityConditions}
          onClick={selectPriorityCondition}
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
