import { CheckIcon } from '@assets/index';
import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface SixInputsGroupProps {
  id: string;
  label: string;
  numbers: number[];
  inputRefs: React.RefObject<HTMLInputElement>[];
  onChange: (index: number) => ChangeEventHandler;
}

const SixInputsGroup = ({ id, label, numbers, inputRefs, onChange }: SixInputsGroupProps) => {
  return (
    <Group>
      <Label>{label}</Label>
      <Timer>2분13초</Timer>
      <Numbers>
        {[...Array(6)].map((_, index) => (
          <NumberInput
            id={id}
            value={numbers[index]}
            ref={inputRefs[index]}
            type="number"
            maxLength={1}
            onChange={onChange(index)}
          />
        ))}
      </Numbers>
      <ResendButton>
        <CheckIcon />
        재전송
      </ResendButton>
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

const Label = styled.label`
  align-self: start;

  font-size: 24px;
  font-weight: bold;
  text-align: start;
`;

const ResendButton = styled.button`
  display: flex;
  align-items: center;
  align-self: start;
  margin-bottom: 30px;
  gap: 5px;
  color: rgba(0, 0, 0, 0.3);
  & > svg > * {
    stroke: rgba(0, 0, 0, 0.3);
  }
`;

const Timer = styled.span`
  align-self: start;

  margin-top: 5px;
  color: rgba(0, 0, 0, 0.3);
`;

const Numbers = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const NumberInput = styled.input`
  width: 40px;
  font-size: 40px;
  height: 50px;
  text-align: center;

  border: 0;
  border-bottom: 1px solid #120924;
`;

export default SixInputsGroup;
