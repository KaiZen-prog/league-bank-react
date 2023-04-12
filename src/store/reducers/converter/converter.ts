import { extend } from '../../../utils/common';
import { ActionType } from '../../actions/converter';
import {InitialConverterState} from '../../../common/types';
import moment from 'moment';
import {MAX_HISTORY_LENGTH} from '../../../const';

const dateNow = moment().utc().format('YYYY-MM-DD');

const initialState: InitialConverterState = {
  currentDate: dateNow,
  isFetchingData: false,
  exchangeRates: {},
  conversionHistory: [],
};

const converter = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_DATE:
      return extend(state, {
        currentDate: action.payload,
      });

    case ActionType.START_FETCHING_EXCHANGE_RATES:
      return extend(state, {
        isFetchingData: true,
      });

    case ActionType.FINISH_FETCHING_EXCHANGE_RATES:
      return extend(state, {
        isFetchingData: false,
      });

    case ActionType.PASTE_EXCHANGE_RATE:
      return Object.assign({}, state, {
        exchangeRates: Object.assign({}, state.exchangeRates, {
          [action.payload.date]: action.payload.exchangeRate
        })
      })

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

export {converter};
