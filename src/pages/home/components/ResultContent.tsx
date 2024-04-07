import { BackIcon } from '@assets/index';
import ParkingLotCard from '@components/ParkingLotCard';
import Text from '@components/Text';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SearchResult } from 'src/types';
import styled from 'styled-components';
import ParkingLotContent from './ParkingLotContent';
import ZoomButtons from './ZoomButtons';
import useMapStore from '@store/mapStore';
import useBottomSheetStore from '@store/bottomSheetStore';

const mockLots = [
  {
    title: '주차장 1',
    price: 1000,
    ETA: 10,
    parkingType: '지하',
    isFavorite: false,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 2',
    price: 2000,
    ETA: 20,
    parkingType: '지상',
    isFavorite: true,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 3',
    price: 3000,
    ETA: 30,
    parkingType: '지하',
    isFavorite: false,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 1',
    price: 1000,
    ETA: 10,
    parkingType: '지하',
    isFavorite: false,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 2',
    price: 2000,
    ETA: 20,
    parkingType: '지상',
    isFavorite: true,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 3',
    price: 3000,
    ETA: 30,
    parkingType: '지하',
    isFavorite: false,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 1',
    price: 1000,
    ETA: 10,
    parkingType: '지하',
    isFavorite: false,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 2',
    price: 2000,
    ETA: 20,
    parkingType: '지상',
    isFavorite: true,
    imgUrl: 'https://via.placeholder.com/104',
  },
  {
    title: '주차장 3',
    price: 3000,
    ETA: 30,
    parkingType: '지하',
    isFavorite: false,
    imgUrl: 'https://via.placeholder.com/104',
  },
];

interface ResultContentProps {
  result: SearchResult;
  setIsResultVisible: Dispatch<SetStateAction<boolean>>;
}

const ResultContent = ({ result, setIsResultVisible }: ResultContentProps) => {
  // 아래 상태는 이후 경로 안내에 필요한 상태입니다.
  const [isSelect, setIsSelect] = useState(false);
  const { setHeight, fillHeight } = useBottomSheetStore();
  const { mapInstance } = useMapStore();

  useEffect(() => {
    setHeight(window.innerHeight * 0.4);
  }, []);

  const goBackToSearch = () => {
    fillHeight();
    setIsResultVisible(false);
  };

  if (isSelect) return <ParkingLotContent result={result} goBack={setIsSelect} />;

  return (
    <ResultContainer>
      <ButtonContainer>
        <BackButton onClick={goBackToSearch}>
          <BackIcon />
        </BackButton>
        <ZoomButtons mapInstance={mapInstance} />
      </ButtonContainer>
      <Handle />
      <DestinationWrapper>
        <Text fontStyle="bold" size="xl">
          목적지
        </Text>
        <Text>{result.name}</Text>
        <Text color="btn-gray">{result.newAddressList.newAddress[0].fullAddressRoad}</Text>
      </DestinationWrapper>
      <CardContainer>
        {mockLots.map((lot) => (
          <ParkingLotCard
            title={lot.title}
            price={lot.price}
            ETA={lot.ETA}
            parkingType={lot.parkingType}
            imgUrl={lot.imgUrl}
            isFavorite={lot.isFavorite}
            goToResult={setIsSelect}
          />
        ))}
      </CardContainer>
    </ResultContainer>
  );
};

const BackButton = styled.button`
  position: absolute;
  bottom: 20vh;
  left: 0;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
`;

const Handle = styled.div`
  width: 45px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin: 0 auto;
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 120px;
`;

const ResultContainer = styled.div`
  height: 100%;
  padding: 20px;
  overflow: scroll;
`;

const DestinationWrapper = styled.div`
  margin-bottom: 30px;
  & > :first-child {
    margin-bottom: 8px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: -120px;
`;

export default ResultContent;
