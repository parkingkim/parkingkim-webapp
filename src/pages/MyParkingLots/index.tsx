import { ParkingLot } from 'src/types';
import styled from 'styled-components';
import Text from '@components/Text';
import VisitedParkingLotPreview from './components/VisitedParkingLotPreview';
import { useNavigate } from 'react-router-dom';
import ParkingLotList from './components/ParkingLotList';
import Button from '@components/Button';

export const mockParkingLots: ParkingLot[] = [
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
    parkingId: '2',
    parkingName: '동혁주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '3',
    parkingName: '건호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '4',
    parkingName: '영민주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '10',
    parkingName: '정규주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '5',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '6',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '7',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
  {
    parkingId: '8',
    parkingName: '영호주차장',
    estimatedFee: '3000',
    estimatedWalkingTime: '',
    parkingType: '노외',
    isFavorite: true,
    latitude: '34.333213',
    longitude: '54.434312',
  },
];

const MyParkingLots = () => {
  const navigate = useNavigate();

  //TODO: 리뷰 요청 API 연결, 전역 상태 관리 라이브러리?
  const goMyReviews = () => {
    navigate('/my-reviews');
  };
  const goMoreReviews = () => navigate('/more-reviews');

  return (
    <div>
      <MyParkingLotsHeader>
        <Text size="xl" fontStyle="bold">
          내 주차장
        </Text>
        <Button color="primary" onClick={goMyReviews} style={{ width: '80px', height: '28px' }}>
          <Text color="white" size="sm" fontStyle="semi-bold">
            리뷰관리
          </Text>
        </Button>
      </MyParkingLotsHeader>
      <ThickBar />
      <ParkingLotsListContainer>
        <ParkingLotsListHeader>
          <Text fontStyle="bold">즐겨찾는 주차장</Text>
          <button onClick={goMoreReviews}>
            <Text size="sm" color="gray60">
              더보기
            </Text>
          </button>
        </ParkingLotsListHeader>
        <ParkingLotList parkingLots={mockParkingLots.slice(0, 5)} />
      </ParkingLotsListContainer>
      <ThickBar />
      <VisitedParkingLotPreview />
    </div>
  );
};

export const ThickBar = styled.div`
  width: 100%;
  height: 7px;
  min-width: 100%;

  background: linear-gradient(to bottom, #dcdcdc 0%, #f6f6f6 30%);
`;

const MyParkingLotsHeader = styled.header`
  display: flex;
  padding: 25px 20px;
  justify-content: space-between;
  align-items: center;
`;

const ParkingLotsListContainer = styled.div`
  height: calc(100vh - 408px);
  overflow: scroll;
`;

export const ParkingLotsListHeader = styled.header`
  display: flex;
  padding: 25px 20px 8px;
  justify-content: space-between;
  align-items: center;

  background-color: white;

  button {
    padding: 4px;

    background-color: transparent;
    cursor: pointer;
  }
`;

export default MyParkingLots;
