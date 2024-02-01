import { ArrowLeftIcon, ArrowTopIcon } from '@assets/index';
import { ReactElement, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <ArrowLeftIcon style={{ top: '0rem', left: '1rem' }} />,
  appendDots: (dots: ReactElement[]) => <DotsContainer>{dots}</DotsContainer>,
};

const initialParkingTypes = [
  { key: 'public', name: '공영', isSelected: false },
  { key: 'private', name: '민영', isSelected: false },
  { key: 'mechanical', name: '기계식', isSelected: false },
];

const initialParkingPrices = [
  { key: 'free', name: '무료', isSelected: false },
  { key: 'charged', name: '유료', isSelected: false, moreOptions: ['현금 결제', '카드 결제'] },
];

const initialParkingTerms = [
  { key: 'day', name: '하루', isSelected: false },
  {
    key: 'hour',
    name: '1시간',
    isSelected: false,
    moreOptions: ['2시간', '3시간', '4시간', '5시간', '6시간', '7시간'],
  },
];

const initialElecticCars = [
  { key: 'no', name: '전기차를 사용하지 않아요', isSelected: false },
  {
    key: 'yes',
    name: '전기차를 사용해요',
    isSelected: false,
    moreOptions: ['AC 단상', 'DC 차데모', 'DC 콤보', 'AC3 상'],
  },
];

const initialPriorityConditions = [
  { key: 'distance', name: '목적지에서 가까운 순', isSelected: false },
  {
    key: 'price',
    name: '가격이 저렴한 순',
    isSelected: false,
  },
  {
    key: 'recommend',
    name: '파킹킴 추천순',
    isSelected: false,
  },
];

