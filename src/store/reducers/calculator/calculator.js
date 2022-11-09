import { ActionType } from '../../actions/calculator';
import {QUANTITY_MONTH, REQUIRED_INCOME} from '../../../const';

const initialState = {
  step: 1,
  purpose: 'none',
  paramsCredit: {},

  cost: 0,
  initialFee: 0,
  term: 0,

  maternalCapital: false,
  casco: false,
  lifeInsurance: false,

  creditAmount: 0,
  percent: 0,
  monthlyPayment: null,
  requiredIncome: null,

  isFormValid: true,
};

const getCreditAmount = (state) => state.cost
  - state.initialFee
  - (state.maternalCapital ? state.paramsCredit.maternalCapitalValue : 0);

const getInterestRate = (state) => {
  let percent = 0;

  if (state.purpose === 'mortgage') {
    state.initialFee >=
    (state.cost * state.paramsCredit.percent.amountForSpecialPercent) / 100
      ? percent = state.paramsCredit.percent.specialPercent.toFixed(2)
      : percent = state.paramsCredit.percent.default.toFixed(2);
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

    percent = percent.toFixed(2);
  }

  return percent;
};

const getMonthlyPayment = (percent, state) => {
  const monthlyPercent = percent / 100 / QUANTITY_MONTH;

  return Math.floor(
    (state.creditAmount * monthlyPercent) /
    (1 - 1 / Math.pow(1 + monthlyPercent, state.term * QUANTITY_MONTH)),
  );
};

const getNewCostAndInitialFee = (state, evtID) => {
  let newCost =
    state.cost === 'Некорректное значение'
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

  const initialFee = state.cost === 'Некорректное значение'
    ? Math.round((newCost * state.paramsCredit.minInitialFee) / 100)
    : Math.round((newCost * state.initialFee) / state.cost);

  return [newCost, initialFee];
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CREDIT_DATA: {
      const creditAmount = getCreditAmount(state);
      const percent = getInterestRate(state);
      const monthlyPayment = getMonthlyPayment(percent, state);
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
        term: action.payload.term,

        maternalCapital: action.payload.maternalCapital,
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
