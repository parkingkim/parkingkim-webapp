import { OptionIcon } from '@assets/index';
import Text from '@components/Text';
import styled from 'styled-components';

const SearchFilter = () => {
  return (
    <SearchFilterButton>
      <OptionIcon />
      <Text color="btn-gray">주차장 조건설정</Text>
    </SearchFilterButton>
  );
};

const SearchFilterButton = styled.button`
  display: flex;
  padding: 0;
  align-items: flex-end;

  background: none;
  border: none;

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  gap: 5px;

  p {
    font-weight: 500;
  }

  &:hover {
    border: none;
  }

  &:focus {
    outline: none;
  }
`;

export default SearchFilter;
