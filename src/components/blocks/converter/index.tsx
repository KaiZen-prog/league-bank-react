import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {FormSubmitEventHandler, InputChangeEventHandler, SelectChangeEventHandler} from '../../../common/types';
import Calendar from '../calendar';
import {Currencies, FLOAT_COEFFICIENT, FormFields} from '../../../const';
import {loadExchangeRate} from '../../../store/actions/api-actions';
import moment from 'moment';
import {ActionType} from '../../../store/actions/converter';
import RenderLoader from '../render-loader';
import {
  ConverterBlock,
  Header,
  Form,
  FieldWrapper,
  Field,
  FieldTitle,
  InputWrapper,
  Input,
  Select,
  Button
} from './converter.styled';

const Converter: React.FunctionComponent = () => {
  const currentDate = useAppSelector((store) => store.converter.currentDate);
  const exchangeRates = useAppSelector((store) => store.converter.exchangeRates);
  let currentExchangeRate = exchangeRates[currentDate];

  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    currencyInput: {type: Currencies.RUB, amount: 0},
    currencyOutput: {type: Currencies.USD, amount: 0},
  });

  const [inputToChange, setInputToChange] = useState({
    name: FormFields.INPUT,
    value: inputs[FormFields.INPUT].amount,
  });

  const {currencyInput, currencyOutput} = inputs;

  let entryField = '';
  let outputField = '';

  useEffect(() => {
    if(!currentExchangeRate) {
      loadExchangeRate(currentDate, dispatch);
    }
  }, [[currentDate]]);

  useEffect(() => {
    if(currentExchangeRate) {
      valueConversion(inputToChange.name, inputToChange.value);
    }
  }, [inputToChange, currentExchangeRate]);

  const conversionToUSD = (name: string, value: number) => {
    const divider = currentExchangeRate[inputs[name].type];
    return divider === 0 ? 0 : Math.floor((value / divider) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
  };

  const conversionFromUSD = (name: string, value: number) =>
    Math.floor(value * currentExchangeRate[inputs[name].type] * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;

  function valueConversion(name: string, value: number) {
    if (name === FormFields.INPUT) {
      entryField = FormFields.INPUT;
      outputField = FormFields.OUTPUT;
    } else {
      entryField = FormFields.OUTPUT;
      outputField = FormFields.INPUT;
    }

    const convertedToUSD = conversionToUSD(entryField, value);
    const result = conversionFromUSD(outputField, convertedToUSD);

    setInputs((prevState) => ({
      ...prevState,
      [outputField]: Object.assign({}, prevState[outputField], {amount: result}),
    }));
  }

  const valueChangeHandler: InputChangeEventHandler = (evt) => {
    const {name, value} = evt.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: Object.assign({}, prevState[name], {
        amount: value === '' ? '' : (Math.floor(parseInt(value) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT).toString(),
      }),
    }));

    setInputToChange({name: name, value: value});
  };

  const typeChangeHandler: SelectChangeEventHandler = (evt) => {
    const {name, value} = evt.target;
    const inputAmount = currencyInput.amount;

    if (value === currencyInput.type || value === currencyOutput.type) {
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

  const submitHandler: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();

    dispatch({type: ActionType.ADD_CONVERSION, payload: {
      id: uuidv4(),
      date: moment(currentDate).format('DD.MM.YYYY'),
      currencyInput: inputs.currencyInput,
      currencyOutput: inputs.currencyOutput,
    }});
  };

  if(!currentExchangeRate) {
    return (<RenderLoader/>)
  }

  return (
    <ConverterBlock>
      <Header>Конвертер валют</Header>
      <Form method="post" action="#" onSubmit={submitHandler}>
        <FieldWrapper>
          <Field>
            <label htmlFor="currency-input">
              <FieldTitle>У меня есть</FieldTitle>
            </label>
            <InputWrapper>
              <Input
                id="currency-input"
                name="currencyInput"
                type="number"
                min="0"
                max="10000000"
                step="any"
                value={currencyInput.amount}
                onChange={valueChangeHandler}
              />

              <label>
                <Select
                  name="currencyInput"
                  value={currencyInput.type}
                  onChange={typeChangeHandler}
                >
                  <option value="RUB">RUB</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                </Select>
                <span className="visually-hidden">валюта</span>
              </label>
            </InputWrapper>
          </Field>

          <Field>
            <label htmlFor="currency-input">
              <FieldTitle>Хочу приобрести</FieldTitle>
            </label>
            <InputWrapper>
              <Input
                id="currency-output"
                name="currencyOutput"
                type="number"
                min="0"
                step="any"
                value={currencyOutput.amount}
                onChange={valueChangeHandler}
              />

              <label>
                <Select
                  name="currencyOutput"
                  value={currencyOutput.type}
                  onChange={typeChangeHandler}
                >
                  <option value="RUB">RUB</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                </Select>
                <span className="visually-hidden">валюта</span>
              </label>
            </InputWrapper>
          </Field>
        </FieldWrapper>

        <Calendar currentDate={currentDate}/>

        <Button type="submit">
          Сохранить результат
        </Button>
      </Form>
    </ConverterBlock>
  );
}

Converter.displayName = 'Converter';
export default Converter;
