import React, {useState, useEffect, useMemo} from 'react';
import {conversionFromUSD, conversionToUSD, generateDatesArray, scaleValue} from '../../../common/utils';
import Select from '../../UI/select';
import CurrencyOptions from '../currency-options';
import {Currencies, MAX_DAYS} from '../../../const';
import {CanvasWrapper, Header} from './currency-graph.styled';
import theme from '../../../theme/theme';
import Canvas from '../../UI/canvas';
import {ExchangeRate, SelectChangeEventHandler, CanvasCoefficientsType} from '../../../common/types';

interface Props {
  exchangeRates: Record<string, ExchangeRate>
}

const CurrencyGraph: React.FunctionComponent<Props> = React.memo(({exchangeRates}) => {
  const [currencyX, setCurrencyX] = useState(Currencies[1]);
  const [currencies, setCurrencies] = useState({array: [], max: 0, med: 0, min: 0});
  const dates = useMemo(() => generateDatesArray(MAX_DAYS), []);

  console.log(currencies);

  useEffect(() => {
    const arr = [];
    let max = 0;
    let min = 0;
    let isFirstIteration = true;

    for (const key in exchangeRates) {
      const convertedToUSD = conversionToUSD(1, exchangeRates[key][currencyX]);
      const result = conversionFromUSD(convertedToUSD, exchangeRates[key][Currencies[0]]);

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

  const draw = useMemo(() => (ctx: CanvasRenderingContext2D, width: number, height: number, coefficients: CanvasCoefficientsType) => {
    const dateInterval = Math.floor(width / (MAX_DAYS + 1));

    console.log(`Width: ${width}, Height: ${height}, dateInterval: ${dateInterval}`);

    ctx.beginPath();
    ctx.moveTo(5, 0);
    ctx.lineTo(5, height - 5);
    ctx.lineTo(width, height - 5);

    for (let i = 1; i <= MAX_DAYS; i++) {
      const x = 5 + dateInterval * i;
      ctx.moveTo(x, height);
      ctx.lineTo(x, height - 10);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.beginPath();
    const yMax = 30;
    const yMin = height - 20;
    const yMed = (height + 10) / 2;

    ctx.moveTo(5, yMax);
    ctx.lineTo(width, yMax);

    ctx.moveTo(5, yMed);
    ctx.lineTo(width, yMed);

    ctx.moveTo(5, yMin);
    ctx.lineTo(width, yMin);
    ctx.lineWidth = 1;
    ctx.stroke();

    if (coefficients.array.length > 0) {
      const scaledValues = coefficients.array.map((value) =>
        scaleValue(value, coefficients.min, coefficients.max, yMin, yMax)
      );

      console.log(scaledValues);

      ctx.beginPath();

      for (let i = 1; i < MAX_DAYS; i++) {
        const x = 5 + dateInterval * i;

        ctx.moveTo(x, scaledValues[i - 1]);
        ctx.lineTo(x + dateInterval , scaledValues[i]);
      }

      ctx.lineWidth = 2;
      ctx.strokeStyle = theme.color.persianBlue;
      ctx.stroke();
    }
  }, [currencies]);

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
        <CurrencyOptions/>
      </Select>
      <p>currencyX: {currencyX}</p>
      <p>currencyY: {Currencies[0]}</p>
      <p>dates: {dates.map((date, i) => <span key={i}>{date}, </span>)}</p>
      <CanvasWrapper>
        {currencies.array.length > 0 && <Canvas
          draw={draw}
          coefficients={currencies}
        />}
      </CanvasWrapper>
    </>
  );
});

CurrencyGraph.displayName = 'CurrencyGraph';
export default CurrencyGraph;
