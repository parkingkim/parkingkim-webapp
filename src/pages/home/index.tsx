import BottomSheet from '@components/BottomSheet';
import { useState } from 'react';
import SearchContent from './components/SearchContent';
import InitialContent from './components/InitialContent';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const reduceHeight = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <BottomSheet isExpanded={isExpanded}>
        {isExpanded ? (
          <SearchContent reduceHeight={reduceHeight} />
        ) : (
          <InitialContent setExpanded={setIsExpanded} />
        )}
      </BottomSheet>
    </>
  );
};

export default Home;
