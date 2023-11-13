import React, {useEffect} from 'react';
import {setItem} from '../../../services/localstorage';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import ConversionHistoryItem from '../conversion-history-item';
import {ActionType} from '../../../store/actions/converter';
import {Conversion} from '../../../common/types';
import Section from '../../UI/section';
import {
  Wrapper,
  Header,
  List,
  ButtonClearHistory
} from './conversion-history.styled';

const ConversionHistory: React.FunctionComponent = () => {
  const conversionHistory = useAppSelector((store) => store.converter.conversionHistory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setItem('conversionHistory', conversionHistory);
  }, [conversionHistory]);

  const clearHistory = () => {
    dispatch({type: ActionType.CLEAR_HISTORY, payload: []});
  };

  return (
    <Section>
      <Wrapper>
        <Header>История конвертации</Header>
        <List>
          {conversionHistory.map((elem: Conversion, i: number) => (
            <ConversionHistoryItem
              key={i}
              conversion={elem}
            />
          ))}
        </List>
        <ButtonClearHistory type='button' onClick={clearHistory}>
          Очистить историю
        </ButtonClearHistory>
      </Wrapper>
    </Section>
  );
};

ConversionHistory.displayName = 'ConversionHistory';
export default ConversionHistory;
