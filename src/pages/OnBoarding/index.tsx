import { ReactElement, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots: ReactElement[]) => <DotsContainer>{dots}</DotsContainer>,
};

const initialParkingTypes = [
  { name: '공영', isSelected: false },
  { name: '민영', isSelected: false },
  { name: '기계식', isSelected: false },
];

const initialParkingPrices = [
  { name: '무료', isSelected: false },
  { name: '유료', isSelected: false },
];

const initialParkingTerms = [
  { name: '하루', isSelected: false },
  {
    name: '1시간',
    isSelected: false,
    moreOptions: ['2시간', '3시간', '4시간', '5시간', '6시간', '7시간'],
  },
];

const initialElecticCars = [
  { name: '전기차를 사용하지 않아요', isSelected: false },
  {
    name: '전기차를 사용해요',
    isSelected: false,
    moreOptions: ['AC 단상', 'DC 차데모', 'DC 콤보', 'AC3 상'],
  },
];

const initialPriorityConditions = [
  { name: '목적지에서 가까운 순', isSelected: false },
  {
    name: '가격이 저렴한 순',
    isSelected: false,
  },
  {
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
            유형을 알려주세요!<p>*중복 선택이 가능합니다.</p>
          </h1>

          {parkingTypes.map((parkingType, index) => {
            return (
              <OptionButton $isSelected={parkingType.isSelected} onClick={selectParkingType(index)}>
                {parkingType.name} 주차장
              </OptionButton>
            );
          })}
        </Container>
        <Container>
          <h1>
            선호하는 주차장 <br />
            유형을 알려주세요!
          </h1>
          {parkingPrices.map((parkingPrice, index) => {
            return (
              <OptionButton
                $isSelected={parkingPrice.isSelected}
                onClick={selectParkingPrice(index)}
              >
                {parkingPrice.name} 주차장
              </OptionButton>
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
              <OptionButton $isSelected={parkingTerm.isSelected} onClick={selectParkingTerm(index)}>
                {parkingTerm.name}
              </OptionButton>
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
              <OptionButton $isSelected={electricCar.isSelected} onClick={selectElectricCar(index)}>
                {electricCar.name}
              </OptionButton>
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
                $isSelected={priorityCondition.isSelected}
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
  height: 40px;

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
  height: 70vh;
  flex-direction: column;
  justify-content: center;

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
  margin: 0;
  align-self: center;

  color: ${({ theme }) => theme.gray};
  font-size: 16px;
  text-align: center;
`;

const OptionButton = styled.button<{ $isSelected: boolean }>`
  width: 80%;
  height: 63px;
  padding: 0 2.5rem;
  margin-bottom: 0.5rem;

  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.gray : '#f5f5f5')};
  border: 0;
  border-radius: 10px;

  color: ${({ theme, $isSelected }) => ($isSelected ? '#edeeef' : theme.gray)};
  font-size: 20px;
  font-weight: bold;
  text-align: start;

  &:focus {
    outline: 0;
  }
`;

export default OnBoarding;
