import BottomSheet from '@components/BottomSheet';
import { useEffect, useState } from 'react';
import SearchContent from './components/SearchContent';
import InitialContent from './components/InitialContent';
import useBottomSheetStore from '@store/bottomSheetStore';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toggleHeight } = useBottomSheetStore();

  useEffect(() => {
    !isExpanded && toggleHeight();
  }, [isExpanded]);

  return (
    <>
      <BottomSheet>
        {isExpanded ? (
          <SearchContent setIsExpanded={setIsExpanded} />
        ) : (
          <InitialContent setExpanded={setIsExpanded} />
        )}
      </BottomSheet>
    </>
  );
};

export default Home;
