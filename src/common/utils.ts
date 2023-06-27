import {DIGIT_SPACE, FLOAT_COEFFICIENT} from '../const';
import {ExchangeRatesAPI} from '../api/open-exchange';
import {ratesData} from './types';

export const getPreviousElement = (array: Array<any>, element: any) =>
  array[(array.indexOf(element) + array.length - 1) % array.length];

export const getNextElement = (array: Array<any>, element: any) =>
  array[(array.indexOf(element) + 1) % array.length];

export const shakeEffect = (element: any) => {
  element.style.animation = `shake ${600 / 1000}s`;
  setTimeout(() => {
    element.style.animation = '';
  }, 600);
};

export const conversionToUSD = (value: number, exchangeRate: number) => {
  return exchangeRate === 0 ? 0 : Math.floor((value / exchangeRate) * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;
};

export const conversionFromUSD = (value: number, exchangeRate: number) =>
  Math.floor(value * exchangeRate * FLOAT_COEFFICIENT) / FLOAT_COEFFICIENT;

export const divideNumberToSpace = (num: number) => {
  const str = String(num);

  if (str.length <= DIGIT_SPACE) {
    return str;
  }

  let space = 0;
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (space === 3) {
      result = ` ${result}`;
      space = 0;
    }

    result = str.charAt(i) + result;
    space++;
  }

  return result;
};

export const setTermLine = (term: number) => {
  if (term > 10 && term < 20) {
    return `${term} лет`;
  }

  switch (term.toString().substr(-1)) {
    case '1':
      return `${term} год`;

    case '2':
      return `${term} года`;

    case '3':
      return `${term} года`;

    case '4':
      return `${term} года`;

    default:
      return `${term} лет`;
  }
};

export const adaptExchangeRatesToApp = (data: ratesData) => ({
  USD: ExchangeRatesAPI.baseRate,
  RUB: data.rates.RUB,
  EUR: data.rates.EUR,
  GBP: data.rates.GBP,
  CNY: data.rates.CNY,
});
