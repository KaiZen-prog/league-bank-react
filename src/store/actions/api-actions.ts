import {pasteExchangeRate} from './converter';
import {adaptExchangeRatesToApp} from '../../utils/common';
import {APIValues, APIRoutes} from '../../const';
import {exchangeRateType} from '../../common/types';
import type {AppDispatch} from '../store';
import {AxiosStatic} from 'axios';
import moment from 'moment';

export const loadExchangeRate = (date: moment.MomentInput) => (dispatch: AppDispatch, _detState: any, api: AxiosStatic) =>
  api
    .get(`${APIRoutes.HISTORICAL}${date}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
    .then(({ data }) => adaptExchangeRatesToApp(data))
    .then((exchangeRates: exchangeRateType) => dispatch(pasteExchangeRate(exchangeRates)));
