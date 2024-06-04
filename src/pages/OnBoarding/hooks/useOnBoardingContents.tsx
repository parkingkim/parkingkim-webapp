import useBoolean from '@hooks/useBoolean';

const useOnBoardingContents = () => {
  const outside = useBoolean();
  const road = useBoolean();
  const mechanical = useBoolean();
  const publicPlace = useBoolean();
  const privatePlace = useBoolean();
  const free = useBoolean();
  const charged = useBoolean();
  const day = useBoolean();
  const hour = useBoolean();
  const electricCarNo = useBoolean();
  const electricCarYes = useBoolean();
  const distance = useBoolean();
  const price = useBoolean();
  const recommend = useBoolean();

  const parkingTypeBooleans = [outside, road, mechanical];
  const parkingOptionBooleans = [publicPlace, privatePlace];
  const parkingPriceBooleans = [free, charged];
  const parkingTermBooleans = [day, hour];
  const parkingElectricCarBooleans = [electricCarNo, electricCarYes];
  const parkingPriorityBooleans = [distance, price, recommend];

  const selectParkingType = (index: number) => () => {
    parkingTypeBooleans[index].toggle();
  };

  const selectParkingOption = (index: number) => () => {
    parkingOptionBooleans[index].toggle();
  };

  const selectParkingPrice = (index: number) => () => {
    parkingPriceBooleans[index].toggle();
  };

  const selectParkingTerm = (index: number) => () => {
    parkingTermBooleans[index].toggle();
  };

  const selectElectricCar = (index: number) => () => {
    parkingElectricCarBooleans[index].toggle();
  };

  const selectPriority = (index: number) => () => {
    parkingPriorityBooleans[index].toggle();
  };

  return {
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
  };
};

export default useOnBoardingContents;
