import { BackIcon, LocationIcon, OptionIcon } from '@assets/index';
import SearchBar from '@components/SearchBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <SearchContainer>
      <SearchBarWrapper>
        <BackIcon onClick={goHome} role="button" />
        <SearchBar isFocused={true} />
        <SearchOptionWrapper>
          <SearchFilter>
            <OptionIcon />
            주차장 조건설정
          </SearchFilter>
          <div style={{ width: '1px', height: '24px', background: 'rgba(0, 0, 0, 0.21)' }} />
          <LocationIcon style={{ cursor: 'pointer' }} role="button" />
        </SearchOptionWrapper>
      </SearchBarWrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 14px 20px;
  border-bottom: 7px solid #f6f6f6;

  & > :first-child {
    cursor: pointer;
  }
`;

const SearchOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 12px 10px 0 0;
  gap: 11px;
`;

const SearchFilter = styled.button`
  display: flex;
  align-items: flex-end;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  color: #707070;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.42px;
  -webkit-tap-highlight-color: transparent; // iOS Safari의 터치 시 하이라이트 방지
  gap: 5px;

  &:hover {
    border: none;
  }

  &:focus {
    outline: none;
  }
`;

export default Search;
