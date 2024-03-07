import styled from 'styled-components';

interface ToggleButtonProps {
  isOn: boolean;
  disabled?: boolean;
  toggle: () => void;
}

const ToggleButton = ({ isOn, toggle, disabled = false }: ToggleButtonProps) => {
  const clickToggleButton = () => {
    if (disabled) return;

    toggle();
  };

  return (
    <Container $isOn={isOn} onClick={clickToggleButton}>
      <ToggleSwitch $isOn={isOn} />
    </Container>
  );
};

export const Container = styled.button<{ $isOn: boolean }>`
  display: flex;
  width: 55px;
  height: 27px;
  padding: 4px;
  align-items: center;

  background-color: ${({ $isOn }) => ($isOn ? '#d9d9d9' : 'white')};
  border: solid 1px #bdc4cb;
  border-radius: 20px;

  position: relative;
`;

export const ToggleSwitch = styled.span<{ $isOn: boolean }>`
  width: 19px;
  height: 19px;

  background-color: ${({ $isOn }) => ($isOn ? 'white' : '#d9d9d9')};
  border-radius: 50%;

  position: absolute;
  right: ${({ $isOn }) => ($isOn ? '4px' : '28px')};

  transition: all 0.2s ease-in;
`;

export default ToggleButton;
