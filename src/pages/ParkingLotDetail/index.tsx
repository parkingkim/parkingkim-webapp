import { BackIcon, StarFilledIcon, StarIcon } from '@assets/index';
import styled from 'styled-components';

const MOCK_PARKING_LOT = {
  name: '부산대학교 주차장',
  isFavorite: true,
  address: '도로명주소',
  imgUrl: 'https://picsum.photos/300/300/',
};

const ParkingLotDetail = () => {
  return (
    <Container>
      <IconsContainer>
        <BackIcon role="button" />
        {MOCK_PARKING_LOT.isFavorite ? (
          <StarFilledIcon width={'21px'} height={'21px'} />
        ) : (
          <StarIcon width={'21px'} height={'21px'} />
        )}
      </IconsContainer>
      <Name>
        <h1>{MOCK_PARKING_LOT.name}</h1>
        <p>{MOCK_PARKING_LOT.address}</p>
        <RouteGuideButton> 경로 안내</RouteGuideButton>
      </Name>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;

  position: relative;
`;

const IconsContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
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
  right: 0;

  font-size: 14px;
  font-weight: bold;
  letter-spacing: -3px;

  &:active {
    border: 0;
    outline: 0;
  }
`;

export default ParkingLotDetail;
