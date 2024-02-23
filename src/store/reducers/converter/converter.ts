import {ActionType} from '../../actions/converter';
import {InitialConverterState} from '../../../common/types';
import {MAX_HISTORY_LENGTH} from '../../../const';
import {getItem} from '../../../services/localstorage';

const history = getItem('conversionHistory');

const initialState: InitialConverterState = {
  currentDate: '',
  exchangeRates: {},
  conversionHistory: history ? history : []
};

const converter = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_DATE:
      return {
        ...state,
        currentDate: action.payload
      };

    case ActionType.PASTE_NEW_EXCHANGE_RATES:
      return {
        ...state,
        exchangeRates: action.payload
      };

    case ActionType.ADD_CONVERSION:
      return {
        ...state,
        conversionHistory: [action.payload, ...state.conversionHistory].slice(0, MAX_HISTORY_LENGTH)
      };

    case ActionType.DELETE_CONVERSION:
      return {
        ...state,
        conversionHistory: state.conversionHistory.filter((conversion) => conversion.id !== action.payload)
      };

    case ActionType.CLEAR_CONVERSION_HISTORY:
      return {
        ...state,
        conversionHistory: []
      };
  }

  return state;
};

export {converter};
