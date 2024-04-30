import BottomSheet from '@components/BottomSheet';
import { useEffect, useState } from 'react';
import SearchContent from './components/SearchContent';
import InitialContent from './components/InitialContent';
import useBottomSheetStore from '@store/bottomSheetStore';
import { useNavigating } from '@context/NavigatingContext';
import styled from 'styled-components';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toggleHeight } = useBottomSheetStore();
  const { isNavigating, startLocation, parkingLot, destination } = useNavigating();

  useEffect(() => {
    !isExpanded && toggleHeight();
  }, [isExpanded]);

  return (
    <>
      {isNavigating && <NavHeader>{`${startLocation} ${parkingLot} ${destination}`}</NavHeader>}
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

const NavHeader = styled.header`
  position: absolute;
  top: 0;
`;

export default Home;
