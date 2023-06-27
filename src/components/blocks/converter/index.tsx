import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import {Currencies, FLOAT_COEFFICIENT, FormFields, ConverterInputParams} from '../../../const';
import {loadExchangeRate} from '../../../store/actions/api-actions';
import {ActionType} from '../../../store/actions/converter';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {FormSubmitEventHandler, InputChangeEventHandler, SelectChangeEventHandler } from '../../../common/types';
import {conversionToUSD, conversionFromUSD} from '../../../common/utils';
import ConverterField from '../converter-field';
import Calendar from '../calendar';
import Spinner from '../spinner';
import {
  ConverterBlock,
  Header,
  Form,
  FieldWrapper,
  Button
} from './converter.styled';

const Converter: React.FunctionComponent = () => {
  const currentDate = useAppSelector((store) => store.converter.currentDate);
  const exchangeRates = useAppSelector((store) => store.converter.exchangeRates);
  const isFetchingData = useAppSelector((store) => store.converter.isFetchingData);

  let currentExchangeRate = exchangeRates[currentDate];

  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    currencyInput: {type: Currencies[0], amount: 0},
    currencyOutput: {type: Currencies[1], amount: 0},
  });

  const [inputToChange, setInputToChange] = useState({
    name: FormFields.INPUT,
    value: inputs[FormFields.INPUT].amount,
  });

  const {currencyInput, currencyOutput} = inputs;

  let entryField = '';
  let outputField = '';

  useEffect(() => {
    if(!currentExchangeRate && !isFetchingData) {
      loadExchangeRate(currentDate, dispatch);
    }
  }, [[currentDate]]);

  useEffect(() => {
    if(currentExchangeRate) {
      valueConversion(inputToChange.name, inputToChange.value);
    }
  }, [inputToChange, currentExchangeRate]);

  function valueConversion(name: string, value: number) {
    if (name === FormFields.INPUT) {
      entryField = FormFields.INPUT;
      outputField = FormFields.OUTPUT;
    } else {
      entryField = FormFields.OUTPUT;
      outputField = FormFields.INPUT;
    }

    const entryExchangeRate: number = currentExchangeRate[inputs[entryField].type];
    const outputExchangeRate: number = currentExchangeRate[inputs[outputField].type];

    const convertedToUSD = conversionToUSD(value, entryExchangeRate);
    const result = conversionFromUSD(convertedToUSD, outputExchangeRate);

    setInputs((prevState) => ({
      ...prevState,
      [outputField]: Object.assign({}, prevState[outputField], {amount: result}),
    }));
  }

  const valueChangeHandler: InputChangeEventHandler = (evt) => {
    const {name, value} = evt.target;

    const valueNumber = parseInt(value);
    let checkedValue: number = 0;

    checkedValue = valueNumber > ConverterInputParams.maxValue
      ? ConverterInputParams.maxValue
      : valueNumber;

    setInputs((prevState) => ({
      ...prevState,
      [name]: Object.assign({}, prevState[name], {
        amount: checkedValue === 0 ? '' : (Math.floor(checkedValue * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT).toString(),
      }),
    }));

    setInputToChange({name: name, value: checkedValue});
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

  return (
    <ConverterBlock>
      <Header>Конвертер валют</Header>

      <Form method="post" action="#" onSubmit={submitHandler}>
        <FieldWrapper>
          <ConverterField
            inputParams={ConverterInputParams.input}
            amount={currencyInput.amount}
            currency={currencyInput.type}
            valueChangeHandler={valueChangeHandler}
            typeChangeHandler={typeChangeHandler}
          />

          <ConverterField
            inputParams={ConverterInputParams.output}
            amount={currencyOutput.amount}
            currency={currencyOutput.type}
            valueChangeHandler={valueChangeHandler}
            typeChangeHandler={typeChangeHandler}
          />
        </FieldWrapper>

        <Calendar currentDate={currentDate}/>

        <Button type="submit">
          Сохранить результат
        </Button>
      </Form>

      <Spinner isLoading={isFetchingData}/>

    </ConverterBlock>
  );
}

Converter.displayName = 'Converter';
export default Converter;
