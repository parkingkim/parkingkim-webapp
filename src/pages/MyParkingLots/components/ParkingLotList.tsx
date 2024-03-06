import { ParkingLot } from 'src/types';
import ParkingLotItem from './ParkingLotItem';

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
    <>
      {parkingLots.map((parkingLot) => (
        <ParkingLotItem
          key={parkingLot.parkingId}
          parkingLot={parkingLot}
          isDeleteMode={isDeleteMode}
          onSelectParkingLot={handleSelectParkingLot}
        />
      ))}
    </>
  );
};

export default ParkingLotList;
