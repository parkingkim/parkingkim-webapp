import ParkingLotCard from '@components/ParkingLotCard';
import Text from '@components/Text';
import { useState } from 'react';
import { SearchResult } from 'src/types';
import styled from 'styled-components';
import ParkingLotContent from './ParkingLotContent';

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
}

const ResultContent = ({ result }: ResultContentProps) => {
  // TODO: 바텀싯 높이 관련 로직을 전역으로 바꿔야 구현에 용이할듯 함
  const [isSelect, setIsSelect] = useState(false);
  return (
    <>
      {isSelect ? (
        <ParkingLotContent goBack={setIsSelect} result={result} />
      ) : (
        <ResultContainer>
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
      )}
    </>
  );
};

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

export default ResultContent;
