import {
  BlackParkingIcon,
  BlackWalkingIcon,
  CurLocationIcon,
  DestTwoIcon,
  ParkingCarIcon,
  ParkingWalkIcon,
  TowardIcon,
} from '@assets/index';
import Text from '@components/Text';
import { useNavigating } from '@context/NavigatingContext';
import useGeoLocation from '@hooks/useGeoLocation';
import styled from 'styled-components';

const NavigateResult = () => {
  const {
    startLocation,
    parkingLot,
    destination,
    startToParkingLotTime,
    startToParkingLotDistance,
    parkingLotToDestinationTime,
    parkingLotToDestinationDistance,
  } = useNavigating();
  const { makeUserMaker } = useGeoLocation();

  return (
    <NavigateResultContainer>
      <CurLocationButton onClick={makeUserMaker}>
        <CurLocationIcon />
      </CurLocationButton>
      <TimeContainer>
        <Handle />
        <Text color="blue" fontStyle="bold" size="xl">
          {Math.ceil((startToParkingLotTime + parkingLotToDestinationTime) / 60)}분
        </Text>
        <TimeIndicatorContainer>
          <TimeIndicator>
            <BlackParkingIcon />
            <Text>{Math.ceil(startToParkingLotTime / 60)}분</Text>
          </TimeIndicator>
          <TowardIcon />
          <TimeIndicator>
            <BlackWalkingIcon />
            <Text>{Math.ceil(parkingLotToDestinationTime / 60)}분</Text>
          </TimeIndicator>
        </TimeIndicatorContainer>
      </TimeContainer>
      <ThickBar />
      <PathAndIconContainer>
        <IconContainer>
          <ParkingCarIcon />
          <VerticalBar />
          <ParkingWalkIcon />
          <VerticalPointBar />
          <DestTwoIcon />
        </IconContainer>
        <PathContainer>
          <Text>{startLocation}</Text>
          <Bar />
          <Text color="gray">{`${Math.ceil(startToParkingLotTime / 60)}분 이동, ${(
            startToParkingLotDistance / 1000
          ).toFixed(1)}km`}</Text>
          <Bar />
          <Text>{parkingLot}</Text>
          <Bar />
          <Text color="btn-gray">도보</Text>
          <Text color="gray">{`${Math.ceil(parkingLotToDestinationTime / 60)}분 이동, ${(
            parkingLotToDestinationDistance / 1000
          ).toFixed(1)}km`}</Text>
          <Bar />
          <Text>{destination}</Text>
        </PathContainer>
      </PathAndIconContainer>
    </NavigateResultContainer>
  );
};

const CurLocationButton = styled.button`
  position: absolute;
  top: -70px;
  left: 20px;
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
`;

const VerticalBar = styled.div`
  width: 3px;
  height: 130px;
  background-color: ${({ theme }) => theme.gray};
`;

const VerticalPointBar = styled.div`
  border-left: 3px dashed ${({ theme }) => theme.gray};
  height: 160px;
`;

const NavigateResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  min-width: 100%;
  margin: 20px;

  background: #f6f6f6;
`;

const ThickBar = styled.div`
  width: 100%;
  height: 7px;
  min-width: 100%;

  background: linear-gradient(to bottom, #dcdcdc 0%, #f6f6f6 30%);
`;

const Handle = styled.div`
  width: 45px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin: 0 auto;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 5px;
`;

const TimeIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const TimeIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PathAndIconContainer = styled.div`
  display: flex;
`;

const PathContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px 0 20px 20px;
`;

export default NavigateResult;
