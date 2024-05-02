import { FavIcon, GrayFavIcon } from '@assets/index';
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
    isFavorite: false,
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
                <Text>{parkingLot.parkingName}</Text>
                {parkingLot.isFavorite ? (
                  <FavIcon style={{ position: 'absolute', right: '16px', top: '20px' }} />
                ) : (
                  <GrayFavIcon style={{ position: 'absolute', right: '16px', top: '20px' }} />
                )}
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
  display: flex;
  width: 100%;
  max-width: 500px;
  min-height: 200px;
  padding-top: 25px;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;

  background-color: white;

  position: absolute;

  & > p {
    margin-left: 20px;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  overflow: scroll;
  gap: 15px;
`;

const PreviewItem = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 150px;
  min-width: 140px;
  padding: 15px;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  position: relative;
`;

export default VisitedParkingLotPreview;
