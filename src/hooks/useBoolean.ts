import { useCallback, useState } from 'react';

export interface UseBoolean {
  value: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
}

const useBoolean = (initialValue = false): UseBoolean => {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return { value, on, off, toggle };
};

export default useBoolean;