const OnBoarding = () => {
  const [parkingTypes, setParkingTypes] = useState(initialParkingTypes);
  const [parkingPrices, setParkingPrices] = useState(initialParkingPrices);
  const [parkingTerms, setParkingTerms] = useState(initialParkingTerms);
  const [electricCars, setElectricCars] = useState(initialElecticCars);
  const [priorityConditions, setPriorityConditions] = useState(initialPriorityConditions);

  const selectParkingType = (index: number) => () => {
    parkingTypes[index].isSelected = !parkingTypes[index].isSelected;
    setParkingTypes([...parkingTypes]);
  };

  const selectParkingPrice = (index: number) => () => {
    parkingPrices[index].isSelected = !parkingPrices[index].isSelected;
    console.log(parkingPrices);
    setParkingPrices([...parkingPrices]);
  };

  const selectParkingTerm = (index: number) => () => {
    parkingTerms[index].isSelected = !parkingTerms[index].isSelected;
    setParkingTerms([...parkingTerms]);
  };

  const selectElectricCar = (index: number) => () => {
    electricCars[index].isSelected = !electricCars[index].isSelected;
    setElectricCars([...electricCars]);
  };

  const selectPriorityCondition = (index: number) => () => {
    priorityConditions[index].isSelected = !priorityConditions[index].isSelected;
    setPriorityConditions([...priorityConditions]);
  };

  return (
    <>
      <Slider {...sliderSettings}>
        <Container>
          <h1>
            선호하는 주차장 <br />
            유형을 알려주세요!
            <p>*중복 선택이 가능합니다.</p>
          </h1>
          {parkingTypes.map((parkingType, index) => {
            return (
              <OptionButton
                key={parkingType.key}
                $isSelected={parkingType.isSelected}
                $isCollapsed={false}
                onClick={selectParkingType(index)}
              >
                {parkingType.name} 주차장
              </OptionButton>
            );
          })}
        </Container>
        <Container>
          <h1>
            선호하는 주차장 <br />
            유형을 알려주세요!
            <p>*중복 선택이 가능합니다.</p>
          </h1>
          {parkingPrices.map((parkingPrice, index) => {
            return (
              <>
                <OptionButton
                  key={parkingPrice.key}
                  $isSelected={parkingPrice.isSelected}
                  $isCollapsed={parkingPrice.moreOptions && parkingPrice.isSelected}
                  onClick={selectParkingPrice(index)}
                >
                  {parkingPrice.name} 주차장
                  {parkingPrice.moreOptions && <ArrowTopIcon />}
                </OptionButton>
                {parkingPrice.moreOptions?.map((moreOption) => (
                  <MoreOptionButton key={moreOption} $isSelected={parkingPrice.isSelected}>
                    {moreOption}
                  </MoreOptionButton>
                ))}
              </>
            );
          })}
        </Container>
        <Container>
          <h1>
            평균적인 주차시간을 <br />
            알려주세요!
          </h1>
          {parkingTerms.map((parkingTerm, index) => {
            return (
              <>
                <OptionButton
                  key={parkingTerm.key}
                  $isSelected={parkingTerm.isSelected}
                  $isCollapsed={parkingTerm.moreOptions && parkingTerm.isSelected}
                  onClick={selectParkingTerm(index)}
                >
                  {parkingTerm.name}
                </OptionButton>
                {parkingTerm.moreOptions?.map((moreOption) => (
                  <MoreOptionButton key={moreOption} $isSelected={parkingTerm.isSelected}>
                    {moreOption}
                  </MoreOptionButton>
                ))}
              </>
            );
          })}
        </Container>
        <Container>
          <h1>
            전기차를 이용하시나요? <br />
            선호하는 방식을 선택하세요!
          </h1>
          {electricCars.map((electricCar, index) => {
            return (
              <>
                <OptionButton
                  key={electricCar.key}
                  $isSelected={electricCar.isSelected}
                  $isCollapsed={electricCar.moreOptions && electricCar.isSelected}
                  onClick={selectElectricCar(index)}
                >
                  {electricCar.name}
                </OptionButton>
                {electricCar.moreOptions?.map((moreOption) => (
                  <MoreOptionButton key={moreOption} $isSelected={electricCar.isSelected}>
                    {moreOption}
                  </MoreOptionButton>
                ))}
              </>
            );
          })}
        </Container>
        <Container>
          <h1>
            우선순위로 보여줄 <br />
            주차장 조건을 선택하세요!
          </h1>
          {priorityConditions.map((priorityCondition, index) => {
            return (
              <OptionButton
                key={priorityCondition.key}
                $isSelected={priorityCondition.isSelected}
                $isCollapsed={false}
                onClick={selectPriorityCondition(index)}
              >
                {priorityCondition.name}
              </OptionButton>
            );
          })}
        </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    padding: 10rem 3rem 5rem;
    margin-bottom: 5px;
    align-self: flex-start;

    position: relative;

    font-size: 24px;
    font-weight: 800;
    line-height: 30px;
    text-align: start;
  }

  & > h1 > p {
    padding: 0 0 3rem 3rem;
    margin: 0;
    align-self: flex-start;

    position: absolute;
    bottom: -8px;
    left: 0;

    color: ${({ theme }) => theme.gray};
    font-size: 16px;
    font-weight: 500;
    text-align: start;
  }
`;

const Notice = styled.p`
  padding: 4rem 0 3rem;
  align-self: center;

  position: absolute;
  bottom: 1.5rem;

  color: ${({ theme }) => theme.gray};
  font-size: 16px;
  text-align: center;
`;

const OptionButton = styled.button<{ $isSelected: boolean; $isCollapsed?: boolean }>`
  width: 80%;
  height: 63px;
  padding: 0 2rem;
  margin-top: 0.5rem;

  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.gray : '#f5f5f5')};
  border: 0;
  border-radius: ${({ $isCollapsed }) => ($isCollapsed ? '10px 10px 0 0' : '10px')};

  color: ${({ theme, $isSelected }) => ($isSelected ? '#edeeef' : theme.gray)};
  font-size: 20px;
  font-weight: bold;
  text-align: start;

  &:focus {
    outline: 0;
  }
`;

const MoreOptionButton = styled.button<{ $isSelected: boolean }>`
  width: 80%;
  height: 60px;
  padding: 0 2rem;

  background-color: '#f5f5f5';
  border: 0;
  border-radius: 0;

  color: ${({ theme }) => theme.gray};
  font-size: 20px;
  font-weight: bold;
  text-align: start;
  visibility: ${({ $isSelected }) => ($isSelected ? 'visible' : 'hidden')};

  &:focus {
    outline: 0;
  }
`;

export default OnBoarding;
