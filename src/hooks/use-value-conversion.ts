import {useEffect, useState} from 'react';
import {getConversionResult, getRoundedValue} from '../common/utils';
import {ConverterFormCurrencies, ConverterInputParams, FormFields} from '../const';
import {CurrencyInput, ExchangeRate, InputChangeEventHandler, SelectChangeEventHandler} from '../common/types';

export const useValueConversion: (currentExchangeRate: ExchangeRate) => [CurrencyInput, CurrencyInput, SelectChangeEventHandler, InputChangeEventHandler] = (currentExchangeRate: ExchangeRate) => {
  const [inputs, setInputs] = useState({
    currencyInput: {type: ConverterFormCurrencies[0], amount: 0},
    currencyOutput: {type: ConverterFormCurrencies[1], amount: 0},
  });

  const [inputToChange, setInputToChange] = useState({
    name: FormFields.INPUT,
    value: inputs[FormFields.INPUT].amount,
  });

  const valueChangeHandler: InputChangeEventHandler = (evt) => {
    const {name, value} = evt.target;

    const valueNumber = parseInt(value, 10);
    let checkedValue: number = 0;

    checkedValue = valueNumber > ConverterInputParams.maxValue
      ? ConverterInputParams.maxValue
      : valueNumber;

    setInputs((prevState) => ({
      ...prevState,
      [name]: Object.assign({}, prevState[name], {
        amount: checkedValue === 0 ? '' : getRoundedValue(checkedValue).toString(),
      }),
    }));

    setInputToChange({name: name, value: checkedValue});
  };

  const typeChangeHandler: SelectChangeEventHandler = (evt) => {
    const {name, value} = evt.target;
    const inputAmount = inputs.currencyInput.amount;

    if (value === inputs.currencyInput.type || value === inputs.currencyOutput.type) {
      switch (name) {
        case FormFields.INPUT: {
          setInputs({
            currencyInput: {type: value, amount: inputAmount},
            currencyOutput: {type: value, amount: inputAmount},
          });
          return;
        }

        case FormFields.OUTPUT: {
          setInputs((prevState) => ({
            ...prevState,
            currencyOutput: {type: value, amount: inputAmount},
          }));
          return;
        }
      }
    }

    setInputs((prevState) => ({
      ...prevState,
      [name]: Object.assign({}, prevState[name], {type: value}),
    }));

    setInputToChange({name: FormFields.INPUT, value: inputAmount});
  };

  const valueConversion = (name: string, value: number) => {
    const [result, outputField] = getConversionResult(name, value, currentExchangeRate, inputs);

    setInputs((prevState) => ({
      ...prevState,
      [outputField]: Object.assign({}, prevState[outputField], {amount: result}),
    }));
  };

  useEffect(() => {
    if(currentExchangeRate) {
      valueConversion(inputToChange.name, inputToChange.value);
    }
  }, [inputToChange, currentExchangeRate]);

  return [inputs.currencyInput as CurrencyInput, inputs.currencyOutput as CurrencyInput, typeChangeHandler, valueChangeHandler];
};
