import React, {useState, useEffect, useMemo} from 'react';
import {conversionFromUSD, conversionToUSD, generateDatesArray} from '../../../common/utils';
import Select from '../../UI/select';
import CurrencyOptions from '../currency-options';
import {ConverterCanvasCurrencies, ConverterFormCurrencies, MAX_DAYS} from '../../../const';
import {CanvasWrapper, Header} from './currency-graph.styled';
import Canvas from '../../UI/canvas';
import {ExchangeRate, SelectChangeEventHandler} from '../../../common/types';
import useCurrencyDraw from '../../../hooks/use-currency-draw';

interface Props {
  exchangeRates: Record<string, ExchangeRate>
}

const CurrencyGraph: React.FunctionComponent<Props> = React.memo(({exchangeRates}) => {
  const [currencyX, setCurrencyX] = useState(ConverterCanvasCurrencies[0]);
  const [currencies, setCurrencies] = useState({array: [], max: 0, med: 0, min: 0});

  const dates = useMemo(() => generateDatesArray(MAX_DAYS), []);
  const draw = useCurrencyDraw(currencies);

  useEffect(() => {
    const arr = [];
    let max = 0;
    let min = 0;
    let isFirstIteration = true;

    for (const key in exchangeRates) {
      const convertedToUSD = conversionToUSD(1, exchangeRates[key][currencyX], 1000000);
      const result = conversionFromUSD(convertedToUSD, exchangeRates[key][ConverterFormCurrencies[0]], 1000000);

      arr.push(result);

      if (result > max) {
        max = result;
      }

      if (result < min) {
        min = result;
      }

      if (isFirstIteration) {
        min = result;
      }

      isFirstIteration = false;
    }

    const med = (max + min) / 2;

    setCurrencies({array: arr, max: max, med: med, min: min});
  }, [exchangeRates, currencyX]);

  const currencyChangeHandler: SelectChangeEventHandler = (evt) => {
    const {value} = evt.target;
    setCurrencyX(value);
  };

  return (
    <>
      <Header>Динамика курса</Header>
      <Select
        name={'x-currency'}
        value={currencyX}
        label={'валюта'}
        changeHandler={currencyChangeHandler}
      >
        <CurrencyOptions
          options={ConverterCanvasCurrencies}
        />
      </Select>
      <p>currencyX: {currencyX}</p>
      <p>currencyY: {ConverterFormCurrencies[0]}</p>
      <p>dates: {dates.map((date, i) => <span key={i}>{date}, </span>)}</p>
      <CanvasWrapper>
        {currencies.array.length > 0 &&
          <Canvas
            draw={draw}
          />}
      </CanvasWrapper>
    </>
  );
});

CurrencyGraph.displayName = 'CurrencyGraph';
export default CurrencyGraph;
