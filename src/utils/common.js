import { APIValues, DIGIT_SPACE } from '../const';

export const extend = (a, b) => Object.assign({}, a, b);

export const getPreviousElement = (array, element) =>
  array[(array.indexOf(element) + array.length - 1) % array.length];

export const getNextElement = (array, element) =>
  array[(array.indexOf(element) + 1) % array.length];

export const Repeat = (props) => {
  const items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return items;
};

export const shakeEffect = (element) => {
  element.style.animation = `shake ${600 / 1000}s`;
  setTimeout(() => {
    element.style.animation = '';
  }, 600);
};

export const divideNumberToSpace = (num) => {
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

export const adaptExchangeRatesToApp = (data) => ({
  USD: APIValues.BASE_RATE,
  RUB: data.rates.RUB,
  EUR: data.rates.EUR,
  GBP: data.rates.GBP,
  CNY: data.rates.CNY,
});
