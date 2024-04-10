import { REGEX } from '@constants/index';

export const isValidName = (name: string) => REGEX.name.test(name);

export const isValidEmail = (email: string) => REGEX.email.test(email);

export const isValidNumbers = (numbers: number[]) => {
  console.log(numbers);

  return numbers.every((x: number) => REGEX.number.test(x.toString())) && numbers.length === 6;
};

export const isValidPassword = (password: string) =>
  password.length > 7 && REGEX.password.test(password);

export const isValidAgainPassword = (againPassword: string, password: string) =>
  againPassword === password && isValidPassword(againPassword);
