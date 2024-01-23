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
  width: 100%;

  position: relative;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  height: 47px;
  padding: 0 14px;
  margin: 0 18px;

  background: #f5f5f5;
  border: none;
  border-radius: 9px;

  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  outline: none;

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
