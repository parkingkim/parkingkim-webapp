import { CommonTextStyle } from '@style/CommonTextStyle';
import styled from 'styled-components';
import SearchBar from '@components/SearchBar';
import { Dispatch, SetStateAction } from 'react';
import Text from '@components/Text';
import useAddressStore from '@store/addressStore';
import { CurLocationIcon } from '@assets/index';
import useGeoLocation from '@hooks/useGeoLocation';
import useMapStore from '@store/mapStore';
import SearchFilter from './SearchFilter';
import { useNavigate } from 'react-router-dom';
import ZoomButtons from './ZoomButtons';

interface InitialContentProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const InitialContent = ({ setExpanded }: InitialContentProps) => {
  const { address } = useAddressStore((state) => state);
  const navigate = useNavigate();

  const { makeUserMaker } = useGeoLocation();
  const { mapInstance } = useMapStore();

  const goToMyParkingLots = () => navigate('/my-parking-lots');

  return (
    <InitialContentContainer>
      <ActionButtonContainer>
        <ZoomButtons mapInstance={mapInstance} />
        <CurLocationButton onClick={makeUserMaker}>
          <CurLocationIcon />
        </CurLocationButton>
      </ActionButtonContainer>
      <SearchBarWrapper>
        <Text size="xl" fontStyle="bold">
          목적지 입력
        </Text>
        <SearchBar
          isFocused={false}
          expandHeight={() => {
            setExpanded(true);
          }}
        />
        <SearchFilter />
      </SearchBarWrapper>
      <ThickBar />
      <UserLocation>
        <Text size="xl" fontStyle="bold">
          현위치
        </Text>
        <Text>{address.jibunAddr}</Text>
        <Text color="gray">{address.roadAddr}</Text>
      </UserLocation>
      <Bar />
      <FavoriteParkingLot onClick={goToMyParkingLots}>
        <Text>자주가는 주차장</Text>
      </FavoriteParkingLot>
      <Bar />
      <FavoriteLocation>
        <Text>자주가는 위치 등록</Text>
      </FavoriteLocation>
    </InitialContentContainer>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;

  color: #120924;
  font-size: 20px;
  font-weight: 700;
  ${CommonTextStyle}

  gap: 15px;

  & > :first-child {
    margin-left: 2px;
  }

  & > :last-child {
    margin-left: 8px;
  }
`;

const UserLocation = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
`;

const ThickBar = styled.div`
  width: 100%;
  height: 7px;
  min-width: 100%;

  background: linear-gradient(to bottom, #dcdcdc 0%, #f6f6f6 30%);
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  min-width: 100%;

  background: #f6f6f6;
`;

const FavoriteParkingLot = styled.button`
  display: flex;
  padding: 20px;
  justify-content: flex-start;

  color: #120924;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.45px;
`;

const FavoriteLocation = styled.button`
  display: flex;
  padding: 20px;
  justify-content: flex-start;

  color: #120924;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.45px;
`;

const InitialContentContainer = styled.div`
  position: relative;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-end;

  position: absolute;
  top: -94px;
`;

const CurLocationButton = styled.button`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 25%);
`;

export default InitialContent;
