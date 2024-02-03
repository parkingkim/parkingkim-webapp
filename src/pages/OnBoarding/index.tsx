import { ArrowLeftIcon } from '@assets/index';
import { ReactElement } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Slide from './components/Slide';
import useOnBoardingContents from './hooks/useOnBoardingContents';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <ArrowLeftIcon />,
  appendDots: (dots: ReactElement[]) => <DotsContainer>{dots}</DotsContainer>,
};

const OnBoarding = () => {
  const {
    parkingTypes,
    parkingPrices,
    parkingTerms,
    electricCars,
    priorityConditions,
    selectParkingType,
    selectParkingPrice,
    selectParkingTerm,
    selectElectricCar,
    selectPriorityCondition,
  } = useOnBoardingContents();

  return (
    <>
      <Slider {...sliderSettings}>
        <Slide
          title={'선호하는 주차장 \n유형을 알려주세요!'}
          isMultipleSelection={true}
          contents={parkingTypes}
          onClick={selectParkingType}
        />
        <Slide
          title={'선호하는 주차장 \n유형을 알려주세요!'}
          isMultipleSelection={true}
          contents={parkingPrices}
          onClick={selectParkingPrice}
        />
        <Slide
          title={'평균적인 주차시간을 \n알려주세요!'}
          isMultipleSelection={false}
          contents={parkingTerms}
          onClick={selectParkingTerm}
        />
        <Slide
          title={'전기차를 이용하시나요? \n선호하는 방식을 선택하세요!'}
          isMultipleSelection={false}
          contents={electricCars}
          onClick={selectElectricCar}
        />
        <Slide
          title={'우선순위로 보여줄 \n주차장 조건을 선택하세요!'}
          isMultipleSelection={false}
          contents={priorityConditions}
          onClick={selectPriorityCondition}
        />
      </Slider>
      <Notice>*조건설정은 언제든지 수정할 수 있어요</Notice>
    </>
  );
};

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

const Notice = styled.p`
  position: absolute;
  bottom: 1.5rem;
  padding: 4rem 0 3rem;
  align-self: center;

  color: ${({ theme }) => theme.gray};
  font-size: 16px;
  text-align: center;
`;

export default OnBoarding;
