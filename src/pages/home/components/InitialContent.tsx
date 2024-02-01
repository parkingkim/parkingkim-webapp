import { CommonTextStyle } from '@style/CommonTextStyle';
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import SearchBar from '@components/SearchBar';
import { Dispatch, SetStateAction } from 'react';

interface InitialContentProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

const InitialContent = ({ setExpanded }: InitialContentProps) => {
  return (
    <InitialContentContainer>
      <SearchBarWrapper>
        <Title>목적지 입력</Title>
        <SearchBar
          isFocused={false}
          expandHeight={() => {
            setExpanded(true);
          }}
        />
        <SearchFilter />
      </SearchBarWrapper>
      <UserLocation>
        <h2>현위치</h2>
        <h3>부산대학교 정문</h3>
        <p>도로명 주소</p>
      </UserLocation>
      <Bar />
      <FavoriteParkingLot>자주가는 주차장</FavoriteParkingLot>
      <Bar />
      <FavoriteLocation>자주가는 위치 등록</FavoriteLocation>
    </InitialContentContainer>
  );
};

const InitialContentContainer = styled.div``;

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

const Title = styled.h2`
  padding-left: 4px;
  margin: 0;

  color: #120924;
  font-size: 20px;
  font-weight: 700;
  ${CommonTextStyle}
`;

const UserLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
  padding: 20px;
  gap: 6px;

  h2 {
    color: #120924;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.6px;
    margin: 0;
  }

  h3 {
    color: #120924;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    margin: 0;
  }

  p {
    color: #bdc4cb;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    margin: 0;
  }
`;

const Bar = styled.div`
  width: 100%;
  min-width: 100%;
  height: 2px;
  background: #f6f6f6;
`;

const FavoriteParkingLot = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  color: #120924;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.45px;
`;

const FavoriteLocation = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  color: #120924;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.45px;
`;

export default InitialContent;
