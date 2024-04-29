import { ParkingParkIcon, ParkingPriceIcon, ParkingWalkIcon } from '@assets/index';
import styled from 'styled-components';

export interface BadgeProps {
  price?: number;
  walkingTime?: number;
  parkingType?: string;
}

const Badge = ({ price, walkingTime, parkingType }: BadgeProps) => {
  return (
    <BadgeContainer>
      {
        <BadgeWrapper>
          <ParkingPriceIcon />
          예상금액 {price}원
        </BadgeWrapper>
      }
      {walkingTime && (
        <BadgeWrapper>
          <ParkingWalkIcon />
          도보 예상시간 {walkingTime}분
        </BadgeWrapper>
      )}
      {
        <BadgeWrapper>
          <ParkingParkIcon />
          {parkingType} 주차장
        </BadgeWrapper>
      }
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
  align-items: center;

  background: #fff;
  border-radius: 10px;

  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
`;

export default Badge;
