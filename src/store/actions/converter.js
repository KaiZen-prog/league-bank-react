export const ActionType = {
  CHANGE_DATE: 'CHANGE_DATE',
  PASTE_EXCHANGE_RATE: 'PASTE_EXCHANGE_RATE',
  ADD_CONVERSION: 'ADD_CONVERSION',
  CLEAR_HISTORY: 'CLEAR_HISTORY',
};

export const pasteExchangeRate = (exchangeRate) => ({
  type: ActionType.PASTE_EXCHANGE_RATE,
  payload: exchangeRate,
});

export const clearHistory = () => ({
  type: ActionType.CLEAR_HISTORY,
  payload: [],
});
