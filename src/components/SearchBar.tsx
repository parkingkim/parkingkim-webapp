import { InputHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '@assets/index';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean;
}

const SearchBar = ({ isFocused }: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState(isFocused);
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    isExpanded ? setPlaceholder('목적지 검색') : setPlaceholder('');
  }, [isExpanded]);

  const expandSearchBar = () => {
    setIsExpanded(true);
  };

  return (
    <SearchBarWrapper>
      {!isExpanded && (
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      )}
      <StyledSearchBar placeholder={placeholder} onFocus={expandSearchBar} />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  max-width: 420px;
  height: 48px;
  padding: 0 14px;
  border: none;
  border-radius: 9px;
  background: #f5f5f5;
  outline: none;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.6px;

  &::placeholder {
    color: #b4b4b4;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 32px;
`;

export default SearchBar;
