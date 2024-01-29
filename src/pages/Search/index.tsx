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
          <Partition />
          <LocationIcon style={{ cursor: 'pointer' }} role="button" />
        </SearchOptionWrapper>
      </SearchBarWrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  position: relative;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  padding: 0 20px 14px;
  flex-direction: column;

  border-bottom: 7px solid #f6f6f6;

  & > :first-child {
    cursor: pointer;
  }
`;

const SearchOptionWrapper = styled.div`
  display: flex;
  margin: 12px 10px 0 0;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 11px;
`;

const Partition = styled.div`
  width: 1px;
  height: 24px;

  background: rgb(0 0 0 / 21%);
`;

export default Search;
