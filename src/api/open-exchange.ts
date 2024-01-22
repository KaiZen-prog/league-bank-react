import axios from 'axios';
import {ratesData} from '../common/types';
import {getSevenDates} from '../common/utils';

export default class OpenExchange {
  private static _URL = 'https://openexchangerates.org/api/historical/';
  private static _IDPrefix = '.json?app_id=d07b14ca2bfd4e14afe52d782af853ca';
  private static _baseRate = 1;

  private static _adaptExchangeRatesToApp(date: string, data: ratesData) {
    return {
      [date]: {
        USD: this._baseRate,
        RUB: data.rates.RUB,
        EUR: data.rates.EUR,
        KZT: data.rates.KZT,
        GBP: data.rates.GBP,
        CNY: data.rates.CNY,
      }
    };
  }

  static async fetchRates(date: string) {
    return await axios.get(`${this._URL}${date}${this._IDPrefix}`)
      .then((response) => this._adaptExchangeRatesToApp(date, response.data));
  }

  static async fetchLastWeekRates() {
    const dates = getSevenDates();

    return Object.fromEntries(
      await Promise.all(
        dates.map(async (date) => {
          const response = await this.fetchRates(date);
          const key = Object.keys(response)[0];

          return [key, response[key]];
        })
      )
    );
  }
}
