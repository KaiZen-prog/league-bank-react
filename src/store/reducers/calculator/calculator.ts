import { ActionType } from '../../actions/calculator';
import {QUANTITY_MONTH, REQUIRED_INCOME} from '../../../const';
import {InitialCalculatorState} from '../../../common/types';

const initialState: InitialCalculatorState = {
  step: 1,
  purpose: 'none',
  paramsCredit: {
    maternalCapitalValue: 0,
    minCreditAmount: 0,
    minInitialFee: 0,
    step : 0,
    type: '',
    minCost: 0,
    maxCost: 0,
    percent: {
      amountForSpecialPercent: 0,
      specialPercent: 0,
      default: 0,
      oneAddition: 0,
      allAdditions: 0
    }
  },

  cost: 0,
  initialFee: 0,
  term: 0,

  maternalCapital: false,
  casco: false,
  lifeInsurance: false,

  creditAmount: 0,
  percent: 0,
  monthlyPayment: 0,
  requiredIncome: 0,

  isFormValid: true,
};

const getCreditAmount = (state: InitialCalculatorState) => state.cost
  - state.initialFee
  - (state.maternalCapital ? state.paramsCredit.maternalCapitalValue : 0);

const getInterestRate = (state: InitialCalculatorState) => {
  let percent = 0;

  if (state.purpose === 'mortgage') {
    state.initialFee >=
    (state.cost * state.paramsCredit.percent.amountForSpecialPercent) / 100
      ? percent = parseInt(state.paramsCredit.percent.specialPercent.toFixed(2))
      : percent = parseInt(state.paramsCredit.percent.default.toFixed(2));
  }

  if (state.purpose === 'car') {
    percent = state.paramsCredit.percent.default;

    if (state.cost >= state.paramsCredit.percent.amountForSpecialPercent) {
      percent = state.paramsCredit.percent.specialPercent;
    }

    if (state.casco || state.lifeInsurance) {
      percent = state.paramsCredit.percent.oneAddition;
    }

    if (state.casco && state.lifeInsurance) {
      percent = state.paramsCredit.percent.allAdditions;
    }

    percent = parseInt(percent.toFixed(2));
  }

  return percent;
};

const getMonthlyPayment = (percent: number, creditAmount: number, state: InitialCalculatorState) => {
  const monthlyPercent = percent / 100 / QUANTITY_MONTH;

  const result = Math.floor(
    (creditAmount * monthlyPercent) /
    (1 - 1 / Math.pow(1 + monthlyPercent, state.term * QUANTITY_MONTH)),
  );

  return isNaN(result) ? 0 : result;
};

const getNewCostAndInitialFee = (state: InitialCalculatorState, evtID: string) => {
  let newCost: number =
    isNaN(state.cost)
      ? state.paramsCredit.minCost
      : state.cost;

  evtID === 'plus'
    ? (newCost += state.paramsCredit.step)
    : (newCost -= state.paramsCredit.step);

  if (newCost < state.paramsCredit.minCost) {
    newCost = state.paramsCredit.minCost;
  }

  if (newCost > state.paramsCredit.maxCost) {
    newCost = state.paramsCredit.maxCost;
  }

  const initialFee = isNaN(state.cost)
    ? Math.round((newCost * state.paramsCredit.minInitialFee) / 100)
    : Math.round((newCost * state.initialFee) / state.cost);

  return [newCost, initialFee];
};

const calculator = (state = initialState, action: {type: string; payload?: any;}) => {
  switch (action.type) {
    case ActionType.SET_CREDIT_DATA: {
      const creditAmount = getCreditAmount(state);
      const percent = getInterestRate(state);
      const monthlyPayment = getMonthlyPayment(percent, creditAmount, state);
      const requiredIncome = Math.floor((monthlyPayment * 100) / REQUIRED_INCOME);

      return Object.assign({}, state, {
        creditAmount: creditAmount,
        percent: percent,
        monthlyPayment: monthlyPayment,
        requiredIncome: requiredIncome,
      });
    }

    case ActionType.CHANGE_PURPOSE: {
      return Object.assign({}, state, {
        step: action.payload.step,
        purpose: action.payload.purpose,
        paramsCredit: action.payload.paramsCredit,

        cost: action.payload.cost,
        initialFee: action.payload.initialFee,
        term: action.payload.term
      });
    }

    case ActionType.CHANGE_COST: {
      const [cost, initialFee] = getNewCostAndInitialFee (state, action.payload);

      return Object.assign({}, state, {
        cost: cost,
        initialFee: initialFee,
      });
    }

    case ActionType.CHANGE_INITIAL_FEE: {
      const initialFee = (action.payload * state.paramsCredit.minInitialFee) / 100;

      return Object.assign({}, state, {
        initialFee: initialFee,
      });
    }

    case ActionType.CHANGE_FIELD_VALUE: {
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value,
      });
    }

    case ActionType.CHANGE_ADDITIONAL: {
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value,
      });
    }

    case ActionType.CHANGE_STEP: {
      return Object.assign({}, state, {
        step: action.payload,
      });
    }

    case ActionType.CLOSE_POPUP: {
      return Object.assign({}, state, {
        step: action.payload.step,
        purpose: action.payload.purpose,
      });
    }
  }

  return state;
};

export { calculator };
