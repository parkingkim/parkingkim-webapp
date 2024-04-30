import { isValidPassword } from '@utils/index';
import { ChangeEvent, useState } from 'react';

const usePassword = () => {
  const [curPassword, setCurPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [againPassword, setAgainPassword] = useState('');
  const [isCurPasswordValid, setIsCurPasswordValid] = useState(false);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);
  const [isAgainPasswordValid, setIsAgainPasswordValid] = useState(false);

  const validateCurPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCurPassword(e.target.value);
    setIsCurPasswordValid(isValidPassword(e.target.value));
  };

  const validateNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    setIsNewPasswordValid(isValidPassword(e.target.value));
  };

  const validateAgainPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setAgainPassword(e.target.value);
    setIsAgainPasswordValid(isValidPassword(e.target.value));
  };

  return {
    curPassword,
    newPassword,
    againPassword,
    validateCurPassword,
    validateNewPassword,
    validateAgainPassword,
    isCurPasswordValid,
    isNewPasswordValid,
    isAgainPasswordValid,
  };
};

export default usePassword;
