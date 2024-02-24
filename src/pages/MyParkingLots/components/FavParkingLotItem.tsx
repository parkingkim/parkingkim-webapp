import { FavLotIcon, MoreIcon } from '@assets/index';
import Text from '@components/Text';
import { ChangeEvent, useEffect, useState } from 'react';
import { ParkingLot } from 'src/types';
import styled from 'styled-components';

interface FavParkingLotItemProps {
  parkingLot: ParkingLot;
  isDeleteMode?: boolean;
  onSelectParkingLot: (parkingId: string, isSelected: boolean) => void;
}

const FavParkingLotItem = ({
  parkingLot,
  isDeleteMode = false,
  onSelectParkingLot,
}: FavParkingLotItemProps) => {
  const [isSelected, setIsSelected] = useState(false);
  // TODO: 주소 및 현위치와의 거리 계산
  const distance = 13.8;
  const address = '서울특별시 강남구 테헤란로 427';

  useEffect(() => {
    if (!isDeleteMode) {
      setIsSelected(false);
    }
  }, [isDeleteMode]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSelected(event.target.checked);
    onSelectParkingLot(parkingLot.parkingId, event.target.checked);
  };

  return (
    <ParkingLotContainer>
      <ParkingLotInfoContainer>
        {isDeleteMode && (
          <input type="checkbox" checked={isSelected} onChange={handleCheckboxChange} />
        )}
        <FavLotIcon />
        <ParkingLotInfoWrapper>
          <Text size="sm">{parkingLot.parkingName}</Text>
          <Text size="xs" color="gray">{`${distance}km | ${address}`}</Text>
        </ParkingLotInfoWrapper>
      </ParkingLotInfoContainer>
      {!isDeleteMode && <MoreIcon />}
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
