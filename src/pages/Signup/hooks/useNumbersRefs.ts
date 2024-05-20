import { createRef } from 'react';

const useNumbersRefs = () => {
  const inputRefs = Array.from({ length: 6 }).map(createRef<HTMLInputElement>);

  const moveFocus = (index: number) => {
    if (document.activeElement === inputRefs[index].current) {
      inputRefs[index + 1].current!.focus();
    }
  };

  const prevFocus = (index: number) => {
    if (document.activeElement === inputRefs[index].current) {
      inputRefs[index - 1].current!.focus();
    }
  };

  return { inputRefs, moveFocus, prevFocus } as const;
};

export default useNumbersRefs;
