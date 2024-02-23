import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const MobileView = ({ children }: PropsWithChildren) => {
  return <ViewWrapper>{children}</ViewWrapper>;
};

const ViewWrapper = styled.section`
  display: flex;
  width: 500px;
  height: 100vh;
  height: 100vh;
  flex-direction: column;

  background-color: white;
  box-shadow: 0 5px 15px #eee;

  @media screen and (width <= 415px) {
    width: 100vw;
  }

  position: relative;

  @media screen and (width >= 300px) and (width <= 468px) {
    width: 100vw;
    height: 100vh;
  }
`;

export default MobileView;
