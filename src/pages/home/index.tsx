import BottomSheet from '@components/BottomSheet';
import { useEffect, useState } from 'react';
import SearchContent from './components/SearchContent';
import InitialContent from './components/InitialContent';
import useBottomSheetStore from '@store/bottomSheetStore';
import { useNavigating } from '@context/NavigatingContext';
import styled from 'styled-components';
import { WhiteBackIcon } from '@assets/index';
import Text from '@components/Text';

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toggleHeight, fillHeight } = useBottomSheetStore();
  const {
    isNavigating,
    isResultVisible,
    startLocation,
    destination,
    toggleNavigating,
    setIsResultVisible,
  } = useNavigating();

  useEffect(() => {
    !isExpanded && toggleHeight();
  }, [isExpanded]);

  const cancelNavigate = () => {
    toggleNavigating();
    fillHeight();
  };

  const cancelSearch = () => {
    setIsResultVisible(false);
    fillHeight();
  };

  return (
    <>
      {(isNavigating || isResultVisible) && (
        <NavHeader>
          <WhiteBackIcon onClick={isNavigating ? cancelNavigate : cancelSearch} />
          {isNavigating ? (
            <PathIndicator>
              <Text color="white">{startLocation}</Text>
              <Text color="white">{destination}</Text>
            </PathIndicator>
          ) : (
            <Text color="white" fontStyle="semi-bold" size="lg">
              {destination}
            </Text>
          )}
        </NavHeader>
      )}

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
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  top: 0;
  background-color: ${({ theme }) => theme.blue100};
  padding: 20px;
`;

const PathIndicator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default Home;
