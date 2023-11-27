import {LoanPercent, PurposeParams} from '../../common/types';
import {getCreditAmount, getInterestRate, getMonthlyPayment, getNewCostAndInitialFee} from'./utils';
import {REQUIRED_INCOME} from '../../const';

export const ActionType = {
  SET_CREDIT_DATA: 'SET_CREDIT_DATA',
  CHANGE_PURPOSE: 'CHANGE_PURPOSE',
  CHANGE_COST: 'CHANGE_COST',
  CHANGE_INITIAL_FEE: 'CHANGE_INITIAL_FEE',
  CHANGE_FIELD_VALUE: 'CHANGE_FIELD_VALUE',
  CHANGE_ADDITIONAL: 'CHANGE_ADDITIONAL',
  CHANGE_STEP: 'CHANGE_STEP',
  CLOSE_POPUP: 'CLOSE_POPUP',
};

export const setCreditData = (
  cost: number,
  initialFee: number,
  isMaternalCapital: boolean,
  isLifeInsurance: boolean,
  isCasco: boolean,
  maternalCapitalValue: number,
  purpose: string,
  loanPercent: LoanPercent,
  term: number
) => {
  const creditAmount = getCreditAmount(cost, initialFee, isMaternalCapital, maternalCapitalValue);
  const percent = getInterestRate(isLifeInsurance, isCasco, purpose, initialFee, cost, loanPercent);

  const monthlyPayment = getMonthlyPayment(percent, creditAmount, term);
  const requiredIncome = Math.floor((monthlyPayment * 100) / REQUIRED_INCOME);

  return {
    type: ActionType.SET_CREDIT_DATA,
    payload: {
      creditAmount: creditAmount,
      percent: percent,
      monthlyPayment: monthlyPayment,
      requiredIncome: requiredIncome,
    }
  };
};

export const changeCost = (
  cost: number,
  minCost: number,
  maxCost: number,
  costStep: number,
  initialFee: number,
  minInitialFee: number,
  evtID: string
) => {
  const [newCost, newInitialFee] = getNewCostAndInitialFee (cost, minCost, maxCost, costStep, initialFee, minInitialFee, evtID);
  return {
    type: ActionType.CHANGE_COST,
    payload: {
      cost: newCost,
      initialFee: newInitialFee,
    }
  };
};

export const changePurpose = (step: number, id: string, params: PurposeParams) => ({
  type: ActionType.CHANGE_PURPOSE,
  payload: {
    step: step,
    purpose: id,
    creditParams: params,

    cost: params.minCost,
    initialFee: (params.minCost * params.minInitialFee) / 100,
    term: params.minTerm
  }
});

export const changeStep = (step: number) => ({
  type: ActionType.CHANGE_STEP,
  payload: step
});
