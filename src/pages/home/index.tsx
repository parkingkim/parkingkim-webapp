import Map from '@components/Map';
import BottomSheet from '@components/BottomSheet';
import SearchBar from '@components/SearchBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchFilter from '@pages/Home/components/SearchFilter';
import { CommonTextStyle } from '@style/CommonTextStyle';

const Home = () => {
  const navigate = useNavigate();
  const goSearch = () => {
    navigate('/search');
  };

  return (
    <>
      <Map />
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
  padding: 22px 20px;
  flex-direction: column;
  align-items: flex-start;

  border-bottom: 7px solid #f6f6f6;

  color: #120924;
  font-size: 20px;
  font-weight: 700;
  ${CommonTextStyle}

  gap: 15px;

  & > :first-child {
    margin-left: 2px;
  }

  & > :last-child {
    margin-left: 8px;
  }
`;

const Title = styled.h2`
  padding-left: 4px;
  margin: 0;

  color: #120924;
  font-size: 20px;
  font-weight: 700;
  ${CommonTextStyle}
`;

export default Home;
