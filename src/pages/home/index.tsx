import BottomSheet from '@components/BottomSheet';
import { useState } from 'react';
import SearchContent from './components/SearchContent';
import InitialContent from './components/InitialContent';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const reduceHeight = () => {
    setIsExpanded(false);
  };

  const showResult = () => {
    setIsResult(true);
  };

  return (
    <>
      <BottomSheet isExpanded={isExpanded} isResult={isResult}>
        {isExpanded ? (
          <SearchContent reduceHeight={reduceHeight} showResult={showResult} />
        ) : (
          <InitialContent setExpanded={setIsExpanded} />
        )}
      </BottomSheet>
    </>
  );
};

export default Home;
