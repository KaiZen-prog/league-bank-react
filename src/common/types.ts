import React from 'react';

export type FormSubmitEventHandler = React.FormEventHandler<HTMLFormElement>
export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>
export type FocusEventHandler = React.FocusEventHandler<HTMLElement>
export type MouseEventHandler = React.MouseEventHandler<HTMLElement>
export type KeyboardEventHandler = React.KeyboardEventHandler<HTMLElement>
export type TouchEventHandler = React.TouchEvent<HTMLElement>

type Slide = {
  name: string,
  slogan: string,
  link: string
};

export type MainSlideType = Slide & {
  linkHref: string,
}

export type ServicesSlideType = Slide & {
  tabName: string,
  features: Array<string>,
  text?: {
    firstLine?: string,
    secondLine?: string,
    link?: string,
  }
};

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

export type Conversion = {
  id: string,
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

export type Review = {
  id: number,
  date: string,
  text: string,
  rating: number,
  author: {
    name: string,
    surname: string
  }
};

export type ConverterInputParamsType = {
  id: string,
  name: string
}

export type ExchangeRate = {
  date: string,
  exchangeRate: exchangeRateType
};

export type InitialReviewsState = {
  reviews: Array<Review>,
  isFetchingData: boolean
};

export type InitialConverterState = {
  currentDate: string,
  isFetchingData: boolean,
  exchangeRates: Record<string, exchangeRateType>,
  conversionHistory: Array<Conversion>
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
