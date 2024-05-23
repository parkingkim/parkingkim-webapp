import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const duration = 180000;
let start: number | null = null;

interface TimerProps {
  resetCount: number;
}

const Timer = ({ resetCount }: TimerProps) => {
  const timerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    start = 0;
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

    requestAnimationFrame(step);
  }, [resetCount]);

  return <TimerWrapper ref={timerRef}></TimerWrapper>;
};

const TimerWrapper = styled.span`
  margin-top: 5px;
  align-self: start;

  color: #ff40a8;
  font-weight: 600;
`;

export default Timer;
