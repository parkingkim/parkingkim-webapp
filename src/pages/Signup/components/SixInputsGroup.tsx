import { CheckIcon } from '@assets/index';
import { ChangeEventHandler, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface SixInputsGroupProps {
  id: string;
  label: ReactNode;
  numbers: number[];
  inputRefs: React.RefObject<HTMLInputElement>[];
  canTimerStart: boolean;
  onChange: (index: number) => ChangeEventHandler;
}

let start: number | null = null;
const duration = 180000;

const SixInputsGroup = ({
  id,
  label,
  numbers,
  inputRefs,
  canTimerStart,
  onChange,
}: SixInputsGroupProps) => {
  const timerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = timestamp - start;
      const remaining = Math.max(0, duration - progress);
      const seconds = Math.floor(remaining / 1000);
      const min = Math.floor(seconds / 60);
      const time = min == 0 ? (seconds % 60) + '초' : min + '분 ' + (seconds % 60) + '초';

      if (timerRef.current) timerRef.current.innerHTML = time;

      if (progress < duration) requestAnimationFrame(step);
    };

    if (canTimerStart) requestAnimationFrame(step);
  }, [canTimerStart]);

  const resetTimer = () => {
    start = null;
  };

  return (
    <Group>
      {label}
      <Timer ref={timerRef}></Timer>
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
          />
        ))}
      </Numbers>
      <ResendButton onClick={resetTimer}>
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

const ResendButton = styled.button`
  display: flex;
  margin-top: 18px;
  margin-bottom: 30px;
  align-items: center;
  align-self: start;
  font-weight: 500;
  color: #ababab;
  gap: 5px;

  & > svg > * {
    stroke: #ababab;
  }
`;

const Timer = styled.span`
  margin-top: 5px;
  align-self: start;

  color: #ff40a8;
  font-weight: 600;
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
