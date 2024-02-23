import { ParkingLot } from 'src/types';
import FavParkingLotItem from './FavParkingLotItem';
import styled from 'styled-components';
import Text from '@components/Text';

interface FavParkingLotsListProps {
  parkingLots: ParkingLot[];
}

const FavParkingLotsList = ({ parkingLots }: FavParkingLotsListProps) => {
  return (
    <ParkingLotsListContainer>
      <ParkingLotsListHeader>
        <Text fontStyle="bold">즐겨찾는 주차장</Text>
        <button>
          <Text size="sm" color="gray">
            더보기
          </Text>
        </button>
      </ParkingLotsListHeader>
      {parkingLots.map((parkingLot) => (
        <FavParkingLotItem key={parkingLot.parkingId} parkingLot={parkingLot} />
      ))}
    </ParkingLotsListContainer>
  );
};

const ParkingLotsListContainer = styled.div`
  height: calc(100vh - 408px);
  overflow: scroll;
`;

const ParkingLotsListHeader = styled.header`
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

export default FavParkingLotsList;
