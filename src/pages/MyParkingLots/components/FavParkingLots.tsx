import { ParkingLot } from 'src/types';
import Text from '@components/Text';
import { useEffect, useState } from 'react';
import { BackIcon, CloseIcon } from '@assets/index';
import styled from 'styled-components';
import ParkingLotList from './ParkingLotList';
import { useNavigate } from 'react-router-dom';

interface FavParkingLotsListProps {
  parkingLots: ParkingLot[];
}

const FavParkingLots = ({ parkingLots }: FavParkingLotsListProps) => {
  const navigate = useNavigate();
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedParkingLots, setSelectedParkingLots] = useState<string[]>([]);

  const toggleDeleteMode = () => {
    setIsDeleteMode((prev) => !prev);
    setSelectedParkingLots([]);
  };
  const goToMyParkingLots = () => navigate('/my-parking-lots');

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

  useEffect(() => {
    console.log(selectedParkingLots);
  }, [selectedParkingLots]);

  return (
    <>
      <ParkingLotsListHeader $isDeleteMode={isDeleteMode}>
        <HeaderContainer>
          <BackButton onClick={isDeleteMode ? toggleDeleteMode : goToMyParkingLots}>
            {isDeleteMode ? <CloseIcon /> : <BackIcon />}
          </BackButton>
          <HeaderWrapper>
            <HeaderActionWrapper>
              <Text size="xl" fontStyle="bold">
                즐겨찾는 주차장
              </Text>
            </HeaderActionWrapper>
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
          </HeaderWrapper>
        </HeaderContainer>
      </ParkingLotsListHeader>
      <ParkingLotList
        parkingLots={parkingLots}
        isDeleteMode={isDeleteMode}
        handleSelectParkingLot={handleSelectParkingLot}
      />
    </>
  );
};

const HeaderActionWrapper = styled.div`
  display: flex;
  height: 42px;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  svg {
    padding-left: 20px;
    cursor: pointer;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 44px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParkingLotsListHeader = styled.header<{ $isDeleteMode: boolean }>`
  box-sizing: border-box;
  padding: 0 20px;

  background-color: white;

  & > :last-child {
    padding: 4px;

    background-color: transparent;
    cursor: pointer;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 20px;
`;

export default FavParkingLots;
