import ParkingLotCard from '@components/ParkingLotCard';
import useGetParkings from '@hooks/api/useGetParkings';
import useDrawMarkers from '@hooks/useDrawMarkers';
import { Dispatch, SetStateAction } from 'react';
import { GeoLocation } from 'src/types/map';

interface ParkingLotsListProps {
  location: GeoLocation;
  setIsSelect: Dispatch<SetStateAction<boolean>>;
}

const ParkingLotsList = ({ location, setIsSelect }: ParkingLotsListProps) => {
  const { data: parkingLots } = useGetParkings(location.lng.toString(), location.lat.toString());

  useDrawMarkers({ parkingLots, location });

  if (parkingLots.length === 0) return <p>주변에 주차장이 없습니다..🥲</p>;

  return (
    <>
      {parkingLots.map((parkingLot) => (
        <ParkingLotCard
          key={parkingLot.parkingId}
          title={parkingLot.parkingName}
          price={parkingLot.estimatedFee}
          ETA={parkingLot.estimatedWalkingTime}
          parkingType={parkingLot.parkingType}
          isFavorite={parkingLot.isFavorite}
          goToResult={setIsSelect}
        />
      ))}
    </>
  );
};

export default ParkingLotsList;
