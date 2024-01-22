import { InputHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '@assets/index';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean;
}

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  height: 47px;
  margin: 0 18px;
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

export default SearchBar;
