import React, {useState, useEffect} from 'react';
import {conversionFromUSD, conversionToUSD} from '../../../common/utils';
import Select from '../../UI/select';
import CurrencyOptions from '../currency-options';
import {ConverterCanvasCurrencies, ConverterFormCurrencies} from '../../../const';
import {GraphSection, CanvasWrapper, Header} from './currency-graph.styled';
import Canvas from '../../UI/canvas';
import {ExchangeRate, SelectChangeEventHandler} from '../../../common/types';
import useCurrencyDraw from '../../../hooks/use-currency-draw';

interface Props {
  exchangeRates: Record<string, ExchangeRate>,
  datesArray: Array<string>
}

const CurrencyGraph: React.FunctionComponent<Props> = React.memo((props) => {
  const {exchangeRates, datesArray} = props;

  const [currencyX, setCurrencyX] = useState(ConverterCanvasCurrencies[0]);
  const [currencies, setCurrencies] = useState({array: [], max: 0, med: 0, min: 0});

  const draw = useCurrencyDraw(currencies, datesArray);

  useEffect(() => {
    const arr = [];
    let max = 0;
    let min = 0;
    let isFirstIteration = true;

    for (const key in exchangeRates) {
      const convertedToUSD = conversionToUSD(1, exchangeRates[key][currencyX]);
      const result = conversionFromUSD(convertedToUSD, exchangeRates[key][ConverterFormCurrencies[0]]);

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
  }, [currencyX]);

  const currencyChangeHandler: SelectChangeEventHandler = (evt) => {
    const {value} = evt.target;
    setCurrencyX(value);
  };

  return (
    <GraphSection>
      <Header>Динамика курса к рублю</Header>
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
      <CanvasWrapper>
        {currencies.array.length > 0 &&
          <Canvas
            draw={draw}
          />}
      </CanvasWrapper>
    </GraphSection>
  );
});

CurrencyGraph.displayName = 'CurrencyGraph';
export default CurrencyGraph;
