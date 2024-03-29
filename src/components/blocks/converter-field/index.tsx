import React from 'react';
import {ConverterInputParamsType} from '../../../common/types';
import {ConverterInputParams, ConverterFormCurrencies} from '../../../const';
import ConverterInput from '../converter-input';
import CurrencyOptions from '../currency-options';
import Select from '../../UI/select';
import {
  FieldBlock,
  FieldTitle,
  InputWrapper,
} from './converter-field.styled';

interface Props {
  inputParams: ConverterInputParamsType,
  amount: number,
  currency: string
  valueChangeHandler: (...args: any[]) => void,
  typeChangeHandler: (...args: any[]) => void
}

const ConverterField: React.FunctionComponent<Props> = (props) => {
  const {inputParams, amount, currency, valueChangeHandler, typeChangeHandler} = props;
  const {id, name} = inputParams;

  const title = id === ConverterInputParams.input.id
    ? 'У меня есть'
    : 'Хочу приобрести';

  return (
    <FieldBlock>
      <label htmlFor={id}>
        <FieldTitle>{title}</FieldTitle>
      </label>
      <InputWrapper>
        <ConverterInput
          params={inputParams}
          amount={amount}
          changeHandler={valueChangeHandler}
        />
        <Select
          name={name}
          value={currency}
          label={'валюта'}
          changeHandler={typeChangeHandler}
        >
          <CurrencyOptions
            options={ConverterFormCurrencies}
          />
        </Select>
      </InputWrapper>
    </FieldBlock>
  );
};

ConverterField.displayName = 'ConverterField';
export default ConverterField;
