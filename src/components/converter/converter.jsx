import React from "react";
import PropTypes from "prop-types";
import {withConverter} from "../../hocs/with-converter/with-converter";

const Converter = (props) => {
  const {children, submitHandler, typeChangeHandler, valueChangeHandler} = props;
  const {currencyInput, currencyOutput} = props.state;

  return (
      <section className="converter">
        <h2 className="converter__header">Конвертер валют</h2>
        <form method="post" action="#" className="converter__form" onSubmit={submitHandler}>
          <div className="converter__field-wrapper">
            <div className="converter__field">
              <label htmlFor="currency-input">
                <h3 className="converter__field-title">У меня есть</h3>
              </label>
              <div className="converter__input-wrapper">
                <input
                    id="currency-input"
                    className="converter__input"
                    name="currencyInput"
                    type="number"
                    min="0"
                    step="any"
                    value={currencyInput.amount}
                    onChange={valueChangeHandler}
                />

                <label>
                  <select
                      name="currencyInput"
                      className="converter__select"
                      value={currencyInput.type}
                      onChange={typeChangeHandler}
                  >
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CNY">CNY</option>
                  </select>
                  <span className="visually-hidden">валюта</span>
                </label>
              </div>
            </div>

            <div className="converter__field">
              <label htmlFor="currency-input">
                <h3 className="converter__field-title">Хочу приобрести</h3>
              </label>
              <div className="converter__input-wrapper">
                <input
                    id="currency-output"
                    className="converter__input"
                    name="currencyOutput"
                    type="number"
                    min="0"
                    step="any"
                    value={currencyOutput.amount}
                    onChange={valueChangeHandler}
                />

                <label>
                  <select
                      name="currencyOutput"
                      className="converter__select"
                      value={currencyOutput.type}
                      onChange={typeChangeHandler}
                  >
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CNY">CNY</option>
                  </select>
                  <span className="visually-hidden">валюта</span>
                </label>
              </div>
            </div>
          </div>

          <div id="calendar">
            {children}
          </div>

          <button type="submit" className="converter__button">Сохранить результат</button>
        </form>
      </section>
  );
};

Converter.propTypes = {
  state: PropTypes.shape({
    currencyInput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
    currencyOutput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
  }).isRequired,
  children: PropTypes.element.isRequired,
  submitHandler: PropTypes.func.isRequired,
  typeChangeHandler: PropTypes.func.isRequired,
  valueChangeHandler: PropTypes.func.isRequired
};

Converter.displayName = `Converter`;
export default withConverter(Converter);
