import { BackIcon } from '@assets/index';
import styled from 'styled-components';

const Header = () => {
  return (
    <IconsContainer>
      <BackIcon role="button" />
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
