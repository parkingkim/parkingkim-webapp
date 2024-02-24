import { CashIcon, ParkingTypeIcon, RunnerIcon } from '@assets/index';
import styled from 'styled-components';

interface MainInfoProps {
  parkingName: string;
  address: string;
  imgUrl: string;
  estimatedFee: number;
  weekdayFeeInfo: {
    fee: number;
    time: number;
  };
  estimatedWalkingTime: number;
  parkingType: string;
}

const MainInfo = ({
  parkingName,
  address,
  imgUrl,
  estimatedFee,
  weekdayFeeInfo,
  estimatedWalkingTime,
  parkingType,
}: MainInfoProps) => {
  return (
    <MainInfoContainer>
      <Name>
        <h1>{parkingName}</h1>
        <p>{address}</p>
        <RouteGuideButton> 경로 안내</RouteGuideButton>
      </Name>
      <ParkingLotImage src={imgUrl} />
      <p>
        맛꿀마님이 설정한 시간의 예상금액은 총 {estimatedFee.toLocaleString()}
        원이에요.
      </p>
      <span>
        <CashIcon /> &nbsp;&nbsp;{weekdayFeeInfo.time / 60}시간&nbsp;
        {weekdayFeeInfo.fee.toLocaleString()}원
      </span>
      <span>
        <RunnerIcon /> &nbsp;&nbsp;도보 예상시간 {estimatedWalkingTime}분
      </span>
      <span>
        <ParkingTypeIcon /> &nbsp;&nbsp;{parkingType} 주차장
      </span>
      <strong>*주차장 이용요금은 실시간 변동될 수 있어요.</strong>
    </MainInfoContainer>
  );
};

const MainInfoContainer = styled.article`
  display: flex;
  padding: 0 2rem;
  margin-top: 15px;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  position: relative;
  gap: 4px;

  & > strong {
    margin: 7px 0 22px;

    color: #bdc4cb;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 7px;

  & > h1 {
    color: #120924;
    font-size: 20px;
    font-weight: bold;
  }

  & > p {
    color: #bdc4cb;
    font-size: 16px;
  }
`;

const RouteGuideButton = styled.button`
  width: 82px;
  height: 32px;
  padding: 0;

  background-color: #f5f5f5;
  border: 0;
  border-radius: 10px;

  position: absolute;
  top: -3px;
  right: 2rem;

  font-size: 14px;
  font-weight: bold;
`;

const ParkingLotImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin: 20px 0;
`;

export default MainInfo;
