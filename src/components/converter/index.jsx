import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import Block from './converter.styled';
import Calendar from '../calendar';
import {Currencies, FLOAT_COEFFICIENT, FormFields} from '../../const';
import moment from 'moment';
import {ActionType} from '../../store/actions/converter';
import {loadExchangeRate} from '../../store/actions/api-actions';
import RenderLoader from '../render-loader';

function Converter() {
  const currentDate = useSelector((store) => store.converter.currentDate);
  const exchangeRates = useSelector((store) => store.converter.exchangeRates);
  let currentExchangeRate = exchangeRates[currentDate];

  const dispatch = useDispatch();

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
      dispatch(loadExchangeRate(currentDate))
    }
  }, [currentDate]);

  useEffect(() => {
    if(currentExchangeRate) {
      valueConversion(inputToChange.name, inputToChange.value);
    }
  }, [inputToChange, currentExchangeRate]);

  const conversionToUSD = (name, value) => {
    const divider = currentExchangeRate[inputs[name].type];
    return divider === 0 ? 0 : Math.floor((value / divider) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
  };

  const conversionFromUSD = (name, value) =>
    Math.floor(value * currentExchangeRate[inputs[name].type] * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;

  function valueConversion(name, value) {
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

  const valueChangeHandler = (evt) => {
    const {name, value} = evt.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: Object.assign({}, prevState[name], {
        amount: value === '' ? '' : Math.floor(value * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT,
      }),
    }));

    setInputToChange({name: name, value: value});
  };

  const typeChangeHandler = (evt) => {
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

  const submitHandler = (evt) => {
    evt.preventDefault();

    dispatch({type: ActionType.ADD_CONVERSION, payload: {
      date: moment(currentDate).format('DD.MM.YYYY'),
      currencyInput: inputs.currencyInput,
      currencyOutput: inputs.currencyOutput,
    }});
  };

  if(!currentExchangeRate) {
    return (<RenderLoader/>)
  }

  return (
    <Block>
      <Block.Header>Конвертер валют</Block.Header>
      <Block.Form method="post" action="#" onSubmit={submitHandler}>
        <Block.FieldWrapper>
          <Block.Field>
            <label htmlFor="currency-input">
              <Block.FieldTitle>У меня есть</Block.FieldTitle>
            </label>
            <Block.InputWrapper>
              <Block.Input
                id="currency-input"
                name="currencyInput"
                type="number"
                min="0"
                max="10000000"
                step="any"
                value={currencyInput.amount}
                onChange={valueChangeHandler}
              />

              <Block.Label>
                <Block.Select
                  name="currencyInput"
                  value={currencyInput.type}
                  onChange={typeChangeHandler}
                >
                  <option value="RUB">RUB</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                </Block.Select>
                <span className="visually-hidden">валюта</span>
              </Block.Label>
            </Block.InputWrapper>
          </Block.Field>

          <Block.Field>
            <label htmlFor="currency-input">
              <Block.FieldTitle>Хочу приобрести</Block.FieldTitle>
            </label>
            <Block.InputWrapper>
              <Block.Input
                id="currency-output"
                name="currencyOutput"
                type="number"
                min="0"
                step="any"
                value={currencyOutput.amount}
                onChange={valueChangeHandler}
              />

              <Block.Label>
                <Block.Select
                  name="currencyOutput"
                  value={currencyOutput.type}
                  onChange={typeChangeHandler}
                >
                  <option value="RUB">RUB</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                </Block.Select>
                <span className="visually-hidden">валюта</span>
              </Block.Label>
            </Block.InputWrapper>
          </Block.Field>
        </Block.FieldWrapper>

        <Calendar currentDate={currentDate}/>

        <Block.Button type="submit">
          Сохранить результат
        </Block.Button>
      </Block.Form>
    </Block>
  );
}

Converter.displayName = 'Converter';
export default Converter;
