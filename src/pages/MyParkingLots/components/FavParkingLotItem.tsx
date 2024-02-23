import { FavLotIcon, MoreIcon } from '@assets/index';
import Text from '@components/Text';
import { ParkingLot } from 'src/types';
import styled from 'styled-components';

interface FavParkingLotItemProps {
  parkingLot: ParkingLot;
}

const FavParkingLotItem = ({ parkingLot }: FavParkingLotItemProps) => {
  // TODO: 주소 및 현위치와의 거리 계산
  const distance = 13.8;
  const address = '서울특별시 강남구 테헤란로 427';

  return (
    <ParkingLotContainer>
      <ParkingLotInfoContainer>
        <FavLotIcon />
        <ParkingLotInfoWrapper>
          <Text size="sm">{parkingLot.parkingName}</Text>
          <Text size="xs" color="gray">{`${distance}km | ${address}`}</Text>
        </ParkingLotInfoWrapper>
      </ParkingLotInfoContainer>
      <MoreIcon />
    </ParkingLotContainer>
  );
};

const ParkingLotContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
`;

const ParkingLotInfoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ParkingLotInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export default FavParkingLotItem;
