import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

export const ModalPortal = ({ children }: PropsWithChildren) => {
  const element = document.getElementById('modal');
  return ReactDOM.createPortal(children, element!);
};
