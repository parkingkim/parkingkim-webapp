import { ChangeEvent, useState } from 'react';

const useSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [password, setPassword] = useState('');
  const [againPassword, setAgainPassword] = useState('');

  const changeNumbers = (index: number) => (value: number) => {
    numbers[index] = value;
    setNumbers([...numbers]);
  };

  const changeValue = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    switch (id) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'againPassword':
        setAgainPassword(e.target.value);
    }
  };

  const clear = (id: string) => () => {
    switch (id) {
      case 'name':
        setName('');
        break;
      case 'email':
        setEmail('');
        break;
      case 'password':
        setPassword('');
        break;
      case 'againPassword':
        setAgainPassword('');
    }
  };

  return {
    name,
    email,
    numbers,
    password,
    againPassword,
    changeValue,
    changeNumbers,
    clear,
  };
};

export default useSignup;
