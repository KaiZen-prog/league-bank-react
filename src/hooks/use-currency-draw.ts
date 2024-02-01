import {useMemo} from 'react';
import {FLOAT_COEFFICIENT, FLOAT_COEFFICIENT_BIG, MAX_DAYS} from '../const';
import {getRoundedValue, scaleValue} from '../common/utils';
import theme from '../theme/theme';
import {CanvasCoefficientsType} from '../common/types';

const drawAxis = (
  ctx: CanvasRenderingContext2D,
  datesArray: Array<string>,
  width: number,
  height: number,
  XInterval: number,
  leftOffset: number,
  bottomOffset: number,
  yMax: number,
  yMed: number,
  yMin: number,
  currencyMax: number,
  currencyMed: number,
  currencyMin: number
) => {
  const serifLength = 5;

  ctx.beginPath();
  ctx.moveTo(leftOffset, height - bottomOffset);

  // Отрисовка оси X
  ctx.lineTo(width - XInterval, height - bottomOffset);

  // Отрисовка значений на оси Y
  ctx.fillText(currencyMax.toString(), leftOffset + XInterval * (MAX_DAYS - 1) + 10, yMax + 3);
  ctx.fillText(currencyMed.toString(), leftOffset + XInterval * (MAX_DAYS - 1) + 10, yMed + 3);
  ctx.fillText(currencyMin.toString(), leftOffset + XInterval * (MAX_DAYS - 1) + 10, yMin + 3);

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

  //Отрисовка средней линии
  ctx.beginPath();
  let startX = leftOffset + XInterval * (MAX_DAYS - 1) + 5;
  ctx.moveTo(startX, yMed);

  while (startX >= leftOffset) {
    startX -= 1;
    ctx.lineTo(startX, yMed);
    startX -= 2;
    ctx.moveTo(startX, yMed);
  }

  ctx.lineWidth = 1;
  ctx.strokeStyle = theme.color.matterhorn;
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
  const yMed = (yMax + yMin) / 2;

  const coefficient = currencies.max < 1 ? FLOAT_COEFFICIENT_BIG : FLOAT_COEFFICIENT;

  const roundedCurrencyMax = getRoundedValue(currencies.max, coefficient);
  const roundedCurrencyMed = getRoundedValue(currencies.med, coefficient);
  const roundedCurrencyMin = getRoundedValue(currencies.min, coefficient);

  const dateInterval = Math.floor((width - 2 * leftOffset) / (MAX_DAYS));

  const scaledValues = currencies.array.map((value) =>
    scaleValue(value, currencies.min, currencies.max, yMin, yMax)
  );

  drawAxis(ctx, datesArray, width, height, dateInterval, leftOffset, bottomOffset, yMax, yMed, yMin, roundedCurrencyMax, roundedCurrencyMed, roundedCurrencyMin);
  drawGraph(ctx, scaledValues, leftOffset, dateInterval);
}, [currencies]);

export default useCurrencyDraw;
