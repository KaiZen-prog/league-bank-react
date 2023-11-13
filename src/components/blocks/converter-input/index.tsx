import React from 'react';
import {ConverterInputParamsType} from '../../../common/types';
import {Input} from './converter-input.styled';

interface Props {
  amount: number,
  changeHandler: (...args: any[]) => void,

  params: ConverterInputParamsType,
}

const ConverterInput: React.FunctionComponent<Props> = (props) => {
  const {params, amount, changeHandler} = props;

  return (
    <Input
      id={params.id}
      name={params.name}
      type="number"
      min="0"
      step="any"
      value={amount}
      onChange={changeHandler}
    />
  );
};

ConverterInput.displayName = 'ConverterInput';
export default ConverterInput;
