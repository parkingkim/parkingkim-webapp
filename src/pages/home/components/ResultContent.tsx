import Text from '@components/Text';
import { Suspense, useEffect, useState } from 'react';
import { SearchResult } from 'src/types';
import styled from 'styled-components';
import ParkingLotContent from './ParkingLotContent';
import ZoomButtons from './ZoomButtons';
import useMapStore from '@store/mapStore';
import useBottomSheetStore from '@store/bottomSheetStore';
import { GeoLocation } from 'src/types/map';
import ParkingLotsList from './ParkingLotsList';
import { useNavigating } from '@context/NavigatingContext';
import useAddressStore from '@store/addressStore';
import { NO_PARKING_LOT } from '@constants/index';
interface ResultContentProps {
  result: SearchResult;
  location: GeoLocation;
}

const ResultContent = ({ result, location }: ResultContentProps) => {
  const [walkingTime, setWalkingTime] = useState(0);
  const [selectedParkingLot, setSelectedParkingLot] = useState(NO_PARKING_LOT);
  const { setHeight } = useBottomSheetStore();
  const { mapInstance } = useMapStore();
  const { setStartLocation, setDestination, setIsResultVisible } = useNavigating();
  const { address } = useAddressStore();

  useEffect(() => {
    setHeight(window.innerHeight * 0.4);
    setStartLocation(address.jibunAddr);
    setDestination(result.name);
    setIsResultVisible(true);
  }, []);

  if (selectedParkingLot !== NO_PARKING_LOT)
    return (
      <Suspense fallback={<p>로딩중</p>}>
        <ParkingLotContent
          result={result}
          walkingTime={walkingTime}
          setSelectedParkingLot={setSelectedParkingLot}
          parkingLotId={selectedParkingLot}
        />
      </Suspense>
    );

  return (
    <ResultContainer>
      <ButtonContainer>
        <ZoomButtons mapInstance={mapInstance} />
      </ButtonContainer>
      <Handle />
      <DestinationWrapper>
        <Text fontStyle="bold" size="xl">
          목적지
        </Text>
        <Text>{result.name}</Text>
        <Text color="btn-gray">{result.newAddressList.newAddress[0].fullAddressRoad}</Text>
      </DestinationWrapper>
      <CardContainer>
        <Suspense fallback={<p>로딩중</p>}>
          <ParkingLotsList
            location={location}
            setWalkingTime={setWalkingTime}
            setSelectedParkingLot={setSelectedParkingLot}
          />
        </Suspense>
      </CardContainer>
    </ResultContainer>
  );
};

const Handle = styled.div`
  width: 45px;
  height: 4px;
  margin: 0 auto;

  background-color: #d9d9d9;
  border-radius: 10px;
`;

const CardContainer = styled.section`
  display: flex;
  padding-bottom: 120px;
  flex-direction: column;
  gap: 16px;
`;

const ResultContainer = styled.div`
  height: 100%;
  padding: 20px;
  overflow: scroll;
`;

const DestinationWrapper = styled.div`
  margin-bottom: 30px;

  & > :first-child {
    margin-bottom: 8px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: -100px;
`;

export default ResultContent;
