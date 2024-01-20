import {CurrencyInput, ExchangeRatesType} from '../../common/types';
import {v4 as uuidv4} from 'uuid';

export const ActionType = {
  PASTE_NEW_EXCHANGE_RATES: 'PASTE_NEW_EXCHANGE_RATES',
  ADD_CONVERSION: 'ADD_CONVERSION',
  DELETE_CONVERSION: 'DELETE_CONVERSION',
  CHANGE_CURRENT_DATE: 'CHANGE_CURRENT_DATE',
  CLEAR_CONVERSION_HISTORY: 'CLEAR_CONVERSION_HISTORY',
};

export const pasteNewExchangeRates = (exchangeRates: ExchangeRatesType) => ({
  type: ActionType.PASTE_NEW_EXCHANGE_RATES,
  payload: exchangeRates,
});

export const addConversion = (date: string, input: CurrencyInput, output: CurrencyInput) => ({
  type: ActionType.ADD_CONVERSION,
  payload: {
    id: uuidv4(),
    date: date,
    currencyInput: input,
    currencyOutput: output,
  }
});

export const deleteConversion = (id: string) => ({
  type: ActionType.DELETE_CONVERSION,
  payload: id
});

export const changeCurrentDate = (date: string) => ({
  type: ActionType.CHANGE_CURRENT_DATE,
  payload: date
});

export const clearConversionHistory = () => ({
  type: ActionType.CLEAR_CONVERSION_HISTORY,
});
