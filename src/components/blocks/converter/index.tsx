import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import {Currencies, FLOAT_COEFFICIENT, FormFields, ConverterInputParams} from '../../../const';
import {loadExchangeRate} from '../../../store/actions/api-actions';
import {ActionType} from '../../../store/actions/converter';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {FormSubmitEventHandler, InputChangeEventHandler, SelectChangeEventHandler } from '../../../common/types';
import {getConversionResult} from '../../../common/utils';
import Section from '../../UI/section/section';
import ConverterField from '../converter-field';
import Calendar from '../calendar';
import Spinner from '../../UI/spinner';
import {
  Header,
  Form,
  Wrapper,
  Button
} from './converter.styled';

const Converter: React.FunctionComponent = () => {
  const currentDate = useAppSelector((store) => store.converter.currentDate);
  const exchangeRates = useAppSelector((store) => store.converter.exchangeRates);
  const isFetchingData = useAppSelector((store) => store.converter.isFetchingData);

  const currentExchangeRate = exchangeRates[currentDate];

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
    const [result, outputField] = getConversionResult(name, value, currentExchangeRate, inputs);

    setInputs((prevState) => ({
      ...prevState,
      [outputField]: Object.assign({}, prevState[outputField], {amount: result}),
    }));
  }

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
    <Section>
      <Header>Конвертер валют</Header>

      <Form method="post" action="#" onSubmit={submitHandler}>
        <Wrapper>
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

          <Spinner isLoading={isFetchingData}/>
        </Wrapper>

        <Wrapper>
          <Calendar currentDate={currentDate}/>

          <Button type="submit">
            Сохранить результат
          </Button>
        </Wrapper>
      </Form>
    </Section>
  );
};

Converter.displayName = 'Converter';
export default Converter;
