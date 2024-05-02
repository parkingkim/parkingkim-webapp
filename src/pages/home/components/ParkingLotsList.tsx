import ParkingLotCard from '@components/ParkingLotCard';
import useGetParkings from '@hooks/api/useGetParkings';
import useDrawMarkers from '@hooks/useDrawMarkers';
import { Dispatch, SetStateAction } from 'react';
import { GeoLocation } from 'src/types/map';

interface ParkingLotsListProps {
  location: GeoLocation;
  setWalkingTime: Dispatch<SetStateAction<number>>;
  setSelectedParkingLot: Dispatch<SetStateAction<number>>;
}

const ParkingLotsList = ({
  location,
  setWalkingTime,
  setSelectedParkingLot,
}: ParkingLotsListProps) => {
  const { data: parkingLots } = useGetParkings(location.lng.toString(), location.lat.toString());

  useDrawMarkers({ parkingLots, location });

  const selectParkingLot = (parkingLotId: number, walkingTime: number) => {
    setSelectedParkingLot(parkingLotId);
    setWalkingTime(walkingTime);
  };

  if (parkingLots.length === 0) return <p>주변에 주차장이 없습니다..🥲</p>;

  return (
    <>
      {parkingLots.map((parkingLot) => (
        <button
          onClick={() => selectParkingLot(parkingLot.parkingId, parkingLot.estimatedWalkingTime)}
        >
          <ParkingLotCard
            key={parkingLot.parkingId}
            title={parkingLot.parkingName}
            price={parkingLot.estimatedFee}
            walkingTime={parkingLot.estimatedWalkingTime}
            parkingType={parkingLot.parkingType}
            isFavorite={parkingLot.isFavorite}
          />
        </button>
      ))}
    </>
  );
};

export default ParkingLotsList;
