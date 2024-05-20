import styled from 'styled-components';
import Backdrop from './Backdrop';
import { ModalPortal } from './ModalPortal';

interface ConfirmProps {
  isShown: boolean;
  title: string;
  option: string;
  onClickOption: () => void;
}

const Confirm = ({ isShown, title, option, onClickOption }: ConfirmProps) => {
  if (!isShown) return;

  return (
    <ModalPortal>
      <Backdrop $isVisible={isShown} />
      <ConfirmContainer role="dialog">
        <h1>{title}</h1>
        <OptionWrapper onClick={onClickOption}>{option}</OptionWrapper>
      </ConfirmContainer>
    </ModalPortal>
  );
};

export const ConfirmContainer = styled.div`
  display: flex;
  width: 50%;
  height: 167px;
  max-width: 297px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 1px rgb(0 0 0 / 25%);

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  & > h1 {
    padding: 0 20px;
    margin-top: 30px;

    font-size: 17px;
    text-align: center;
  }
`;

export const OptionWrapper = styled.button`
  width: 268px;
  height: 50px;
  margin-bottom: 20px;

  background-color: #5b5b5b;
  border-radius: 10px;

  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export default Confirm;
