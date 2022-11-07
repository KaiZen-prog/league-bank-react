import React from 'react';
import PropTypes from 'prop-types';
import { withConverter } from '../../hocs/with-converter/with-converter';
import Block from './converter.styled';
import Calendar from '../calendar';

function Converter(props) {
  const { state, date, onChange, submitHandler, typeChangeHandler, valueChangeHandler } = props;

  const { currencyInput, currencyOutput } = state;

  return (
    <Block>
      <Block.Header>Конвертер валют</Block.Header>
      <Block.Form method="post" action="#" onSubmit={submitHandler}>
        <Block.FieldWrapper>
          <Block.Field>
            <label htmlFor="currency-input">
              <Block.FieldTitle>У меня есть</Block.FieldTitle>
            </label>
            <Block.InputWrapper>
              <Block.Input
                id="currency-input"
                name="currencyInput"
                type="number"
                min="0"
                max="10000000"
                step="any"
                value={currencyInput.amount}
                onChange={valueChangeHandler}
              />

              <Block.Label>
                <Block.Select
                  name="currencyInput"
                  value={currencyInput.type}
                  onChange={typeChangeHandler}
                >
                  <option value="RUB">RUB</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                </Block.Select>
                <span className="visually-hidden">валюта</span>
              </Block.Label>
            </Block.InputWrapper>
          </Block.Field>

          <Block.Field>
            <label htmlFor="currency-input">
              <Block.FieldTitle>Хочу приобрести</Block.FieldTitle>
            </label>
            <Block.InputWrapper>
              <Block.Input
                id="currency-output"
                name="currencyOutput"
                type="number"
                min="0"
                step="any"
                value={currencyOutput.amount}
                onChange={valueChangeHandler}
              />

              <Block.Label>
                <Block.Select
                  name="currencyOutput"
                  value={currencyOutput.type}
                  onChange={typeChangeHandler}
                >
                  <option value="RUB">RUB</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="CNY">CNY</option>
                </Block.Select>
                <span className="visually-hidden">валюта</span>
              </Block.Label>
            </Block.InputWrapper>
          </Block.Field>
        </Block.FieldWrapper>

        <Calendar date={date} onChange={onChange}/>

        <Block.Button type="submit">
          Сохранить результат
        </Block.Button>
      </Block.Form>
    </Block>
  );
}

Converter.propTypes = {
  state: PropTypes.shape({
    currencyInput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }),
    currencyOutput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }),
  }).isRequired,
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  typeChangeHandler: PropTypes.func.isRequired,
  valueChangeHandler: PropTypes.func.isRequired,
};

Converter.displayName = 'Converter';

export { Converter };
export default withConverter(Converter);
