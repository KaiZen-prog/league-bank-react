import moment from 'moment';

export type exchangeRateType = Record<string, number>;

type conversion = {
  date: string,
  currencyInput: {
    type: string,
    amount: number
  },
  currencyOutput: {
    type: string,
    amount: number
  }
};

export type InitialConverterState = {
  date: moment.MomentInput,
  exchangeRate: Record<string, number>,
  conversionHistory: Array<conversion>,
}

export type InitialCalculatorState = {
  step: number,
  purpose: string
  paramsCredit: {
    maternalCapitalValue: number,
    minInitialFee: number,
    step: number,
    minCost: number,
    maxCost: number,
    percent: {
      amountForSpecialPercent: number,
      specialPercent: number,
      default: number,
      oneAddition: number,
      allAdditions: number
    }
  },

  cost: number | string,
  initialFee: number,
  term: number,

  maternalCapital: boolean,
  casco: boolean,
  lifeInsurance: boolean,

  creditAmount: number,
  percent: number,
  monthlyPayment: number | null,
  requiredIncome: number | null,

  isFormValid: boolean,
}
