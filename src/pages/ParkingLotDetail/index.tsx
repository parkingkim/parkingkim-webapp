import styled from 'styled-components';
import MainInfo from './components/MainInfo';
import ParkingInfo from './components/ParkingInfo';
import LeftoverParking from './components/LeftoverParking';
import Header from './components/Header';
import Review from './components/Review';

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
      <Header isFavorite={MOCK_PARKING_LOT.isFavorite} />
      <Container>
        <MainInfo
          parkingName={MOCK_PARKING_LOT.parkingName}
          address={MOCK_PARKING_LOT.address}
          imgUrl={MOCK_PARKING_LOT.imgUrl}
          estimatedFee={MOCK_PARKING_LOT.estimatedFee}
          weekdayFeeInfo={MOCK_PARKING_LOT.weekdayFeeInfo}
          estimatedWalkingTime={MOCK_PARKING_LOT.estimatedWalkingTime}
          parkingType={MOCK_PARKING_LOT.parkingType}
        />
        <Line $height="5px" />
        <ParkingInfo parkingType={MOCK_PARKING_LOT.parkingType} tel={MOCK_PARKING_LOT.tel} />
        <Line $height="5px" />
        <LeftoverParking
          currentParkingCount={MOCK_PARKING_LOT.currentParkingCount}
          capacity={MOCK_PARKING_LOT.capacity}
          isElectric={true}
        />
        <Line $height="4px" />
        <Review />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;
  overflow: scroll;

  position: relative;
`;

const Line = styled.div<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};

  background-color: #f6f6f6;
`;

export default ParkingLotDetail;
