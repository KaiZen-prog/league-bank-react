import {ActionType} from '../../actions/calculator';
import {InitialCalculatorState} from '../../../common/types';

const initialState: InitialCalculatorState = {
  step: 1,
  purpose: 'none',
  creditParams: {
    maternalCapitalValue: 0,
    minCreditAmount: 0,
    minInitialFee: 0,
    costStep : 0,
    type: '',
    minCost: 0,
    maxCost: 0,
    percent: {
      amountForSpecialPercent: 0,
      specialPercent: 0,
      defaultPercent: 0,
      oneAddition: 0,
      allAdditions: 0
    }
  },

  cost: 0,
  initialFee: 0,
  term: 0,

  isMaternalCapital: false,
  isCasco: false,
  isLifeInsurance: false,

  creditAmount: 0,
  percent: 0,
  monthlyPayment: 0,
  requiredIncome: 0,

  isFormValid: true,
};

const calculator = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {
    case ActionType.SET_CREDIT_DATA: {
      return {
        ...state,
        creditAmount: action.payload.creditAmount,
        percent: action.payload.percent,
        monthlyPayment: action.payload.monthlyPayment,
        requiredIncome: action.payload.requiredIncome
      };
    }

    case ActionType.CHANGE_PURPOSE: {
      return {
        ...state,
        step: action.payload.step,
        purpose: action.payload.purpose,
        creditParams: action.payload.creditParams,
        cost: action.payload.cost,
        initialFee: action.payload.initialFee,
        term: action.payload.term
      };
    }

    case ActionType.CHANGE_COST: {
      return {
        ...state,
        cost: action.payload.cost,
        initialFee: action.payload.initialFee
      };
    }

    case ActionType.CHANGE_INITIAL_FEE: {
      return {
        ...state,
        initialFee: action.payload
      };
    }

    case ActionType.CHANGE_FIELD_VALUE: {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    }

    case ActionType.CHANGE_ADDITIONAL: {
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    }

    case ActionType.CHANGE_STEP: {
      return {
        ...state,
        step: action.payload
      };
    }

    case ActionType.RESET_CALCULATOR: {
      return {
        ...state,
        step: action.payload.step,
        purpose: action.payload.purpose
      };
    }
  }

  return state;
};

export {calculator};
