import { isValidPassword } from '@utils/index';
import { ChangeEvent, useState } from 'react';

const usePassword = () => {
  const [passwords, setPasswords] = useState({
    curPassword: '',
    newPassword: '',
    againPassword: '',
  });

  const [validity, setValidity] = useState({
    isCurPasswordValid: false,
    isNewPasswordValid: false,
    isAgainPasswordValid: false,
  });

  const handlePasswordChange =
    (name: keyof typeof passwords) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setPasswords((prev) => ({ ...prev, [name]: value }));
      setValidity((prev) => ({
        ...prev,
        [`is${name.charAt(0).toUpperCase() + name.slice(1)}Valid`]: isValidPassword(value),
      }));

      if (name === 'newPassword') {
        setValidity((prev) => ({
          ...prev,
          isNewPasswordValid: value !== passwords.curPassword && isValidPassword(value),
        }));
      }

      if (name === 'againPassword') {
        setValidity((prev) => ({
          ...prev,
          isAgainPasswordValid: value === passwords.newPassword && isValidPassword(value),
        }));
      }
    };

  return {
    ...passwords,
    ...validity,
    validateCurPassword: handlePasswordChange('curPassword'),
    validateNewPassword: handlePasswordChange('newPassword'),
    validateAgainPassword: handlePasswordChange('againPassword'),
  };
};

export default usePassword;
