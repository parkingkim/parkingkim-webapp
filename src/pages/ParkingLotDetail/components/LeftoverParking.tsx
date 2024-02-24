import styled from 'styled-components';

interface LeftoverParkingProps {
  currentParkingCount: number;
  capacity: number;
  isElectric: boolean;
}

const LeftoverParking = ({ currentParkingCount, capacity, isElectric }: LeftoverParkingProps) => {
  return (
    <>
      <InfoContainer>
        <h4>잔여 주차석</h4>
        <span>
          {currentParkingCount} / {capacity}
        </span>
        <strong>*x분 전에 업데이트 되었어요.</strong>
      </InfoContainer>
      {isElectric && (
        <InfoContainer>
          <h5>전기차 충전기</h5>
          <InfoGrid>
            <dl>AC단상</dl>
            <dt>3대</dt>
            <dl>DC차데모</dl>
            <dt>1대</dt>
          </InfoGrid>
        </InfoContainer>
      )}
    </>
  );
};

const InfoContainer = styled.article`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  text-align: start;
  gap: 5px;

  border-bottom: 1px solid #f6f6f6;

  position: relative;

  & > h4 {
    font-size: 16px;
  }

  & > h5 {
    font-size: 14px;
  }

  & > span {
    color: #bdc4cb;
  }

  & > strong {
    margin: 7px 0 10px;

    color: #bdc4cb;
    font-size: 14px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 120px);
  row-gap: 5px;

  & > dl {
    text-align: start;

    color: #bdc4cb;
  }

  & > dt {
    text-align: start;

    color: #120924;
  }
`;

export default LeftoverParking;
