import axios from 'axios';
import {ratesData} from '../common/types';

export default class OpenExchange {
  private static _URL = 'https://openexchangerates.org/api/historical/';
  private static _IDPrefix = '.json?app_id=d07b14ca2bfd4e14afe52d782af853ca';
  private static _baseRate = 1;

  private static _adaptExchangeRatesToApp(data: ratesData) {
    return {
      USD: this._baseRate,
      RUB: data.rates.RUB,
      EUR: data.rates.EUR,
      GBP: data.rates.GBP,
      CNY: data.rates.CNY,
    };
  }

  static async fetchRates(date: string) {
    return await axios.get(`${this._URL}${date}${this._IDPrefix}`)
      .then((response) => this._adaptExchangeRatesToApp(response.data));
  }
}
