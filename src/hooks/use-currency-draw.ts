import {useMemo} from 'react';
import {MAX_DAYS} from '../const';
import {scaleValue} from '../common/utils';
import theme from '../theme/theme';
import {CanvasCoefficientsType} from '../common/types';

const drawAxis = (ctx: CanvasRenderingContext2D, width: number, height: number, XInterval: number) => {
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(20, height - 5);
  ctx.lineTo(width - 20, height - 5);

  for (let i = 1; i < MAX_DAYS; i++) {
    const x = 20 + XInterval * i;
    ctx.moveTo(x, height);
    ctx.lineTo(x, height - 10);
  }

  ctx.lineWidth = 2;
  ctx.strokeStyle = theme.color.basicBlack;
  ctx.stroke();
};

const useCurrencyDraw = (currencies: CanvasCoefficientsType) => useMemo(() => (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const dateInterval = Math.floor((width - 40) / (MAX_DAYS));

  drawAxis(ctx, width, height, dateInterval);

  const yMax = 30;
  const yMin = height - 40;

  if (currencies.array.length > 0) {
    const scaledValues = currencies.array.map((value) =>
      scaleValue(value, currencies.min, currencies.max, yMin, yMax)
    );

    ctx.beginPath();

    for (let i = 0; i < MAX_DAYS; i++) {
      const x = 20 + dateInterval * i;

      ctx.moveTo(x, scaledValues[scaledValues.length - 1 - i]);
      ctx.lineTo(x + dateInterval, scaledValues[scaledValues.length - 2 - i]);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = theme.color.persianBlue;
    ctx.stroke();
  }
}, [currencies]);

export default useCurrencyDraw;
