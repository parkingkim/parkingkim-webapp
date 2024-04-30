import { ParkingLot } from 'src/types';
import ParkingLotItem from './ParkingLotItem';
import styled from 'styled-components';

interface ParkingLotListProps {
  parkingLots: ParkingLot[];
  isDeleteMode?: boolean;
  handleSelectParkingLot?: (parkingId: string, isSelected: boolean) => void;
}

const ParkingLotList = ({
  parkingLots,
  isDeleteMode,
  handleSelectParkingLot,
}: ParkingLotListProps) => {
  return (
    <ParkingLotsListContainer>
      {parkingLots.map((parkingLot) => (
        <ParkingLotItem
          key={parkingLot.parkingId}
          parkingLot={parkingLot}
          isDeleteMode={isDeleteMode}
          onSelectParkingLot={handleSelectParkingLot}
        />
      ))}
    </ParkingLotsListContainer>
  );
};

const ParkingLotsListContainer = styled.ul`
  li {
    border-bottom: 2px solid #f5f5f5;
  }
`;

export default ParkingLotList;
