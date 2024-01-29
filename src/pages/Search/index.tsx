import { BackIcon, LocationIcon } from '@assets/index';
import SearchBar from '@components/SearchBar';
import SearchFilter from '@pages/Home/components/SearchFilter';
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
          <SearchFilter />
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

export default Search;
