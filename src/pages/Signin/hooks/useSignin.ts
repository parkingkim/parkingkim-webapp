import { ChangeEvent, useState } from 'react';

const useSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const typeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const typePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return {
    email,
    password,
    typeEmail,
    typePassword,
  };
};

export default useSignin;
