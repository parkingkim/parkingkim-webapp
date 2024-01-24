import Map from '@components/Map';
import BottomSheet from '@components/BottomSheet';
import SearchBar from '@components/SearchBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchFilter from '@components/SearchFilter';

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
          <Title>목적지 입력</Title>
          <SearchBar isFocused={false} goSearch={goSearch} />
          <SearchFilter />
        </SearchBarWrapper>
      </BottomSheet>
    </>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 22px 20px;

  border-bottom: 7px solid #f6f6f6;

  color: #120924;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;

  gap: 15px;
  & > :first-child {
    margin-left: 2px;
  }

  & > :last-child {
    margin-left: 8px;
  }
`;

const Title = styled.h2`
  margin: 0;
  padding-left: 4px;
  color: #120924;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.6px;
`;

export default Home;
