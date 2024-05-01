import { BackIcon, LocationIcon } from '@assets/index';
import SearchBar from '@components/SearchBar';
import SearchItem from '@components/SearchItem';
import styled from 'styled-components';

import Text from '@components/Text';
import useSearch from '@pages/Home/hooks/useSearch';
import useAddressStore from '@store/addressStore';
import { LocationButton } from '..';
import { SearchResult } from '@/types';

interface FrequentSearchProps {
  selectedTab: 'home' | 'company';
  goBack: () => void;
}

const FrequentSearch = ({ selectedTab, goBack }: FrequentSearchProps) => {
  const { handleSearchWord, searchResults, searchKeyword } = useSearch();
  const { curAddress, setHomeAddress, setCompanyAddress } = useAddressStore();

  const handleSetAddress = () => {
    selectedTab === 'home'
      ? setHomeAddress(curAddress.roadAddr)
      : setCompanyAddress(curAddress.roadAddr);
    goBack();
  };

  const selectSearchedAddress = (result: SearchResult) => {
    selectedTab === 'home'
      ? setHomeAddress(result.newAddressList.newAddress[0].fullAddressRoad)
      : setCompanyAddress(result.newAddressList.newAddress[0].fullAddressRoad);
    goBack();
  };

  return (
    <SearchContainer>
      <SearchBarWrapper>
        <BackIcon onClick={goBack} role="button" />
        <SearchBar
          isFocused={true}
          onChangeSearchKeyword={handleSearchWord}
          placeholder={selectedTab === 'home' ? '집 위치 검색' : '회사 위치 검색'}
        />
        <LocationButton onClick={handleSetAddress} style={{ marginTop: '20px' }}>
          <LocationIcon />
          <Text color="gray80" size="sm">
            현재 위치로 설정
          </Text>
        </LocationButton>
      </SearchBarWrapper>
      <ThickBar />
      <ResultContainer>
        {searchResults.map((result) => (
          <SearchButton onClick={() => selectSearchedAddress(result)}>
            <SearchItem keyword={searchKeyword} searchResult={result} />
          </SearchButton>
        ))}
      </ResultContainer>
    </SearchContainer>
  );
};

const SearchButton = styled.button`
  width: 100%;
  padding: 0;
`;

const ResultContainer = styled.ul`
  height: calc(100vh - 257px);
  overflow: scroll;
`;

const SearchContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  position: relative;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  padding: 0 13px 14px;
  flex-direction: column;

  & > :first-child {
    cursor: pointer;
  }
`;

const ThickBar = styled.div`
  width: 100%;
  height: 7px;
  min-width: 100%;

  background: linear-gradient(to bottom, #dcdcdc 0%, #f6f6f6 30%);
`;

export default FrequentSearch;
