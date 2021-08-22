import {pasteExchangeRate} from "./actions";
import {APIValues} from "../const";


export const loadExchangeRate = (date, callback = () => {}) => (dispatch, _getState, api) => (
  api.get(`historical/${date}.json?app_id=${APIValues.ID}`)
    .then(({data}) => {
      dispatch(pasteExchangeRate({
        USD: APIValues.BASE_RATE,
        RUB: data.rates.RUB,
        EUR: data.rates.EUR,
        GBP: data.rates.GBP,
        CNY: data.rates.CNY,
      }));
    })
    .then(() => {
      callback();
    })
);
