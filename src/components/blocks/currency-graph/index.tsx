import React, {useMemo} from 'react';
import {generateDatesArray} from '../../../common/utils';
import {MAX_DAYS} from '../../../const';
import {
  Header,
} from './currency-graph.styled';

interface Props {
  currentDate: string,
  currencyX: string,
  currencyY: string
}

const CurrencyGraph: React.FunctionComponent<Props> = React.memo(({currentDate, currencyX, currencyY}) => {
  const dates = useMemo(() => generateDatesArray(MAX_DAYS), []);
  return (
    <>
      <Header>Динамика курса</Header>
      <p>currencyX: {currencyX}</p>
      <p>currencyY: {currencyY}</p>
      <p>currentDate: {currentDate}</p>
      <p>dates: {dates.map((date, i) => <span key={i}>{date}, </span>)}</p>
    </>
  );
});

CurrencyGraph.displayName = 'CurrencyGraph';
export default CurrencyGraph;
