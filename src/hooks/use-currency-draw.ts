import {useMemo} from 'react';
import {MAX_DAYS} from '../const';
import {getRoundedValue, scaleValue} from '../common/utils';
import theme from '../theme/theme';
import {CanvasCoefficientsType} from '../common/types';

const drawAxis = (
  ctx: CanvasRenderingContext2D,
  datesArray: Array<string>,
  width: number, height: number,
  XInterval: number,
  leftOffset: number,
  bottomOffset: number,
  yMax: number,
  yMin: number,
  currencyMax: number,
  currencyMin: number
) => {
  const serifLength = 5;

  ctx.beginPath();
  ctx.moveTo(leftOffset, 0);

  // Отрисовка осей X и Y
  ctx.lineTo(leftOffset, height - bottomOffset);
  ctx.lineTo(width - leftOffset, height - bottomOffset);

  // Отрисовка засечек на оси Y
  ctx.moveTo(leftOffset - serifLength, yMin);
  ctx.lineTo(leftOffset + serifLength, yMin);

  ctx.moveTo(leftOffset - serifLength, yMax);
  ctx.lineTo(leftOffset + serifLength, yMax);

  ctx.fillText(currencyMax.toString(), 0, yMax + 3);
  ctx.fillText(currencyMin.toString(), 0, yMin + 3);

  // Отрисовка засечек на оси X
  for (let i = 1; i < MAX_DAYS; i++) {
    const x = leftOffset + XInterval * i;
    ctx.moveTo(x, height - bottomOffset + serifLength);
    ctx.lineTo(x, height - bottomOffset - serifLength);

    ctx.fillText(datesArray[datesArray.length - 1 - i], x - 12, height);
  }

  ctx.lineWidth = 2;
  ctx.strokeStyle = theme.color.basicBlack;
  ctx.stroke();
};

const drawGraph = (ctx: CanvasRenderingContext2D, scaledValues: Array<number>, leftOffset: number, dateInterval: number) => {
  ctx.imageSmoothingEnabled = false;

  ctx.beginPath();

  for (let i = 0; i < MAX_DAYS; i++) {
    const x = leftOffset + dateInterval * i;

    ctx.moveTo(x, scaledValues[scaledValues.length - 1 - i]);
    ctx.lineTo(x + dateInterval, scaledValues[scaledValues.length - 2 - i]);
  }

  ctx.lineWidth = 2;
  ctx.strokeStyle = theme.color.persianBlue;
  ctx.stroke();
};

const useCurrencyDraw = (currencies: CanvasCoefficientsType, datesArray: Array<string>) => useMemo(() => (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const leftOffset = 35;
  const bottomOffset = 20;
  const yMax = bottomOffset;
  const yMin = height - 2 * bottomOffset;

  const roundedCurrencyMax = getRoundedValue(currencies.max);
  const roundedCurrencyMin = getRoundedValue(currencies.min);

  const dateInterval = Math.floor((width - 2 * leftOffset) / (MAX_DAYS));

  const scaledValues = currencies.array.map((value) =>
    scaleValue(value, currencies.min, currencies.max, yMin, yMax)
  );

  drawAxis(ctx, datesArray, width, height, dateInterval, leftOffset, bottomOffset, yMax, yMin, roundedCurrencyMax, roundedCurrencyMin);
  drawGraph(ctx, scaledValues, leftOffset, dateInterval);
}, [currencies]);

export default useCurrencyDraw;
