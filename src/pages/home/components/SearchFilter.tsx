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

export default SearchFilter;
