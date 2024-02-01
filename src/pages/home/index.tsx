import Map from '@components/Map';
import BottomSheet from '@components/BottomSheet';
import { useState } from 'react';
import SearchContent from './components/SearchContent';
import InitialContent from './components/InitialContent';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Map />
      <BottomSheet isExpanded={isExpanded}>
        {isExpanded ? (
          <SearchContent reduceHeight={() => setIsExpanded(false)} />
        ) : (
          <InitialContent setExpanded={setIsExpanded} />
        )}
      </BottomSheet>
    </>
  );
};

export default Home;
