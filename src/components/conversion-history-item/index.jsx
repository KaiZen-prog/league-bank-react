import React from 'react';
import PropTypes from 'prop-types';
import Block from './conversion-history-item.styled';

function ConversionHistoryItem({ date, inputAmount, inputCurrency, outputAmount, outputCurrency }) {
  return (
    <Block>
      <Block.Date>{date}</Block.Date>
      <Block.Container>
        <Block.Before>
          {inputAmount.toString().replace('.', ',')} {inputCurrency}
        </Block.Before>
        <Block.After>
          {outputAmount.toString().replace('.', ',')} {outputCurrency}
        </Block.After>
      </Block.Container>
    </Block>
  );
}

ConversionHistoryItem.propTypes = {
  date: PropTypes.string.isRequired,
  inputAmount: PropTypes.number.isRequired,
  inputCurrency: PropTypes.string.isRequired,
  outputAmount: PropTypes.number.isRequired,
  outputCurrency: PropTypes.string.isRequired,
};

ConversionHistoryItem.displayName = 'ConversionHistoryItem';
export default ConversionHistoryItem;
