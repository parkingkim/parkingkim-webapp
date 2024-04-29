import { BackIcon } from '@assets/index';
import Text from '@components/Text';
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from 'react';
import { SearchResult } from 'src/types';
import styled from 'styled-components';
import ParkingLotContent from './ParkingLotContent';
import ZoomButtons from './ZoomButtons';
import useMapStore from '@store/mapStore';
import useBottomSheetStore from '@store/bottomSheetStore';
import { GeoLocation } from 'src/types/map';
import ParkingLotsList from './ParkingLotsList';
interface ResultContentProps {
  result: SearchResult;
  setIsResultVisible: Dispatch<SetStateAction<boolean>>;
  location: GeoLocation;
}

const ResultContent = ({ result, setIsResultVisible, location }: ResultContentProps) => {
  const [isSelect, setIsSelect] = useState(false);
  const { setHeight, fillHeight } = useBottomSheetStore();
  const { mapInstance } = useMapStore();

  useEffect(() => {
    setHeight(window.innerHeight * 0.4);
  }, []);

  const goBackToSearch = () => {
    fillHeight();
    setIsResultVisible(false);
  };

  if (isSelect) return <ParkingLotContent result={result} goBack={setIsSelect} />;

  return (
    <ResultContainer>
      <ButtonContainer>
        <BackButton onClick={goBackToSearch}>
          <BackIcon />
        </BackButton>
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
          <ParkingLotsList location={location} setIsSelect={setIsSelect} />
        </Suspense>
      </CardContainer>
    </ResultContainer>
  );
};

const BackButton = styled.button`
  position: absolute;
  bottom: 20vh;
  left: 0;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
`;

const Handle = styled.div`
  width: 45px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin: 0 auto;
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 120px;
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
  top: -120px;
`;

export default ResultContent;
