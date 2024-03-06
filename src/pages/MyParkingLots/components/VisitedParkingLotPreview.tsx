import { WhiteStarIcon } from '@assets/index';
import Text from '@components/Text';
import { ParkingLot } from 'src/types';
import styled from 'styled-components';

const mockVisitedParkingLots: ParkingLot[] = [
  {
    parkingId: '1',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '1',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '1',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '1',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '1',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
];

const VisitedParkingLotPreview = () => {
  return (
    <VisitedParkingLotContainer>
      <Text fontStyle="bold">최근 간 주차장</Text>
      <PreviewContainer>
        {mockVisitedParkingLots.length ? (
          <>
            {mockVisitedParkingLots.map((parkingLot) => (
              <PreviewItem key={parkingLot.parkingId}>
                <Text color="white">{parkingLot.parkingName}</Text>
                <WhiteStarIcon style={{ position: 'absolute', right: '12px', bottom: '12px' }} />
              </PreviewItem>
            ))}
          </>
        ) : (
          <div>최근 방문한 주차장이 없습니다.</div>
        )}
      </PreviewContainer>
    </VisitedParkingLotContainer>
  );
};

const VisitedParkingLotContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
  min-height: 200px;
  overflow: hidden;
  padding-top: 25px;
  border-top: 7px solid #f6f6f6;
  background-color: ${({ theme }) => theme.white};

  & > p {
    margin-left: 20px;
  }
`;

const PreviewContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 500px;
  overflow: scroll;
  padding: 20px;
  gap: 15px;
`;

const PreviewItem = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  min-width: 140px;
  height: 150px;
  border-radius: 10px;
  padding: 15px;
  background-color: ${({ theme }) => theme.gray};
`;

export default VisitedParkingLotPreview;
