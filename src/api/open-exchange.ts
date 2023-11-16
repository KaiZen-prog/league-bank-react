import axios from 'axios';
import {ratesData} from '../common/types';

export default class ExchangeRates {
  private static _settings = {
    URL: 'https://openexchangerates.org/api/historical/',
    IDPrefix: '.json?app_id=d07b14ca2bfd4e14afe52d782af853ca',
    baseRate: 1,
  };

  private static _adaptExchangeRatesToApp(data: ratesData) {
    return {
      USD: this._settings.baseRate,
      RUB: data.rates.RUB,
      EUR: data.rates.EUR,
      GBP: data.rates.GBP,
      CNY: data.rates.CNY,
    };
  }

  static async download(date: string) {
    return await axios.get(`${this._settings.URL}${date}${this._settings.IDPrefix}`)
      .then((response) => this._adaptExchangeRatesToApp(response.data));
  }
}
