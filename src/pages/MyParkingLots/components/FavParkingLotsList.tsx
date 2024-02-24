import { ParkingLot } from 'src/types';
import FavParkingLotItem from './FavParkingLotItem';
import Text from '@components/Text';
import { useState } from 'react';
import { BackIcon } from '@assets/index';
import styled from 'styled-components';

interface FavParkingLotsListProps {
  parkingLots: ParkingLot[];
}

const FavParkingLotsList = ({ parkingLots }: FavParkingLotsListProps) => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedParkingLots, setSelectedParkingLots] = useState<string[]>([]);

  const toggleDeleteMode = () => setIsDeleteMode((prev) => !prev);

  const deleteParkingLot = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      alert('삭제되었습니다.');
      // TODO: selectedParkingLots 삭제 요청
      setSelectedParkingLots([]);
    }
  };

  const handleSelectParkingLot = (parkingId: string, isSelected: boolean) => {
    setSelectedParkingLots((prev: string[]) => {
      if (isSelected) {
        return [...prev, parkingId];
      } else {
        return prev.filter((id) => id !== parkingId);
      }
    });
  };

  return (
    <>
      <ParkingLotsListHeader $isDeleteMode={isDeleteMode}>
        <HeaderWrapper>
          {isDeleteMode && <BackIcon onClick={toggleDeleteMode} />}
          <Text fontStyle="bold">즐겨찾는 주차장</Text>
        </HeaderWrapper>
        {isDeleteMode ? (
          <button onClick={deleteParkingLot}>
            <Text color="gray" size="sm">
              선택삭제
            </Text>
          </button>
        ) : (
          <button onClick={toggleDeleteMode}>
            <Text color="gray" size="sm">
              편집
            </Text>
          </button>
        )}
      </ParkingLotsListHeader>
      {parkingLots.map((parkingLot) => (
        <FavParkingLotItem
          key={parkingLot.parkingId}
          parkingLot={parkingLot}
          isDeleteMode={isDeleteMode}
          onSelectParkingLot={handleSelectParkingLot}
        />
      ))}
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ParkingLotsListHeader = styled.header<{ $isDeleteMode: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ $isDeleteMode }) => ($isDeleteMode ? '17px 20px 0 10px' : '25px 20px 10px 20px')};
  background-color: white;
  ${({ $isDeleteMode }) => $isDeleteMode && 'border-bottom: 2px solid #f6f6f6;'};

  button {
    background-color: transparent;
    padding: 4px;
    cursor: pointer;
  }
`;

export default FavParkingLotsList;
