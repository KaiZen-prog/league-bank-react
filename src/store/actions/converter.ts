import {exchangeRate} from '../../common/types';

export const ActionType = {
  CHANGE_CURRENT_DATE: 'CHANGE_CURRENT_DATE',
  FETCH_DATA: 'FETCH_DATA',
  PASTE_EXCHANGE_RATE: 'PASTE_EXCHANGE_RATE',
  ADD_CONVERSION: 'ADD_CONVERSION',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
};

export const changeDate = (date: string) => ({
  type: ActionType.CHANGE_CURRENT_DATE,
  payload: date,
});

export const pasteExchangeRate = (exchangeRate: exchangeRate) => ({
  type: ActionType.PASTE_EXCHANGE_RATE,
  payload: exchangeRate,
});
