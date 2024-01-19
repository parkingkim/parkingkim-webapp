import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const MobileView = ({ children }: PropsWithChildren) => {
  return <ViewWrapper>{children}</ViewWrapper>;
};

const ViewWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100vh;

  background-color: white;
  box-shadow: 0 5px 15px #eee;
`;

export default MobileView;
