import {exchangeRate} from '../../common/types';

export const ActionType = {
  CHANGE_CURRENT_DATE: 'CHANGE_CURRENT_DATE',
  START_FETCHING_EXCHANGE_RATES: 'START_FETCHING_EXCHANGE_RATES',
  FINISH_FETCHING_EXCHANGE_RATES: 'FINISH_FETCHING_EXCHANGE_RATES',
  PASTE_EXCHANGE_RATE: 'PASTE_EXCHANGE_RATE',
  ADD_CONVERSION: 'ADD_CONVERSION',
  DELETE_CONVERSION: 'DELETE_CONVERSION',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
};

export const startFetchingExchangeRates = () => ({
  type: ActionType.START_FETCHING_EXCHANGE_RATES,
});

export const finishFetchingExchangeRates = () => ({
  type: ActionType.FINISH_FETCHING_EXCHANGE_RATES,
});

export const pasteExchangeRate = (exchangeRate: exchangeRate) => ({
  type: ActionType.PASTE_EXCHANGE_RATE,
  payload: exchangeRate,
});
