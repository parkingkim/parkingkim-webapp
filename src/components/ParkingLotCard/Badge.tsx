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
  width: fit-content;
  height: 21px;
  padding: 0 9px;
  align-items: center;

  background: #fff;
  border-radius: 10px;

  color: #bdc4cb;
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
`;

export default Badge;
