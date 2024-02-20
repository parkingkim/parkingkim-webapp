import styled from 'styled-components';

interface ParkingInfoProps {
  parkingType: string;
  tel: string;
}

const ParkingInfo = ({ parkingType, tel }: ParkingInfoProps) => {
  return (
    <InfoContainer>
      <h4>주차 정보</h4>
      <InfoGrid>
        <dl>운영시간</dl>
        <dt>매일 08:00~21:00</dt>
        <dl>결제방식</dl>
        <dt>카드전용, 현금전용</dt>
        <dl>주차장 종류</dl>
        <dt> {parkingType} 주차장</dt>
        <dl>전화번호</dl>
        <dt> {tel}</dt>
      </InfoGrid>
    </InfoContainer>
  );
};

const InfoContainer = styled.article`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  text-align: start;
  gap: 5px;

  position: relative;

  & > h4 {
    margin: 0.5rem 0;

    font-size: 16px;
    font-weight: bold;
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

export default ParkingInfo;
