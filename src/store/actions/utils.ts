import {LoanPercent} from '../../common/types';
import {QUANTITY_MONTH} from '../../const';

export const getCreditAmount = (cost: number, initialFee: number, isMaternalCapital: boolean, maternalCapitalValue: number) => cost
  - initialFee
  - (isMaternalCapital ? maternalCapitalValue : 0);

export const getInterestRate = (isLifeInsurance: boolean, isCasco: boolean, purpose: string, initialFee: number, cost: number, loanPercent: LoanPercent) => {
  let percent = 0;

  if (purpose === 'mortgage') {
    if (initialFee >= (cost * loanPercent.amountForSpecialPercent) / 100) {
      percent = parseInt(loanPercent.specialPercent.toFixed(2), 10);
    } else {
      percent = parseInt(loanPercent.defaultPercent.toFixed(2), 10);
    }
  }

  if (purpose === 'car') {
    percent = loanPercent.defaultPercent;

    if (cost >= loanPercent.amountForSpecialPercent) {
      percent = loanPercent.specialPercent;
    }

    if (isCasco || isLifeInsurance) {
      percent = loanPercent.oneAddition;
    }

    if (isCasco && isLifeInsurance) {
      percent = loanPercent.allAdditions;
    }

    percent = parseInt(percent.toFixed(2),10);
  }

  return percent;
};

export const getMonthlyPayment = (percent: number, creditAmount: number, term: number) => {
  const monthlyPercent = percent / 100 / QUANTITY_MONTH;

  const result = Math.floor(
    (creditAmount * monthlyPercent) /
    (1 - 1 / Math.pow(1 + monthlyPercent, term * QUANTITY_MONTH)),
  );

  return isNaN(result) ? 0 : result;
};

export const getNewCostAndInitialFee = (cost: number, minCost: number, maxCost: number, costStep: number, initialFee: number, minInitialFee: number, evtID: string) => {
  let newCost: number =
    isNaN(cost)
      ? minCost
      : cost;

  if (evtID === 'plus') {
    newCost += costStep;
  } else {
    newCost -= costStep;
  }

  if (newCost < minCost) {
    newCost = minCost;
  }

  if (newCost > maxCost) {
    newCost = maxCost;
  }

  const fee = isNaN(cost)
    ? Math.round((newCost * minInitialFee) / 100)
    : Math.round((newCost * initialFee) / cost);

  return [newCost, fee];
};
