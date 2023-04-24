import React from 'react';
import moment from 'moment';

export type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>
export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>
export type FocusEventHandler = React.FocusEventHandler<HTMLElement>
export type MouseEventHandler = React.MouseEventHandler<HTMLElement>
export type KeyboardEventHandler = React.KeyboardEventHandler<HTMLElement>

type exchangeRateType = {
  USD: number,
  RUB: number,
  EUR: number,
  GBP: number,
  CNY: number,
};

export type ratesData = {
  rates: exchangeRateType
}

export type conversion = {
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

export type exchangeRate = {
  date: string,
  exchangeRate: exchangeRateType
};

export type InitialConverterState = {
  currentDate: moment.MomentInput,
  isFetchingData: boolean,
  exchangeRates: Record<string, exchangeRateType>,
  conversionHistory: Array<conversion>
};

export type InitialCalculatorState = {
  step: number,
  purpose: string
  paramsCredit: {
    maternalCapitalValue: number,
    minCreditAmount: number,
    minInitialFee: number,
    step: number,
    type: string,
    minCost: number,
    maxCost: number,
    percent: {
      amountForSpecialPercent: number,
      specialPercent: number,
      default: number,
      oneAddition: number,
      allAdditions: number
    },
    minTerm?: number,
    maxTerm?: number,
    additionalToCar?: {
      casco: string,
      lifeInsurance: string,
    }
  },

  cost: number,
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
