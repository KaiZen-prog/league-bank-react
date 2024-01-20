import {DIGIT_SPACE, FLOAT_COEFFICIENT, FormFields, MAX_DAYS} from '../const';
import {ConverterInputs, ExchangeRate} from './types';
import moment from 'moment';

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

export const scaleValue = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) => Math.floor(((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin);

export const generateDatesArray = (arrayLength: number) => {
  const dates = [];
  for (let i = 0; i < arrayLength; i++) {
    const newDate = moment().utc().subtract(i, 'day').format('DD.MM');
    dates.push(newDate);
  }
  return dates;
};

export const conversionToUSD = (value: number, exchangeRate: number, coefficient = FLOAT_COEFFICIENT) =>
  exchangeRate === 0
    ? 0
    : Math.floor((value / exchangeRate) * coefficient) / coefficient;

export const conversionFromUSD = (value: number, exchangeRate: number, coefficient = FLOAT_COEFFICIENT) =>
  Math.floor(value * exchangeRate * coefficient) / coefficient;

export const getConversionResult = (name: string, value: number, currentExchangeRate: ExchangeRate, inputs: ConverterInputs) => {
  let entryField = '';
  let outputField = '';

  if (name === FormFields.INPUT) {
    entryField = FormFields.INPUT;
    outputField = FormFields.OUTPUT;
  } else {
    entryField = FormFields.OUTPUT;
    outputField = FormFields.INPUT;
  }

  const entryExchangeRate: number = currentExchangeRate[inputs[entryField].type];
  const outputExchangeRate: number = currentExchangeRate[inputs[outputField].type];

  const convertedToUSD = conversionToUSD(value, entryExchangeRate);
  return [conversionFromUSD(convertedToUSD, outputExchangeRate), outputField];
};

export const getRangeValuePosition = (max: number, min: number, value: number) => {
  let position = (((max * 100) / value - min) * 100) / (100 - min);

  if (position < 0) {
    position = 0;
  }
  if (position > 100) {
    position = 100;
  }

  return position;
};

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

export const getCurrentDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getSevenDates = () => {
  const sevenDates = [];
  const currentDate = new Date();

  for (let i = 0; i < MAX_DAYS; i++) {
    sevenDates.push(getCurrentDate(currentDate));
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return sevenDates;
};
