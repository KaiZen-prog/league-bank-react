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

export type CurrencyInput = {
  type: string,
  amount: number
}

export type ConverterInputs = {
  currencyInput: CurrencyInput,
  currencyOutput: CurrencyInput,
}

export type exchangeRate = {
  USD: number,
  RUB: number,
  EUR: number,
  GBP: number,
  CNY: number,
};

export type ratesData = {
  rates: exchangeRate
}

export type Conversion = {
  id: string,
  date: string,
  currencyInput: CurrencyInput,
  currencyOutput: CurrencyInput
};

export type Review = {
  id: number,
  date: string,
  text: string,
  rating: number,
  author: string
};

export type ConverterInputParamsType = {
  id: string,
  name: string
}

export type ExchangeRate = {
  date: string,
  exchangeRate: exchangeRate
};

export type InitialReviewsState = {
  reviews: Array<Review>,
  isFetchingData: boolean
};

export type InitialConverterState = {
  currentDate: string,
  isFetchingData: boolean,
  exchangeRates: Record<string, exchangeRate>,
  conversionHistory: Array<Conversion>
};

export type LoanPercent = {
  amountForSpecialPercent: number,
  specialPercent: number,
  defaultPercent: number,
  oneAddition: number,
  allAdditions: number
};

export type CreditParams = {
  maternalCapitalValue: number,
  minCreditAmount: number,
  minInitialFee: number,
  costStep: number,
  type: string,
  minCost: number,
  maxCost: number,
  percent: LoanPercent,
  minTerm?: number,
  maxTerm?: number,
  additionalToCar?: {
    casco: string,
    lifeInsurance: string,
  }
};

export type PurposeParams = {
  maxTerm: number,
  maternalCapitalValue: number,
  costStep: number,
  minTerm: number,
  maxCost: number,
  minCreditAmount: number,
  type: string,
  minInitialFee: number,
  minCost: number,
  percent: {
    amountForSpecialPercent: number,
    specialPercent: number,
    defaultPercent: number
  }
} | {
  maxTerm: number,
  costStep: number,
  minTerm: number,
  additionalToCar: {
    lifeInsurance: string,
    casco: string
  }, maxCost: number,
  minCreditAmount: number,
  type: string,
  minInitialFee: number,
  minCost: number,
  percent: {
    amountForSpecialPercent: number,
    oneAddition: number,
    specialPercent: number,
    defaultPercent: number,
    allAdditions: number
  }
};

export type InitialCalculatorState = {
  step: number,
  purpose: string
  creditParams: CreditParams,

  cost: number,
  initialFee: number,
  term: number,

  isMaternalCapital: boolean,
  isCasco: boolean,
  isLifeInsurance: boolean,

  creditAmount: number,
  percent: number,
  monthlyPayment: number | null,
  requiredIncome: number | null,

  isFormValid: boolean,
}
