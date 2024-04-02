import styled from 'styled-components';
import Text from './Text';
import { Bar } from '@pages/Menu';
import { SearchResult } from 'src/types';
import highlightKeyword from '@utils/highlightKeyword';

interface SearchItemProps {
  keyword: string;
  searchResult: SearchResult;
}

const SearchItem = ({ keyword, searchResult }: SearchItemProps) => {
  return (
    <>
      <SearchItemWrapper key={searchResult.name}>
        <Text>{highlightKeyword(searchResult.name, keyword)}</Text>
        <Text size="sm" color="btn-gray">
          {searchResult.newAddressList.newAddress[0].fullAddressRoad}
        </Text>
      </SearchItemWrapper>
      <Bar />
    </>
  );
};

const SearchItemWrapper = styled.li`
  display: flex;
  padding: 18px 20px;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
`;

export default SearchItem;
