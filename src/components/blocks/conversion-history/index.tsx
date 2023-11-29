import React, {useEffect} from 'react';
import {setItem} from '../../../services/localstorage';
import {useAppSelector, useAppDispatch} from '../../../hooks/hooks';
import ConversionHistoryItem from '../conversion-history-item';
import {clearConversionHistory} from '../../../store/actions/converter';
import {Conversion} from '../../../common/types';
import Section from '../../UI/section/section';
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
    dispatch(clearConversionHistory());
  };

  return (
    <Section>
      <Wrapper>
        <Header>История конвертаций</Header>
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
