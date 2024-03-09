import { ChangeEvent, useState } from 'react';

const useSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [password, setPassword] = useState('');
  const [againPassword, setAgainPassword] = useState('');

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changeNumbers = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    numbers[index] = e.target.valueAsNumber;
    setNumbers([...numbers]);
    // moveFocus(index);
  };

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const changeAgainPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setAgainPassword(e.target.value);
  };

  const clearName = () => {
    setName('');
  };

  return {
    name,
    email,
    numbers,
    password,
    againPassword,
    changeName,
    changeEmail,
    changeNumbers,
    changePassword,
    changeAgainPassword,
    clearName,
  };
};

export default useSignup;
