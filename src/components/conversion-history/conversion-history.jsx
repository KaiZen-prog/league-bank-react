import React from "react";
import {connect} from "react-redux";
import ConversionHistoryItem from "../conversion-history-item/conversion-history-item";
import {clearHistory} from "../../store/actions";
import PropTypes from "prop-types";

const ConversionHistory = ({history, clear}) => {
  return (
      <section className="conversion-history">
        <h2 className="conversion-history__header">История конвертации</h2>
        <ul className="conversion-history__list">
          {history.map((elem, i) => (
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
      </section>
  );
};

ConversionHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    currencyInput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
    currencyOutput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
  })).isRequired,
  clear: PropTypes.func.isRequired
};

ConversionHistory.displayName = `ConversionHistory`;

const mapStateToProps = (state) => ({
  history: state.CONVERSION_HISTORY.history,
});

const mapDispatchToProps = (dispatch) => ({
  clear() {
    dispatch(clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionHistory);
