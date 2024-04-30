import { BackIcon } from '@assets/index';
import Button from '@components/Button';
import Badge from '@components/ParkingLotCard/Badge';
import ReviewMenus from '@components/ReviewMenus';
import Text from '@components/Text';
import useGetParkingDetail from '@hooks/api/useGetParkingDetail';
import useDrawLine from '@hooks/useDrawLine';
import useBottomSheetStore from '@store/bottomSheetStore';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { SearchResult } from 'src/types';
import styled from 'styled-components';

interface ParkingLotContentProps {
  result: SearchResult;
  parkingLotId: number;
  setSelectedParkingLot: Dispatch<SetStateAction<number>>;
  walkingTime: number;
}

const ParkingLotContent = ({
  result,
  parkingLotId,
  walkingTime,
  setSelectedParkingLot,
}: ParkingLotContentProps) => {
  const { setHeight, toggleHeight, fillHeight } = useBottomSheetStore();
  const { data: parkingLot, isFetching } = useGetParkingDetail(parkingLotId);
  const { navigateRoute, totalDistance, totalTime } = useDrawLine(result);

  useEffect(() => {
    fillHeight();
  }, []);

  const backToResult = () => {
    setSelectedParkingLot(-1);
    toggleHeight();
  };

  const handleNavigateRoute = () => {
    setHeight(250);
    navigateRoute(parkingLot.latitude, parkingLot.longitude);
  };

  if (isFetching) return <p>로딩중</p>;

  return (
    <ParkingLotContainer>
      <LotInfoContainer>
        <BackIcon onClick={backToResult} style={{ cursor: 'pointer' }} />
        <Text size="lg">{parkingLot.parkingName}</Text>
        <Text size="md">주차장 주소</Text>
        {/** 일단은 빈 이미지로 놓기 */}
        <EmptyImage />
        <Badge
          price={parkingLot.feeInfo.fee}
          walkingTime={walkingTime}
          parkingType={parkingLot.parkingType}
        />
        <Text color="btn-gray">*주차장 이용요금은 실시간 변동될 수 있어요.</Text>
      </LotInfoContainer>
      <ParkingInfoContainer>
        <Button color="tertiary" onClick={handleNavigateRoute}>
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
