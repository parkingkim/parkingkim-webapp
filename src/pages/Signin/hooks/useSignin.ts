import { ChangeEvent, useState } from 'react';
import usePostSignin from './usePostSignin';

const useSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate } = usePostSignin();

  const typeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const typePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const enter = async () => {
    mutate({ email, password });
  };

  return {
    email,
    password,
    typeEmail,
    typePassword,
    enter,
  };
};

export default useSignin;
