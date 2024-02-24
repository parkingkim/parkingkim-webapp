import { BackIcon, StarFilledIcon, StarIcon } from '@assets/index';
import styled from 'styled-components';

interface HeaderProps {
  isFavorite: boolean;
}

const Header = ({ isFavorite }: HeaderProps) => {
  return (
    <IconsContainer>
      <BackIcon role="button" />
      {isFavorite ? (
        <StarFilledIcon width={'21px'} height={'21px'} />
      ) : (
        <StarIcon width={'21px'} height={'21px'} />
      )}
    </IconsContainer>
  );
};

const IconsContainer = styled.header`
  display: flex;
  padding: 3rem 2rem 0;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
