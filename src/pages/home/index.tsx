import Map from '@components/Map';
import BottomSheet from '@components/BottomSheet';
import SearchBar from '@components/SearchBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  const goSearch = () => {
    navigate('/search');
  };

  return (
    <>
      {/* <Map /> */}
      <BottomSheet>
        <SearchBarWrapper>
          <SearchBar isFocused={false} goSearch={goSearch} />
        </SearchBarWrapper>
      </BottomSheet>
    </>
  );
};

const SearchBarWrapper = styled.div`
  padding-bottom: 45px;
  border-bottom: 7px solid #f6f6f6;
`;

export default Home;
