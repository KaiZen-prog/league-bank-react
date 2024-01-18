import React, {useMemo, useRef} from 'react';
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
  const containerRef = useRef<HTMLInputElement>(null);

  const draw = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const {width, height} = canvas.parentElement.getBoundingClientRect();

    const calculatedWidth = Math.floor(width);
    const calculatedHeight = Math.floor(height);
    const dateInterval = Math.floor(calculatedWidth / (MAX_DAYS + 1));

    console.log(`Width: ${calculatedWidth}, Height: ${calculatedHeight}, dateInterval: ${dateInterval}`);

    ctx.canvas.width = Math.floor(calculatedWidth);
    ctx.canvas.height = Math.floor(height);


    ctx.beginPath();
    ctx.moveTo(5, 0);
    ctx.lineTo(5, calculatedHeight - 5);
    ctx.lineTo(calculatedWidth, calculatedHeight - 5);

    for (let i = 1; i <= MAX_DAYS; i++) {
      const x = 5 + dateInterval * i;
      ctx.moveTo(x, calculatedHeight);
      ctx.lineTo(x, calculatedHeight - 10);
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
      <CanvasWrapper ref = {containerRef}>
        <Canvas draw={draw}/>
      </CanvasWrapper>
    </>
  );
});

CurrencyGraph.displayName = 'CurrencyGraph';
export default CurrencyGraph;
