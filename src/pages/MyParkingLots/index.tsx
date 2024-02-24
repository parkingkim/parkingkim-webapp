import { ParkingLot } from 'src/types';
import FavParkingLotsList from './components/FavParkingLotsList';
import styled from 'styled-components';
import Text from '@components/Text';
import VisitedParkingLotPreview from './components/VisitedParkingLotPreview';
import { useNavigate } from 'react-router-dom';

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
        <button onClick={goMyReviews}>
          <Text fontStyle="semi-bold">리뷰관리</Text>
        </button>
      </MyParkingLotsHeader>
      <ParkingLotsListContainer>
        <ParkingLotsListHeader>
          <Text fontStyle="bold">즐겨찾는 주차장</Text>
          <button onClick={goMoreReviews}>
            <Text size="sm" color="gray">
              더보기
            </Text>
          </button>
        </ParkingLotsListHeader>
        <FavParkingLotsList parkingLots={mockParkingLots} />
      </ParkingLotsListContainer>
      <VisitedParkingLotPreview />
    </div>
  );
};

const MyParkingLotsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  border-bottom: 2px solid #f6f6f6;

  button {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 7px 14px;
  }
`;

const ParkingLotsListContainer = styled.div`
  height: calc(100vh - 408px);
  overflow: scroll;
`;

export const ParkingLotsListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px 8px 20px;
  background-color: white;

  button {
    background-color: transparent;
    padding: 4px;
    cursor: pointer;
  }
`;

export default MyParkingLots;
