import React from "react";
import {connect} from "react-redux";
import ConversionHistoryItem from "../conversion-history-item/conversion-history-item";
import {clearHistory} from "../../store/actions";
import PropTypes from "prop-types";

const ConversionHistory = ({conversionHistory, clear}) => {
  return (
    <section className="conversion-history">
      <div className="conversion-history__wrapper">
        <h2 className="conversion-history__header">История конвертации</h2>
        <ul className="conversion-history__list">
          {conversionHistory.map((elem, i) => (
            <ConversionHistoryItem
              key = {i}
              date = {elem.date}
              inputAmount = {elem.currencyInput.amount}
              inputCurrency = {elem.currencyInput.type}
              outputAmount = {elem.currencyOutput.amount}
              outputCurrency = {elem.currencyOutput.type}
            />
          ))}
        </ul>
        <button className="conversion-history__button" onClick={clear}>Очистить историю</button>
      </div>
    </section>
  );
};

ConversionHistory.propTypes = {
  conversionHistory: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    currencyInput: PropTypes.shape({
      amount: PropTypes.number,
      type: PropTypes.string
    }),
    currencyOutput: PropTypes.shape({
      amount: PropTypes.number,
      type: PropTypes.string
    }),
  })),
  clear: PropTypes.func.isRequired
};

ConversionHistory.displayName = `ConversionHistory`;

const mapStateToProps = (state) => ({
  conversionHistory: state.CONVERSION_HISTORY.conversionHistory,
});

const mapDispatchToProps = (dispatch) => ({
  clear() {
    dispatch(clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionHistory);
