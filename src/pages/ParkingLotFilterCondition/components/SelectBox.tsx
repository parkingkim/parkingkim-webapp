import { ArrowTopIcon } from '@assets/index';
import useBoolean from '@hooks/useBoolean';
import styled from 'styled-components';

interface SelectBoxProps {
  value: string;
  options: string[];
  disabled?: boolean;
  onChange?: (index: number) => void;
}

const SelectBox = ({ value, options, disabled, onChange }: SelectBoxProps) => {
  const isOpen = useBoolean();

  const select = (index: number) => () => {
    onChange?.(index);
    isOpen.off();
  };

  return (
    <>
      <OptionButton disabled={disabled} onClick={isOpen.toggle} $isOpen={isOpen.value}>
        {value}
        <ArrowTopIcon />
      </OptionButton>
      <MoreOptionsContainer $isOpen={isOpen.value}>
        {options.map((term, index) => (
          <MoreOptionButton key={term} onClick={select(index)}>
            {term}
          </MoreOptionButton>
        ))}
      </MoreOptionsContainer>
    </>
  );
};

const OptionButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  width: 100%;
  height: 47px;
  padding: 0 2rem;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;

  background-color: #f5f5f5;
  border: solid 1px #bdc4cb;
  border-radius: ${({ $isOpen }) => ($isOpen ? '9px 9px 0 0' : '9px')};

  font-size: 14px;
  text-align: start;

  &:disabled {
    color: #bdc4cb;
  }

  & > svg {
    transform: ${({ $isOpen }) => !$isOpen && 'rotate(180deg)'};

    & > path {
      stroke: #bdc4cb;
    }
  }
`;

const MoreOptionsContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  box-sizing: border-box;

  width: 100%;
  max-height: 190px;
  overflow: scroll;
  flex-direction: column;

  border: solid 1px #bdc4cb;
  border-radius: 0 0 9px 9px;
  border-top: 0;
`;

const MoreOptionButton = styled.button`
  width: 100%;
  min-height: 55px;
  padding: 0 2rem;

  background: '#f5f5f5';
  border: 0;
  border-radius: 0;

  color: ${({ theme }) => theme.gray};
  font-size: 14px;
  font-weight: bold;
  text-align: start;

  &:focus {
    outline: 0;
  }
`;

export default SelectBox;
