import styled from 'styled-components';

export interface BadgeProps {
  price?: number;
  ETA?: number;
  parkingType?: string;
}

const Badge = ({ price, ETA, parkingType }: BadgeProps) => {
  return (
    <BadgeContainer>
      {price && <BadgeWrapper>예상금액 {price}원</BadgeWrapper>}
      {ETA && <BadgeWrapper>도보 예상시간 {ETA}분</BadgeWrapper>}
      {<BadgeWrapper>{parkingType} 주차장</BadgeWrapper>}
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 21px;
  border-radius: 10px;
  background: #fff;
  padding: 0 9px;
  color: #bdc4cb;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.42px;
`;

export default Badge;
