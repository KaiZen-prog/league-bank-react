import React from 'react';
import {
  ConversionHistoryItemBlock,
  Date,
  Container,
  Before,
  After
} from './conversion-history-item.styled';

interface Props {
  date: string,
  inputAmount: number,
  inputCurrency: string,
  outputAmount: number,
  outputCurrency: string
}

const ConversionHistoryItem: React.FunctionComponent<Props> = (props) => {
  const {date, inputAmount, inputCurrency, outputAmount, outputCurrency} = props;

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
    </ConversionHistoryItemBlock>
  );
}

ConversionHistoryItem.displayName = 'ConversionHistoryItem';
export default ConversionHistoryItem;
