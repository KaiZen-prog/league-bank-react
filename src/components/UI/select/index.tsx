import React from 'react';
import {
  Select,
} from './select.styled';

interface Props {
  name: string,
  value: string,
  label: string,
  changeHandler: (...args: any[]) => void,
  children: Array<React.ReactElement<any, any>> |React.ReactElement<any, any>
}

const ConverterField: React.FunctionComponent<Props> = (props) => {
  const {name, value, label, changeHandler} = props;

  return (
    <label>
      <Select
        name={name}
        value={value}
        onChange={changeHandler}
      >
        {props.children}
      </Select>
      <span className="visually-hidden">{label}</span>
    </label>
  );
};

ConverterField.displayName = 'ConverterField';
export default ConverterField;
