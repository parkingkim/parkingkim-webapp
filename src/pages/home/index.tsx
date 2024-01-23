import Map from '@components/Map';
import BottomSheet from '@components/BottomSheet';
import SearchBar from '@components/SearchBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const goSearch = () => {
    navigate('/search');
  };

  return (
    <>
      <Map />
      <BottomSheet>
        <SearchBar isFocused={false} goSearch={goSearch} />
      </BottomSheet>
    </>
  );
};

export default Home;
