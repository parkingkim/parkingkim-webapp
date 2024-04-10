import { BackIcon } from '@assets/index';
import Button from '@components/Button';
import Badge from '@components/ParkingLotCard/Badge';
import ReviewMenus from '@components/ReviewMenus';
import Text from '@components/Text';
import useDrawLine from '@hooks/useDrawLine';
import useBottomSheetStore from '@store/bottomSheetStore';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { SearchResult } from 'src/types';
import styled from 'styled-components';

interface ParkingLotContentProps {
  result: SearchResult;
  goBack: Dispatch<SetStateAction<boolean>>;
}

const mockLot = {
  title: '주차장 1',
  price: 1000,
  ETA: 10,
  parkingType: '지하',
  isFavorite: false,
  imgUrl: '',
};

const ParkingLotContent = ({ result, goBack }: ParkingLotContentProps) => {
  const { navigateRoute, totalDistance, totalTime } = useDrawLine(result);
  const { toggleHeight, fillHeight } = useBottomSheetStore();

  useEffect(() => {
    fillHeight();
  }, []);

  const backToResult = () => {
    goBack(false);
    toggleHeight();
  };

  return (
    <ParkingLotContainer>
      <LotInfoContainer>
        <BackIcon onClick={backToResult} style={{ cursor: 'pointer' }} />
        <Text size="lg">{mockLot.title}</Text>
        <Text size="md">주차장 주소</Text>
        {mockLot.imgUrl ? (
          <img
            src={mockLot.imgUrl}
            alt={mockLot.title}
            style={{ borderRadius: '10px', height: '180px' }}
          />
        ) : (
          <EmptyImage />
        )}
        <Badge price={mockLot.price} ETA={mockLot.ETA} parkingType={mockLot.parkingType} />
        <Text color="btn-gray">*주차장 이용요금은 실시간 변동될 수 있어요.</Text>
      </LotInfoContainer>
      <ParkingInfoContainer>
        <Button color="tertiary" onClick={navigateRoute}>
          <Text color="white" size="lg">
            경로 안내
          </Text>
        </Button>
      </ParkingInfoContainer>
      <ReviewContainer>
        {totalDistance / 1000}km 예상 소요 시간 {totalTime}분
        <ReviewMenus />
      </ReviewContainer>
    </ParkingLotContainer>
  );
};

const ReviewContainer = styled.div`
  padding-bottom: 120px;
`;

const EmptyImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background: linear-gradient(#f5f5f5 20%, #d5d5d5 100%);
  border-radius: 10px;
`;

const LotInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ParkingInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
`;

const ParkingLotContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  padding: 20px;
`;

export default ParkingLotContent;
