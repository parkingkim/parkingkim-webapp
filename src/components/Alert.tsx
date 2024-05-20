import styled from 'styled-components';
import { ModalPortal } from './ModalPortal';

interface AlertProps {
  isShown: boolean;
  title: string;
  content: string;
  topOption: string;
  bottomOption: string;
  onClickTopOption: () => void;
  onClickBottomOption: () => void;
}

const Alert = ({
  isShown,
  title,
  content,
  topOption,
  bottomOption,
  onClickBottomOption,
  onClickTopOption,
}: AlertProps) => {
  if (!isShown) return;

  return (
    <ModalPortal>
      <BackDrop />
      <AlertContainer role="dialog">
        <h1>{title}</h1>
        <p>{content}</p>
        <OptionContainer>
          <OptionWrapper $option={'top'} onClick={onClickTopOption}>
            {topOption}
          </OptionWrapper>
          <OptionWrapper $option={'bottom'} onClick={onClickBottomOption}>
            {bottomOption}
          </OptionWrapper>
        </OptionContainer>
      </AlertContainer>
    </ModalPortal>
  );
};

export const BackDrop = styled.div`
  width: 100vw;
  height: 120vh;

  background-color: rgb(0 0 0 / 30%);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  touch-action: none;
`;

export const AlertContainer = styled.div`
  display: flex;
  width: 50%;
  height: 261px;
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
    margin-top: 40px;

    font-size: 18px;
    text-align: center;
  }

  & > p {
    padding: 0 20px;

    color: #ababab;
    text-align: center;
    white-space: pre-wrap;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  padding: 30px;
  flex-direction: column;
  align-items: center;

  background: #e8e8e8;
  border-radius: 10px 10px 0 0;

  line-height: 24px;
  gap: 20px;
  text-align: center;
  white-space: pre-line;

  & > img {
    width: 60px;
    height: 60px;

    color: #eee;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  overflow: hidden;
  flex-direction: column;

  background: white;
  border-radius: 0 0 10px 10px;
`;

export const OptionWrapper = styled.button<{ $option: string }>`
  width: 268px;
  height: 50px;

  background-color: ${(props) => (props.$option === 'top' ? '#0DC5FF' : 'transparent')};
  border-radius: 10px;

  color: ${(props) => (props.$option === 'top' ? 'white' : '#ababab')};
  font-size: 18px;
  font-weight: 600;
`;

export default Alert;
