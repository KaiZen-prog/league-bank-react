import React, {useState, useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import Block from './converter.styled';
import Calendar from '../calendar';
import {loadExchangeRate} from '../../store/actions/api-actions';
import {Currencies, FLOAT_COEFFICIENT, FormFields} from '../../const';
import moment from 'moment';
import {ActionType} from '../../store/actions/converter';

function Converter(props) {
  const currentDate = useSelector((store) => store.CONVERTER.date);
  const exchangeRate = useSelector((store) => store.CONVERTER.exchangeRate);

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
    props.loadData(currentDate);
  }, [currentDate]);

  useEffect(() => {
    valueConversion(inputToChange.name, inputToChange.value);
  }, [inputToChange, exchangeRate]);

  const conversionToUSD = (name, value) => {
    const divider = exchangeRate[inputs[name].type];
    return divider === 0 ? 0 : Math.floor((value / exchangeRate[inputs[name].type]) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
  };

  const conversionFromUSD = (name, value) =>
    Math.floor(value * exchangeRate[inputs[name].type] * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;

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

  const onDateChange = (date) => {
    const formatDate = moment(date).format('YYYY-MM-DD');
    dispatch({type: ActionType.CHANGE_DATE, payload: formatDate});
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    dispatch({type: ActionType.ADD_CONVERSION, payload: {
      date: moment(currentDate).format('DD.MM.YYYY'),
      currencyInput: inputs.currencyInput,
      currencyOutput: inputs.currencyOutput,
    }});
  };

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

        <Calendar date={currentDate} onChange={onDateChange}/>

        <Block.Button type="submit">
          Сохранить результат
        </Block.Button>
      </Block.Form>
    </Block>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loadData(date) {
    dispatch(loadExchangeRate(date));
  },
});

Converter.displayName = 'Converter';

export default connect(null, mapDispatchToProps)(Converter);
