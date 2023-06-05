import axios from 'axios';
import {BASE_URL} from '../../const';
import {AppDispatch} from '../store';
import {pasteExchangeRate, startFetchingExchangeRates, finishFetchingExchangeRates} from './converter';
import {startFetchingReviews, finishFetchingReviews} from './reviews';
import {adaptExchangeRatesToApp} from '../../utils/common';
import {APIValues, APIRoutes} from '../../const';

//Добавлен искусственный setTimeout() для демонстрации работы полосы загрузки в блоке Converter
export const loadExchangeRate = async (date: string, dispatch: AppDispatch) => {
  try {
    dispatch(startFetchingExchangeRates());
    await axios.get(`${BASE_URL}${APIRoutes.HISTORICAL}${date}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
      .then(({data}) => adaptExchangeRatesToApp(data))
      .then((exchangeRates) => dispatch(pasteExchangeRate({date: date, exchangeRate: exchangeRates})))
      .then(() => setTimeout(() => dispatch(finishFetchingExchangeRates()), 1000));
  } catch (error) {
    console.log(error);
  }
};

export const loadReviews = async (dispatch: AppDispatch) => {
  try {
    dispatch(startFetchingReviews());
    dispatch(finishFetchingReviews());
  } catch (error) {
    console.log(error);
  }
};
