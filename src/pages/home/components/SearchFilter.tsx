import { OptionIcon } from '@assets/index';
import styled from 'styled-components';

const SearchFilter = () => {
  return (
    <SearchFilterButton>
      <OptionIcon />
      주차장 조건설정
    </SearchFilterButton>
  );
};

const SearchFilterButton = styled.button`
  display: flex;
  padding: 0;
  align-items: flex-end;

  background: none;
  border: none;

  color: #707070;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  gap: 5px;

  &:hover {
    border: none;
  }

  &:focus {
    outline: none;
  }
`;

export default SearchFilter;
