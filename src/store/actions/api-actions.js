import { pasteExchangeRate } from './converter';
import { adaptExchangeRatesToApp } from '../../utils/common';
import { APIValues, APIRoutes } from '../../const';

export const loadExchangeRate =
  (date, callback = () => {}) =>
    (dispatch, _getState, api) =>
      api
        .get(`${APIRoutes.HISTORICAL}${date}${APIRoutes.ID_PREFIX}${APIValues.ID}`)
        .then(({ data }) => adaptExchangeRatesToApp(data))
        .then((exchangeRates) => dispatch(pasteExchangeRate(exchangeRates)))
        .then(() => {
          callback();
        });
