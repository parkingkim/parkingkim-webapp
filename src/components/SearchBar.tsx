import { InputHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '@assets/index';
import { CommonTextStyle } from '@style/CommonTextStyle';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean;
  goSearch?: () => void;
}

const SearchBar = ({ goSearch, isFocused }: SearchBarProps) => {
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    isFocused ? setPlaceholder('목적지 검색') : setPlaceholder('');
  }, [isFocused]);

  return (
    <SearchBarWrapper>
      {!isFocused && (
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      )}
      <StyledSearchBar placeholder={placeholder} onClick={goSearch} />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  width: 100%;

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
