import { ArrowLeftIcon } from '@assets/index';
import { ReactElement, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import useOnBoardingContents from './hooks/useOnBoardingContents';
import Button from '@components/Button';
import OnboardingSlide from './components/OnboardingSlide';
import usePostSearchCondition from './hooks/usePostSearchCondition';

const parkingTypes = [
  { key: 'outside', name: '노외 주차장' },
  { key: 'road', name: '노상 주차장' },
  { key: 'mechanical', name: '기계식 주차장' },
];

const parkingOptions = [
  { key: 'public', name: '공영 주차장' },
  { key: 'private', name: '민영 주차장' },
];

const parkingPrices = [
  { key: 'free', name: '무료 주차장' },
  {
    key: 'charged',
    name: '유료 주차장',
    moreOptions: [
      { key: 'cash', name: '현금 결제' },
      { key: 'card', name: '카드 결제' },
    ],
  },
];

const parkingTerms = [
  { key: '24', name: '하루' },
  {
    key: '0',
    name: '시간',
    moreOptions: [
      { key: '1', name: '1시간' },
      { key: '2', name: '2시간' },
      { key: '3', name: '3시간' },
      { key: '4', name: '4시간' },
      { key: '5', name: '5시간' },
      { key: '6', name: '6시간' },
      { key: '7', name: '7시간' },
    ],
  },
];

const electricCars = [
  { key: 'no', name: '전기차를 사용하지 않아요' },
  {
    key: 'yes',
    name: '전기차를 사용해요',
    moreOptions: [
      { key: 'AC', name: 'AC 단상' },
      { key: 'DC', name: 'DC 차데모' },
      { key: 'DCC', name: 'DC 콤보' },
      { key: 'AC3', name: 'AC3 상' },
    ],
  },
];

const parkingPriorities = [
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
  const sliderRef = useRef<Slider>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const {
    parkingTypeBooleans,
    parkingOptionBooleans,
    parkingPriceBooleans,
    parkingTermBooleans,
    parkingElectricCarBooleans,
    parkingPriorityBooleans,
    electricCarTypeBooleans,
    paymentBooleans,
    hourBooleans,
    selectParkingOption,
    selectParkingType,
    selectParkingPrice,
    selectParkingTerm,
    selectElectricCar,
    selectPriority,
    selectPayment,
    selectHour,
    selectElectricCarType,
  } = useOnBoardingContents();
  const { mutate: postSearchCondition } = usePostSearchCondition();

  const getSearchCondition = () => {
    const operationType = parkingTypes
      .filter((_, index) => parkingTypeBooleans[index].value)
      .map((item) => item.key);
    const parkingType = parkingOptions
      .filter((_, index) => parkingOptionBooleans[index].value)
      .map((item) => item.key);
    const feeType = parkingPrices
      .filter((_, index) => parkingPriceBooleans[index].value)
      .map((item) => item.key);
    const payType = parkingPrices[1]
      .moreOptions!.filter((_, index) => paymentBooleans[index].value)
      .map((item) => item.key);
    const priority = parkingPriorities.filter((_, index) => parkingPriorityBooleans[index].value)[0]
      .key;
    const hours = parkingTermBooleans[0].value
      ? parkingTerms[0].key
      : parkingTerms[1].moreOptions!.filter((_, index) => hourBooleans[index].value)[0].key;

    return {
      operationType,
      parkingType,
      feeType,
      payType,
      priority,
      hours: Number(hours),
    };
  };

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
      postSearchCondition(getSearchCondition());
      return;
    }
    sliderRef.current.slickNext();
  };

  const isLastSlide = () => slideIndex == 5;

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
          title={
            <Label>
              선호하는 주차장
              <br />
              <span>유형</span>을 알려주세요!
            </Label>
          }
          isMultipleSelection={true}
          contents={parkingTypes}
          booleans={parkingTypeBooleans}
          onClick={selectParkingType}
        />
        <OnboardingSlide
          key="parkingOption"
          title={
            <Label>
              선호하는 주차장
              <br />
              <span>옵션</span>을 알려주세요!
            </Label>
          }
          isMultipleSelection={true}
          contents={parkingOptions}
          booleans={parkingOptionBooleans}
          onClick={selectParkingOption}
        />
        <OnboardingSlide
          key="parkingPrice"
          title={
            <Label>
              선호하는 주차장
              <br />
              <span>결제 방식</span>을 알려주세요!
            </Label>
          }
          isMultipleSelection={true}
          contents={parkingPrices}
          booleans={parkingPriceBooleans}
          moreBooleans={paymentBooleans}
          onClick={selectParkingPrice}
          onClickMore={selectPayment}
        />
        <OnboardingSlide
          key="parkingTerm"
          title={
            <Label>
              평균적인 <span>주차시간</span>을
              <br />을 알려주세요!
            </Label>
          }
          isMultipleSelection={false}
          contents={parkingTerms}
          booleans={parkingTermBooleans}
          moreBooleans={hourBooleans}
          onClick={selectParkingTerm}
          onClickMore={selectHour}
        />
        <OnboardingSlide
          key="electricCar"
          title={
            <Label>
              <span>전기차</span>를 이용하시나요?
              <br />
              <span>선호하는 충전기</span>를 선택하세요!
            </Label>
          }
          isMultipleSelection={true}
          contents={electricCars}
          booleans={parkingElectricCarBooleans}
          moreBooleans={electricCarTypeBooleans}
          onClick={selectElectricCar}
          onClickMore={selectElectricCarType}
        />
        <OnboardingSlide
          key="priorityCondition"
          title={
            <Label>
              우선순위로 보고 싶은
              <br />
              <span>주차장 조건</span>을 선택하세요!
            </Label>
          }
          isMultipleSelection={false}
          contents={parkingPriorities}
          booleans={parkingPriorityBooleans}
          onClick={selectPriority}
        />
      </Slider>
      {isLastSlide() ? (
        <ButtonContainer>
          <Button color="primary" onClick={slickNext}>
            확인
          </Button>
        </ButtonContainer>
      ) : (
        <Notice>* 조건설정은 언제든지 수정할 수 있어요.</Notice>
      )}
    </>
  );
};

const Notice = styled.p`
  position: absolute;
  bottom: 100px;
  color: #d9d9d9;
  right: 0;
  left: 0;
`;

const Label = styled.h1`
  padding: 150px 0 10px 2rem;
  align-self: flex-start;

  position: relative;

  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  text-align: start;
  white-space: pre-wrap;

  & > span {
    color: #0dc5ff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

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

  & li.slick-active > button::before {
    color: #0dc5ff;
  }
`;

export default OnBoarding;
