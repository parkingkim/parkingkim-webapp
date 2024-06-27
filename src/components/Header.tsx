import { BackIcon } from '@assets/index';
import useNavigatePage from '@hooks/useNavigatePage';
import styled from 'styled-components';

const Header = () => {
  const navigatePage = useNavigatePage();

  return (
    <IconsContainer>
      <BackIcon role="button" onClick={navigatePage('/')} />
    </IconsContainer>
  );
};

const IconsContainer = styled.header`
  display: flex;
  padding: 3rem 1rem 0;
  justify-content: flex-start;
  align-items: center;
`;

export default Header;
