import { BackIcon } from '@assets/index';
import SearchBar from '@components/SearchBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <SearchContainer>
      <BackIcon onClick={goHome} />
      <SearchBar isFocused={true} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default Search;
