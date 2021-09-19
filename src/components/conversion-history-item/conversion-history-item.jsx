import React from "react";
import PropTypes from "prop-types";

const ConversionHistoryItem = ({date, inputAmount, inputCurrency, outputAmount, outputCurrency}) => {
  return (
    <>
      <li className="conversion-history__item">
        <p className="conversion-history__date">{date}</p>
        <div className="conversion-history__container">
          <p className="conversion-history__before">
            {inputAmount.toString().replace(`.`, `,`)} {inputCurrency}
          </p>
          <p className="conversion-history__after">
            {outputAmount.toString().replace(`.`, `,`)} {outputCurrency}
          </p>
        </div>
      </li>
    </>
  );
};

ConversionHistoryItem.propTypes = {
  date: PropTypes.date,
  inputAmount: PropTypes.number.isRequired,
  inputCurrency: PropTypes.string.isRequired,
  outputAmount: PropTypes.number.isRequired,
  outputCurrency: PropTypes.string.isRequired,
};

ConversionHistoryItem.displayName = `ConversionHistoryItem`;
export default ConversionHistoryItem;
