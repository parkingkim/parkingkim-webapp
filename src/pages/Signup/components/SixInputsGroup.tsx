import { ChangeEventHandler, KeyboardEventHandler, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface SixInputsGroupProps {
  id: string;
  label: ReactNode;
  numbers: number[];
  inputRefs: React.RefObject<HTMLInputElement>[];
  onChange: (index: number) => ChangeEventHandler;
  onKeyDown: (index: number) => KeyboardEventHandler<HTMLInputElement>;
}

const SixInputsGroup = ({
  id,
  label,
  numbers,
  inputRefs,
  onChange,
  onKeyDown,
  children,
}: SixInputsGroupProps & PropsWithChildren) => {
  return (
    <Group>
      {label}
      {children}
      <Numbers>
        {[...Array(6)].map((_, index) => (
          <NumberInput
            id={id}
            key={index + 1}
            value={numbers[index]}
            ref={inputRefs[index]}
            type="number"
            maxLength={1}
            onChange={onChange(index)}
            onKeyDown={onKeyDown(index)}
          />
        ))}
      </Numbers>
    </Group>
  );
};

const Group = styled.section`
  display: flex !important;
  box-sizing: border-box;

  padding: 0 2rem;
  margin-top: 130px;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const Numbers = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  gap: 10px;
`;

const NumberInput = styled.input`
  width: 20%;
  height: 50px;
  min-width: 45px;

  border: 0;
  border-radius: 0;
  border-bottom: 2px solid #ababab;

  font-size: 40px;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &:focus {
    border-color: #2e2e2e;
  }
`;

export default SixInputsGroup;
