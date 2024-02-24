import Text from '@components/Text';
import { ParkingLot } from 'src/types';
import styled from 'styled-components';

interface MyReviewItemProps {
  parkingLot: ParkingLot;
}

const MyReviewItem = ({ parkingLot }: MyReviewItemProps) => {
  return (
    <ItemContainer>
      <ItemInfoContainer>
        <ItemInfoWrapper>
          <Text size="sm">{parkingLot.parkingName}</Text>
          <Text size="xs" color="gray">
            2024.02.24
          </Text>
        </ItemInfoWrapper>
        <button>
          <Text fontStyle="regular" size="sm" color="gray">
            삭제
          </Text>
        </button>
      </ItemInfoContainer>
      <Text size="sm">
        주차장 이용요금은 실시간 변동될 수 있습니다. 주차장 이용요금은 실시간 변동될 수 있습니다.
      </Text>
      <ImageWrapper />
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray};
  margin-top: 20px;
`;

export default MyReviewItem;
