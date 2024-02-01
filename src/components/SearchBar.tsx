import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '@assets/index';
import { CommonTextStyle } from '@style/CommonTextStyle';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean;
  expandHeight?: () => void;
}

const SearchBar = ({ expandHeight, isFocused }: SearchBarProps) => {
  return (
    <SearchBarWrapper
      onClick={() => {
        if (!isFocused && expandHeight) expandHeight();
      }}
    >
      {isFocused ? (
        <StyledSearchBar placeholder="목적지 검색" />
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
  width: 100%;
  height: 48px;
  max-width: 400px;
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
