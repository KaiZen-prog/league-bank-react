import { extend } from '../../../utils/common';
import { ActionType } from '../../actions/converter';
import moment from 'moment';
import {MAX_HISTORY_LENGTH} from '../../../const';

const initialState = {
  date: moment().utc().format('YYYY-MM-DD'),
  exchangeRate: {
    USD: 0,
    RUB: 0,
    EUR: 0,
    GBP: 0,
    CNY: 0,
  },
  conversionHistory: [],
};

const converter = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_DATE:
      return extend(state, {
        date: action.payload,
      });

    case ActionType.PASTE_EXCHANGE_RATE:
      return extend(state, {
        exchangeRate: action.payload,
      });

    case ActionType.ADD_CONVERSION:
      return extend(state, {
        conversionHistory: [action.payload, ...state.conversionHistory].slice(
          0,
          MAX_HISTORY_LENGTH,
        ),
      });

    case ActionType.CLEAR_HISTORY:
      return extend(state, {
        conversionHistory: [],
      });
  }

  return state;
};

export { converter };
