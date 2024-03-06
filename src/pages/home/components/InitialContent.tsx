import { CommonTextStyle } from '@style/CommonTextStyle';
import styled from 'styled-components';
import SearchBar from '@components/SearchBar';
import { Dispatch, SetStateAction } from 'react';
import Text from '@components/Text';
import SearchFilter from './SearchFilter';

interface InitialContentProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const InitialContent = ({ setExpanded }: InitialContentProps) => {
  return (
    <>
      <SearchBarWrapper>
        <Text fontStyle="bold">목적지 입력</Text>
        <SearchBar
          isFocused={false}
          expandHeight={() => {
            setExpanded(true);
          }}
        />
        <SearchFilter />
      </SearchBarWrapper>
      <UserLocation>
        <Text fontStyle="bold">현위치</Text>
        <Text size="md">부산대학교 정문</Text>
        <Text size="md" color="gray">
          도로명 주소
        </Text>
      </UserLocation>
      <Bar />
      <FavoriteParkingLot>
        <Text size="md">자주가는 주차장</Text>
      </FavoriteParkingLot>
      <Bar />
      <FavoriteLocation>
        <Text size="md">자주가는 위치 등록</Text>
      </FavoriteLocation>
    </>
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

export default InitialContent;
