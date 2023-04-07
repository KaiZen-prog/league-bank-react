import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ConversionHistoryItem from '../conversion-history-item';
import Block from './conversion-history.styled';
import {ActionType} from '../../store/actions/converter';

function ConversionHistory() {
  const conversionHistory = useSelector((store) => store.converter.conversionHistory);
  const dispatch = useDispatch();

  const clearHistory = () => {
    dispatch({type: ActionType.CLEAR_HISTORY, payload: []});
  };

  return (
    <Block>
      <Block.Wrapper>
        <Block.Header>История конвертации</Block.Header>
        <Block.List>
          {conversionHistory.map((elem, i) => (
            <ConversionHistoryItem
              key={i}
              date={elem.date}
              inputAmount={elem.currencyInput.amount}
              inputCurrency={elem.currencyInput.type}
              outputAmount={elem.currencyOutput.amount}
              outputCurrency={elem.currencyOutput.type}
            />
          ))}
        </Block.List>
        <Block.ButtonClear type='button' onClick={clearHistory}>
          Очистить историю
        </Block.ButtonClear>
      </Block.Wrapper>
    </Block>
  );
}

ConversionHistory.displayName = 'ConversionHistory';
export default ConversionHistory;
