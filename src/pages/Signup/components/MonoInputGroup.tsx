import { CloseIcon } from '@assets/index';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface MonoInputGroup {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  clear: (id: string) => MouseEventHandler;
  onChange: (id: string) => ChangeEventHandler;
}

const MonoInputGroup = ({
  id,
  label,
  type,
  value,
  clear,
  onChange,
  placeholder,
}: MonoInputGroup) => {
  return (
    <Group>
      <Label>{label}</Label>
      <MonoInput
        id={id}
        type={type}
        value={value}
        onChange={onChange(id)}
        placeholder={placeholder}
      />
      {value.length > 0 && (
        <InputCloseContainer onClick={clear(id)}>
          <CloseIcon />
        </InputCloseContainer>
      )}
    </Group>
  );
};

const Group = styled.section`
  display: flex !important;
  box-sizing: border-box;
  padding: 0 2rem;
  margin-top: 130px;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const Label = styled.label`
  align-self: start;
  white-space: pre-line;

  font-size: 24px;
  font-weight: bold;
  text-align: start;
`;

const MonoInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;

  margin-top: 30px;

  border: 0;
  border-bottom: 1px solid #120924;

  font-size: 18px;

  &::placeholder {
    color: #bdc4cb;
    font-size: 18px;
  }
`;

const InputCloseContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 11px;
  z-index: 1;
  cursor: pointer;

  & > svg > * {
    stroke: #120924;
    opacity: 0.5;
  }
`;

export default MonoInputGroup;
