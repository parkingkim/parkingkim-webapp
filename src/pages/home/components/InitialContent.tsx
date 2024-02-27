import { CommonTextStyle } from '@style/CommonTextStyle';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import SearchBar from '@components/SearchBar';
import { Dispatch, SetStateAction } from 'react';
import Text from '@components/Text';
import useAddressStore from '@store/addressStore';
import { CurLocationIcon, ZoomInIcon, ZoomOutIcon } from '@assets/index';
import useGeoLocation from '@hooks/useGeoLocation';
import useMapStore from '@store/mapStore';

interface InitialContentProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const InitialContent = ({ setExpanded }: InitialContentProps) => {
  const { address } = useAddressStore((state) => state);

  const { makeUserMaker } = useGeoLocation();
  const { mapInstance } = useMapStore();

  return (
    <InitialContentContainer>
      <ActionButtonContainer>
        <ZoomButtonContainer>
          <button onClick={() => mapInstance?.zoomIn()}>
            <ZoomInIcon />
          </button>
          <button onClick={() => mapInstance?.zoomOut()}>
            <ZoomOutIcon />
          </button>
        </ZoomButtonContainer>
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
      <UserLocation>
        <Text size="xl" fontStyle="bold">
          현위치
        </Text>
        <Text>{address.jibunAddr}</Text>
        <Text color="gray">{address.roadAddr}</Text>
      </UserLocation>
      <Bar />
      <FavoriteParkingLot>
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
  padding: 22px 20px;
  flex-direction: column;
  align-items: flex-start;

  border-bottom: 7px solid #f6f6f6;

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
  width: 100%;
  height: fit-content;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  min-width: 100%;

  background: #f6f6f6;
`;

const FavoriteParkingLot = styled.div`
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

const FavoriteLocation = styled.div`
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
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 90px;
  top: -94px;
  padding: 20px;
`;

const CurLocationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ZoomButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > :first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #d5d5d5;
    border-radius: 10px 10px 0 0;
  }

  & > :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 12px;
    background-color: #f5f5f5;
    border-radius: 0 0 10px 10px;
  }
`;

export default InitialContent;
