import styled from 'styled-components';
import Text from './Text';

interface SearchItemProps {
  name: string;
  address: string;
}

const SearchItem = ({ name, address }: SearchItemProps) => {
  return (
    <SearchItemWrapper key={name}>
      <Text>{name}</Text>
      <Text size="sm" color="btn-gray">
        {address}
      </Text>
    </SearchItemWrapper>
  );
};

const SearchItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 20px;
`;

export default SearchItem;
