import styled from 'styled-components';
import { SearchIcon } from '@assets/index';
import { CommonTextStyle } from '@style/CommonTextStyle';
import { ChangeEvent } from 'react';

interface SearchBarProps {
  isFocused?: boolean;
  expandHeight?: () => void;
  onChangeSearchKeyword?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ expandHeight, isFocused, onChangeSearchKeyword }: SearchBarProps) => {
  const focusAndExpand = () => {
    if (!isFocused && expandHeight) expandHeight();
  };

  return (
    <SearchBarWrapper onClick={focusAndExpand}>
      {isFocused ? (
        <StyledSearchBar onChange={onChangeSearchKeyword} placeholder="목적지 검색" autoFocus />
      ) : (
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      )}
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 48px;

  background: #f5f5f5;
  border: none;
  border-radius: 9px;

  position: relative;
`;

const StyledSearchBar = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 0 26px;

  background: #f5f5f5;
  border: none;
  border-radius: 9px;

  font-size: 20px;
  font-weight: 600;
  outline: none;

  ${CommonTextStyle}

  &::placeholder {
    color: #b4b4b4;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 20px;
`;

export default SearchBar;
