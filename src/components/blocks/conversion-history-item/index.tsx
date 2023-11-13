import React from 'react';
import {useAppDispatch} from '../../../hooks/hooks';
import {ActionType} from '../../../store/actions/converter';
import {Conversion} from '../../../common/types';
import {
  ConversionHistoryItemBlock,
  Date,
  Container,
  Before,
  After,
  CloseButton
} from './conversion-history-item.styled';

interface Props {
  conversion: Conversion
}

const ConversionHistoryItem: React.FunctionComponent<Props> = (props) => {
  const {conversion} = props;
  const {id, date, currencyInput, currencyOutput} = conversion;

  const inputAmount = currencyInput.amount;
  const outputAmount = currencyOutput.amount;

  const inputCurrency = currencyInput.type;
  const outputCurrency = currencyOutput.type;

  const dispatch = useAppDispatch();

  const onItemDelete = () => {
    dispatch({type: ActionType.DELETE_CONVERSION, payload: id});
  };

  return (
    <ConversionHistoryItemBlock>
      <Date>{date}</Date>
      <Container>
        <Before>
          {inputAmount.toString().replace('.', ',')} {inputCurrency}
        </Before>
        <After>
          {outputAmount.toString().replace('.', ',')} {outputCurrency}
        </After>
      </Container>
      <CloseButton type='button' onClick={onItemDelete}></CloseButton>
    </ConversionHistoryItemBlock>
  );
};

ConversionHistoryItem.displayName = 'ConversionHistoryItem';
export default ConversionHistoryItem;
