import { PropsWithChildren, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModalPortal } from './ModalPortal';
import Backdrop from './Backdrop';

interface ModalProps {
  isOpen: boolean;
  height: string;
  onClick: () => void;
}

const Modal = ({ isOpen, height, onClick, children }: ModalProps & PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClick();
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  if (!isOpen) return;

  return (
    <ModalPortal>
      <Backdrop onClick={closeModal} $isVisible={isVisible} />
      <Container $height={height} $isVisible={isVisible}>
        {children}
      </Container>
    </ModalPortal>
  );
};

const Container = styled.div<{ $height: string; $isVisible: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ $height, $isVisible }) => ($isVisible ? $height : '0px')};
  max-width: 500px;

  background-color: #fff;

  border-radius: 10px 10px 0 0;

  box-shadow: 0 -1px 5px -1px rgb(0 0 0 / 25%);

  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 10;

  transition: height 0.3s ease-out;
  transform: translateX(-50%);
`;

export default Modal;
