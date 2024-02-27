import { ArrowTopIcon } from '@assets/index';
import { useState } from 'react';
import styled from 'styled-components';

interface SelectBoxProps {
  selectedOption?: string;
  options: string[];
  isCollapsed: boolean;
  isSelected: boolean;
  onClick: () => void;
}

const SelectBox = ({ options, isCollapsed, isSelected, onClick }: SelectBoxProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const select = (index: number) => () => {
    setSelectedOption(options[index]);
    onClick();
  };

  return (
    <>
      <OptionButton $isSelected={isSelected} $isCollapsed={isCollapsed} onClick={onClick}>
        {selectedOption}
        <ArrowTopIcon color="black" />
      </OptionButton>
      <MoreOptionsContainer $isCollapsed={isCollapsed}>
        {options.map((term, index) => (
          <MoreOptionButton key={term} onClick={select(index)}>
            {term}
          </MoreOptionButton>
        ))}
      </MoreOptionsContainer>
    </>
  );
};

const OptionButton = styled.button<{ $isSelected: boolean; $isCollapsed?: boolean }>`
  display: flex;
  width: 100%;
  height: 47px;
  padding: 0 2rem;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;

  background-color: #f5f5f5;
  border: solid 1px #bdc4cb;
  border-radius: ${({ $isCollapsed }) => ($isCollapsed ? '9px 9px 0 0' : '9px')};

  color: ${({ theme, $isSelected }) => ($isSelected ? 'black' : theme.gray)};
  font-size: 14px;
  text-align: start;

  &:focus {
    outline: 0;
  }

  & > svg {
    transform: ${({ $isSelected }) => !$isSelected && 'rotate(180deg)'};

    & > path {
      stroke: #bdc4cb;
    }
  }
`;

const MoreOptionsContainer = styled.div<{ $isCollapsed: boolean }>`
  display: ${({ $isCollapsed }) => ($isCollapsed ? 'flex' : 'none')};
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
