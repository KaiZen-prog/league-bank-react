import axios from 'axios';
import {BASE_URL} from '../../const';
import {pasteExchangeRate, startFetchingExchangeRates, finishFetchingExchangeRates} from './converter';
import {adaptExchangeRatesToApp} from '../../utils/common';
import {APIValues, APIRoutes} from '../../const';
import type {AppDispatch} from '../store';

export const loadExchangeRate = (date: string) => (dispatch: AppDispatch) => {
  dispatch(startFetchingExchangeRates());
  axios
    .get(`${BASE_URL}${APIRoutes.HISTORICAL}${date}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
    .then(({ data }) => adaptExchangeRatesToApp(data))
    .then((exchangeRates) => dispatch(pasteExchangeRate({date: date, exchangeRate: exchangeRates})))
    .then(() => dispatch(finishFetchingExchangeRates()));
};
