import styled from 'styled-components';

const Backdrop = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  height: 100vh;
  max-width: 500px;

  background-color: ${({ $isVisible }) => ($isVisible ? '#222' : 'transparent')};

  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  z-index: 1;
  opacity: 0.2;

  transition: background-color 0.3s ease-out;
  transform: translateX(-50%);
`;

export default Backdrop;
