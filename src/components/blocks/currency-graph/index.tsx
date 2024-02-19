import React, {useState, useEffect} from 'react';
import {conversionFromUSD, conversionToUSD} from '../../../common/utils';
import Select from '../../UI/select';
import CurrencyOptions from '../currency-options';
import {ConverterFormCurrencies, CanvasCurrencyNames} from '../../../const';
import {GraphSection, CanvasWrapper, Header, SelectWrapper, AxisSpan} from './currency-graph.styled';
import Canvas from '../../UI/canvas';
import {ExchangeRate, SelectChangeEventHandler} from '../../../common/types';
import useCurrencyDraw from '../../../hooks/use-currency-draw';

interface Props {
  exchangeRates: Record<string, ExchangeRate>,
  datesArray: Array<string>
}

const CurrencyGraph: React.FunctionComponent<Props> = React.memo((props) => {
  const {exchangeRates, datesArray} = props;

  const [currencyY, setCurrencyY] = useState(ConverterFormCurrencies[0]);
  const [currencyX, setCurrencyX] = useState(ConverterFormCurrencies[1]);
  const [currencies, setCurrencies] = useState({array: [], max: 0, med: 0, min: 0});

  const draw = useCurrencyDraw(currencies, datesArray);

  useEffect(() => {
    const arr = [];
    let max = 0;
    let min = 0;
    let isFirstIteration = true;

    for (const key in exchangeRates) {
      const convertedToUSD = conversionToUSD(1, exchangeRates[key][currencyX]);
      const result = conversionFromUSD(convertedToUSD, exchangeRates[key][currencyY]);

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
  }, [currencyX, currencyY]);

  const currencyChangeHandler: SelectChangeEventHandler = (evt) => {
    const {name, value} = evt.target;

    switch (name) {
      case CanvasCurrencyNames.X:
        setCurrencyX(value);
        break;

      case CanvasCurrencyNames.Y:
        setCurrencyY(value);
        break;
    }
  };

  return (
    <GraphSection>
      <Header>Динамика курсов валют за неделю</Header>
      <div>
        <SelectWrapper>
          <AxisSpan>Ось Y:</AxisSpan>
          <Select
            name={'y-currency'}
            value={currencyY}
            label={'валюта для оси Y'}
            changeHandler={currencyChangeHandler}
          >
            <CurrencyOptions
              options={ConverterFormCurrencies}
            />
          </Select>
        </SelectWrapper>
        <SelectWrapper>
          <AxisSpan>Ось X:</AxisSpan>
          <Select
            name={'x-currency'}
            value={currencyX}
            label={'валюта для оси X'}
            changeHandler={currencyChangeHandler}
          >
            <CurrencyOptions
              options={ConverterFormCurrencies}
            />
          </Select>
        </SelectWrapper>
      </div>
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
