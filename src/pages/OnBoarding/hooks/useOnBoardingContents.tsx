import { useState } from 'react';
import { OnBoardingContent } from '../components/Slide';

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

const useOnBoardingContents = () => {
  const [parkingTypes, setParkingTypes] = useState<OnBoardingContent[]>(initialParkingTypes);
  const [parkingPrices, setParkingPrices] = useState<OnBoardingContent[]>(initialParkingPrices);
  const [parkingTerms, setParkingTerms] = useState<OnBoardingContent[]>(initialParkingTerms);
  const [electricCars, setElectricCars] = useState<OnBoardingContent[]>(initialElecticCars);
  const [priorityConditions, setPriorityConditions] =
    useState<OnBoardingContent[]>(initialPriorityConditions);

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
  return {
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
  };
};

export default useOnBoardingContents;
