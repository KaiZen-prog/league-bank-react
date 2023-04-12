import {pasteExchangeRate, startFetchingExchangeRates, finishFetchingExchangeRates} from './converter';
import {adaptExchangeRatesToApp} from '../../utils/common';
import {APIValues, APIRoutes} from '../../const';
import type {AppDispatch} from '../store';
import {AxiosStatic} from 'axios';

export const loadExchangeRate = (date: string) => (dispatch: AppDispatch, _detState: any, api: AxiosStatic) => {
  dispatch(startFetchingExchangeRates());
  api
    .get(`${APIRoutes.HISTORICAL}${date}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
    .then(({ data }) => adaptExchangeRatesToApp(data))
    .then((exchangeRates) => dispatch(pasteExchangeRate({date: date, exchangeRate: exchangeRates})))
    .then(() => dispatch(finishFetchingExchangeRates()));
};
