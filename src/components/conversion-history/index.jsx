import React from 'react';
import { connect } from 'react-redux';
import ConversionHistoryItem from '../conversion-history-item';
import { clearHistory } from '../../store/actions/converter';
import PropTypes from 'prop-types';
import Block from './conversion-history.styled';

function ConversionHistory({ conversionHistory, clear }) {
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
        <Block.ButtonClear type='button' onClick={clear}>
          Очистить историю
        </Block.ButtonClear>
      </Block.Wrapper>
    </Block>
  );
}

ConversionHistory.propTypes = {
  conversionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      currencyInput: PropTypes.shape({
        amount: PropTypes.number,
        type: PropTypes.string,
      }),
      currencyOutput: PropTypes.shape({
        amount: PropTypes.number,
        type: PropTypes.string,
      }),
    }),
  ),
  clear: PropTypes.func.isRequired,
};

ConversionHistory.displayName = 'ConversionHistory';

const mapStateToProps = (state) => ({
  conversionHistory: state.CONVERSION_HISTORY.conversionHistory,
});

const mapDispatchToProps = (dispatch) => ({
  clear() {
    dispatch(clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionHistory);
