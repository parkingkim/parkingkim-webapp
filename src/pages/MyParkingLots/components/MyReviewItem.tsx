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
    </ItemContainer>
  );
};

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;

  border-bottom: 2px solid ${({ theme }) => theme.gray5};

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const ItemInfoContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-start;
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default MyReviewItem;
