import React, {useEffect, useMemo} from 'react';
import moment from 'moment';
import {ConverterInputParams, MAX_DAYS} from '../../../const';
import OpenExchange from '../../../API/open-exchange';
import {pasteNewExchangeRates, addConversion} from '../../../store/actions/converter';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import {FormSubmitEventHandler} from '../../../common/types';
import {useValueConversion} from '../../../hooks/use-value-conversion';
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

  const datesArray = useMemo(() => Object.keys(exchangeRates).map((date) => {
    const month = date.slice(5, 7);
    const day = date.slice(8);
    return `${day}.${month}`;
  }), [exchangeRates]);

  const dispatch = useAppDispatch();

  const [currencyInput, currencyOutput, typeChangeHandler, valueChangeHandler] = useValueConversion(exchangeRates[currentDate]);

  const [downloadRates, isLoading, error] = useFetching(async () => {
    const rates = await OpenExchange.fetchLastWeekRates();
    dispatch(pasteNewExchangeRates(rates));
  });

  useEffect(() => {
    downloadRates();
  }, []);

  const submitHandler: FormSubmitEventHandler = (evt) => {
    evt.preventDefault();
    dispatch(addConversion(moment(currentDate).format('DD.MM.YYYY'), currencyInput, currencyOutput));
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
