import {ActionType} from '../../actions/converter';
import {InitialConverterState} from '../../../common/types';
import moment from 'moment';
import {MAX_HISTORY_LENGTH} from '../../../const';
import {getItem} from '../../../services/localstorage';

const dateNow = moment().utc().format('YYYY-MM-DD');

const history = getItem('conversionHistory');

const initialState: InitialConverterState = {
  currentDate: dateNow,
  isFetchingData: false,
  exchangeRates: {},
  conversionHistory: history ? history : []
};

const converter = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_DATE:
      return Object.assign({}, state, {
        currentDate: action.payload,
      });

    case ActionType.START_FETCHING_EXCHANGE_RATES:
      return Object.assign({}, state, {
        isFetchingData: true,
      });

    case ActionType.FINISH_FETCHING_EXCHANGE_RATES:
      return Object.assign({}, state, {
        isFetchingData: false,
      });

    case ActionType.PASTE_EXCHANGE_RATE:
      return Object.assign({}, state, {
        exchangeRates: Object.assign({}, state.exchangeRates, {
          [action.payload.date]: action.payload.exchangeRate
        })
      });

    case ActionType.ADD_CONVERSION:
      return Object.assign({}, state, {
        conversionHistory: [action.payload, ...state.conversionHistory].slice(
          0,
          MAX_HISTORY_LENGTH,
        ),
      });

    case ActionType.DELETE_CONVERSION:
      return Object.assign({}, state, {
        conversionHistory: state.conversionHistory.filter((conversion) => conversion.id !== action.payload)
      });

    case ActionType.CLEAR_HISTORY:
      return Object.assign({}, state, {
        conversionHistory: [],
      });
  }

  return state;
};

export {converter};
