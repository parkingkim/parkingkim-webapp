import styled from 'styled-components';
import Text from './Text';
import { Bar } from '@pages/Menu';
import { SearchResult } from 'src/types';

interface SearchItemProps {
  keyword: string;
  searchResult: SearchResult;
}

const SearchItem = ({ keyword, searchResult }: SearchItemProps) => {
  const nameParts = searchResult.name
    .split(new RegExp(`(${keyword})`, 'gi'))
    .map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <HighlightText key={index}>{part}</HighlightText>
      ) : (
        part
      ),
    );

  return (
    <>
      <SearchItemWrapper key={searchResult.name}>
        <Text>{nameParts}</Text>
        <Text size="sm" color="btn-gray">
          {searchResult.newAddressList.newAddress[0].fullAddressRoad}
        </Text>
      </SearchItemWrapper>
      <Bar />
    </>
  );
};

const HighlightText = styled.p`
  color: ${({ theme }) => theme.blue100};
`;

const SearchItemWrapper = styled.li`
  display: flex;
  padding: 18px 20px;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
`;

export default SearchItem;
