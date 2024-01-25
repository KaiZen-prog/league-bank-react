import React, {useState, useEffect, useMemo} from 'react';
import moment from 'moment';
import {ConverterFormCurrencies, FormFields, ConverterInputParams, MAX_DAYS} from '../../../const';
import OpenExchange from '../../../API/open-exchange';
import {pasteNewExchangeRates, addConversion} from '../../../store/actions/converter';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {FormSubmitEventHandler, InputChangeEventHandler, SelectChangeEventHandler} from '../../../common/types';
import {getConversionResult, getRoundedValue} from '../../../common/utils';
import Section from '../../UI/section/section';
import ConverterField from '../converter-field';
import Calendar from '../calendar';
import Error from '../error';
import Spinner from '../../UI/spinner';
import {useFetching} from '../../../hooks/use-fetching';
import {
  Header,
  Form,
  Wrapper,
  Button
} from './converter.styled';
import CurrencyGraph from '../currency-graph';

const Converter: React.FunctionComponent = () => {
  const currentDate = useAppSelector((store) => store.converter.currentDate);
  const exchangeRates = useAppSelector((store) => store.converter.exchangeRates);

  const currentExchangeRate = exchangeRates[currentDate];

  const datesArray = useMemo(() => Object.keys(exchangeRates).map((date) => {
    const month = date.slice(5, 7);
    const day = date.slice(8);
    return `${day}.${month}`;
  }), [exchangeRates]);

  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    currencyInput: {type: ConverterFormCurrencies[0], amount: 0},
    currencyOutput: {type: ConverterFormCurrencies[1], amount: 0},
  });

  const [inputToChange, setInputToChange] = useState({
    name: FormFields.INPUT,
    value: inputs[FormFields.INPUT].amount,
  });

  const {currencyInput, currencyOutput} = inputs;

  const [downloadRates, isLoading, error] = useFetching(async () => {
    const rates = await OpenExchange.fetchLastWeekRates();
    dispatch(pasteNewExchangeRates(rates));
  });

  useEffect(() => {
    downloadRates();
  }, []);

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
        amount: checkedValue === 0 ? '' : getRoundedValue(checkedValue).toString(),
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
    dispatch(addConversion(moment(currentDate).format('DD.MM.YYYY'), inputs.currencyInput, inputs.currencyOutput));
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

          {error && <Error error={error}/>}
          {isLoading && <Spinner isLoading={isLoading}/>}
        </Wrapper>

        <Wrapper>
          <Calendar currentDate={currentDate}/>

          <Button type="submit">
            Сохранить результат
          </Button>
        </Wrapper>
      </Form>
      {datesArray.length === MAX_DAYS && <CurrencyGraph exchangeRates={exchangeRates} datesArray={datesArray}/>}
    </Section>
  );
};

Converter.displayName = 'Converter';
export default Converter;
