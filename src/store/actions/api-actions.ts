import axios from 'axios';
import {BASE_URL} from '../../const';
import {AppDispatch} from '../store';
import {pasteExchangeRate, startFetchingExchangeRates, finishFetchingExchangeRates} from './converter';
import {adaptExchangeRatesToApp} from '../../utils/common';
import {APIValues, APIRoutes} from '../../const';

//Добавлен искусственный setTimeout() для демонстрации работы полосы загрузки в блоке Converter
export const loadExchangeRate = (date: string, dispatch: AppDispatch) => {
  const fetchData = async () => {
    try {
      dispatch(startFetchingExchangeRates());
      await axios.get(`${BASE_URL}${APIRoutes.HISTORICAL}${date}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
        .then(({data}) => adaptExchangeRatesToApp(data))
        .then((exchangeRates) => dispatch(pasteExchangeRate({date: date, exchangeRate: exchangeRates})))
        .then(() => setTimeout(() => dispatch(finishFetchingExchangeRates()), 3000));
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
};
