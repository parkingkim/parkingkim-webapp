import {
  BackIcon,
  CashIcon,
  HumanIcon,
  ParkingTypeIcon,
  RunnerIcon,
  StarFilledIcon,
  StarIcon,
} from '@assets/index';
import Review from '@components/Review';
import styled from 'styled-components';

const MOCK_PARKING_LOT = {
  parkingName: '부산대학교 주차장',
  estimatedFee: 3000,
  estimatedWalkingTime: 15,
  parkingType: '공영',
  tel: '02-000-0000',
  isFavorite: true,
  address: '도로명주소',
  imgUrl: 'https://picsum.photos/300/300/',
  weekdayFeeInfo: {
    fee: 1000,
    time: 60,
  },
  currentParkingCount: 165,
  capacity: 275,
};

const ParkingLotDetail = () => {
  return (
    <>
      <IconsContainer>
        <BackIcon role="button" />
        {MOCK_PARKING_LOT.isFavorite ? (
          <StarFilledIcon width={'21px'} height={'21px'} />
        ) : (
          <StarIcon width={'21px'} height={'21px'} />
        )}
      </IconsContainer>
      <Container>
        <MainInfoContainer>
          <Name>
            <h1>{MOCK_PARKING_LOT.parkingName}</h1>
            <p>{MOCK_PARKING_LOT.address}</p>
            <RouteGuideButton> 경로 안내</RouteGuideButton>
          </Name>
          <ParkingLotImage src={MOCK_PARKING_LOT.imgUrl} />
          <p>
            맛꿀마님이 설정한 시간의 예상금액은 총 {MOCK_PARKING_LOT.estimatedFee.toLocaleString()}
            원이에요.
          </p>
          <span>
            <CashIcon /> &nbsp;&nbsp;{MOCK_PARKING_LOT.weekdayFeeInfo.time / 60}시간&nbsp;
            {MOCK_PARKING_LOT.weekdayFeeInfo.fee.toLocaleString()}원
          </span>
          <span>
            <RunnerIcon /> &nbsp;&nbsp;도보 예상시간 {MOCK_PARKING_LOT.estimatedWalkingTime}분
          </span>
          <span>
            <ParkingTypeIcon /> &nbsp;&nbsp;{MOCK_PARKING_LOT.parkingType} 주차장
          </span>
          <strong>*주차장 이용요금은 실시간 변동될 수 있어요.</strong>
        </MainInfoContainer>
        <Line $height="5px" />
        <InfoContainer>
          <h4>주차 정보</h4>
          <InfoGrid>
            <dl>운영시간</dl>
            <dt>매일 08:00~21:00</dt>
            <dl>결제방식</dl>
            <dt>카드전용, 현금전용</dt>
            <dl>주차장 종류</dl>
            <dt> {MOCK_PARKING_LOT.parkingType} 주차장</dt>
            <dl>전화번호</dl>
            <dt> {MOCK_PARKING_LOT.tel}</dt>
          </InfoGrid>
        </InfoContainer>
        <Line $height="5px" />
        <InfoContainer>
          <h4>잔여 주차석</h4>
          <span>
            {MOCK_PARKING_LOT.currentParkingCount} / {MOCK_PARKING_LOT.capacity}
          </span>
          <strong>*x분 전에 업데이트 되었어요.</strong>
        </InfoContainer>
        <Line $height="1px" />
        <InfoContainer>
          <h5>전기차 충전기</h5>
          <InfoGrid>
            <dl>AC단상</dl>
            <dt>3대</dt>
            <dl>DC차데모</dl>
            <dt>1대</dt>
          </InfoGrid>
        </InfoContainer>
        <Line $height="5px" />
        <InfoContainer>
          <h4>리뷰</h4>
          <ReviewButton>리뷰쓰기</ReviewButton>
          <span>
            <HumanIcon /> 25
          </span>
          <Review />
        </InfoContainer>
      </Container>
    </>
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

const ReviewButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  color: #bdc4cb;
`;

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

const Line = styled.div<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};

  background-color: #f6f6f6;
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;
  overflow: scroll;

  position: relative;
`;

const IconsContainer = styled.header`
  display: flex;
  padding: 3rem 2rem 0;
  justify-content: space-between;
  align-items: center;
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

export default ParkingLotDetail;
