import React, {useMemo} from 'react';
import {generateDatesArray} from '../../../common/utils';
import {MAX_DAYS} from '../../../const';
import {CanvasWrapper, Header} from './currency-graph.styled';
import Canvas from '../../UI/canvas';

interface Props {
  currentDate: string,
  currencyX: string,
  currencyY: string
}

const CurrencyGraph: React.FunctionComponent<Props> = React.memo(({currentDate, currencyX, currencyY}) => {
  const dates = useMemo(() => generateDatesArray(MAX_DAYS), []);

  const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
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
  };

  return (
    <>
      <Header>Динамика курса</Header>
      <p>currencyX: {currencyX}</p>
      <p>currencyY: {currencyY}</p>
      <p>currentDate: {currentDate}</p>
      <p>dates: {dates.map((date, i) => <span key={i}>{date}, </span>)}</p>
      <CanvasWrapper>
        <Canvas
          draw={draw}
        />
      </CanvasWrapper>
    </>
  );
});

CurrencyGraph.displayName = 'CurrencyGraph';
export default CurrencyGraph;
