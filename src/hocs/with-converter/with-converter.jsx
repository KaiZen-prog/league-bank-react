import { connect } from 'react-redux';
import { addConversion, changeDate } from '../../store/actions';
import moment from 'moment';
import React from 'react';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import { loadExchangeRate } from '../../store/api-actions';
import { FormFields, Currencies, FLOAT_COEFFICIENT } from '../../const';
import PropTypes from 'prop-types';

export const withConverter = (Component) => {
  class WithCurrencyConverter extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        exchangeRate: props.exchangeRate,
        currencyInput: {
          type: Currencies.RUB,
          amount: 0,
        },
        currencyOutput: {
          type: Currencies.USD,
          amount: 0,
        },
      };

      this.submitHandler = this.submitHandler.bind(this);
      this.typeChangeHandler = this.typeChangeHandler.bind(this);
      this.valueConversion = this.valueConversion.bind(this);
      this.conversionFromUSD = this.conversionFromUSD.bind(this);
      this.conversionToUSD = this.conversionToUSD.bind(this);
      this.valueChangeHandler = this.valueChangeHandler.bind(this);
      this.dateChangeHandler = this.dateChangeHandler.bind(this);
    }

    componentDidMount() {
      this.exchangeRateUpdate(this.props.date);
    }

    submitHandler(evt) {
      evt.preventDefault();
      this.props.addTransaction({
        date: moment(this.props.date).format('DD.MM.YYYY'),
        currencyInput: this.state.currencyInput,
        currencyOutput: this.state.currencyOutput,
      });
    }

    typeChangeHandler(evt) {
      const { name, value } = evt.target;
      const inputAmount = this.state.currencyInput.amount;

      if (value === this.state.currencyInput.type || value === this.state.currencyOutput.type) {
        switch (name) {
          case FormFields.INPUT: {
            this.setState({
              currencyInput: {
                type: value,
                amount: inputAmount,
              },
              currencyOutput: {
                type: value,
                amount: inputAmount,
              },
            });
            return;
          }

          case FormFields.OUTPUT: {
            this.setState({
              currencyOutput: {
                type: value,
                amount: inputAmount,
              },
            });
            return;
          }
        }
      }

      this.setState(
        (prevState) => ({
          [name]: Object.assign({}, prevState[name], { type: value }),
        }),
        () => {
          this.valueConversion(FormFields.INPUT, inputAmount);
        },
      );
    }

    conversionToUSD(name, value) {
      return (
        Math.floor((value / this.state.exchangeRate[this.state[name].type]) * FLOAT_COEFFICIENT) /
        FLOAT_COEFFICIENT
      );
    }

    conversionFromUSD(name, value) {
      return (
        Math.floor(value * this.state.exchangeRate[this.state[name].type] * FLOAT_COEFFICIENT) /
        FLOAT_COEFFICIENT
      );
    }

    valueConversion(name, value) {
      if (name === FormFields.INPUT) {
        this.entryField = FormFields.INPUT;
        this.outputField = FormFields.OUTPUT;
      } else {
        this.entryField = FormFields.OUTPUT;
        this.outputField = FormFields.INPUT;
      }

      const convertedToUSD = this.conversionToUSD(this.entryField, value);
      const result = this.conversionFromUSD(this.outputField, convertedToUSD);

      this.setState((prevState) => ({
        [this.outputField]: Object.assign({}, prevState[this.outputField], { amount: result }),
      }));
    }

    valueChangeHandler(evt) {
      const { name, value } = evt.target;
      this.setState((prevState) => ({
        [name]: Object.assign({}, prevState[name], {
          amount: value === '' ? '' : Math.floor(value * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT,
        }),
      }));

      this.valueConversion(name, value);
    }

    exchangeRateUpdate(date) {
      this.props.loadExchangeRate(date, () => {
        this.setState({ exchangeRate: this.props.exchangeRate }, () => {
          this.valueConversion(FormFields.INPUT, this.state[FormFields.INPUT].amount);
        });
      });
    }

    dateChangeHandler(date) {
      const formatDate = moment(date).format('YYYY-MM-DD');
      this.props.changeDate(formatDate);
      this.exchangeRateUpdate(formatDate);
    }

    render() {
      const state = this.state;

      return (
        <Component
          state={state}
          date={this.props.date}
          onChange={(date) => this.dateChangeHandler(date)}
          submitHandler={this.submitHandler}
          typeChangeHandler={this.typeChangeHandler}
          valueChangeHandler={this.valueChangeHandler}
        >
        </Component>
      );
    }
  }

  WithCurrencyConverter.propTypes = {
    date: PropTypes.string,
    exchangeRate: PropTypes.shape({
      USD: PropTypes.number.isRequired,
      RUB: PropTypes.number.isRequired,
      EUR: PropTypes.number.isRequired,
      GBP: PropTypes.number.isRequired,
      CNY: PropTypes.number.isRequired,
    }).isRequired,
    addTransaction: PropTypes.func.isRequired,
    changeDate: PropTypes.func.isRequired,
    loadExchangeRate: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    date: state.CONVERTER.date,
    exchangeRate: state.CONVERTER.exchangeRate,
  });

  const mapDispatchToProps = (dispatch) => ({
    addTransaction(transaction) {
      dispatch(addConversion(transaction));
    },

    changeDate(date) {
      dispatch(changeDate(date));
    },

    loadExchangeRate(date, callback) {
      dispatch(loadExchangeRate(date, callback));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithCurrencyConverter);
};
