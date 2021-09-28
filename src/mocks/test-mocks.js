import moment from "moment";

export const InitialState = {
  CONVERSION_HISTORY: {
    conversionHistory: [
      {
        date: `18.09.2021`,
        currencyInput: {
          type: `USD`,
          amount: 6549
        },
        currencyOutput: {
          type: `EUR`,
          amount: 5585.07
        }
      },
      {
        date: `19.09.2021`,
        currencyInput: {
          type: `CNY`,
          amount: 23
        },
        currencyOutput: {
          type: `RUB`,
          amount: 258.59
        }
      },
      {
        date: `20.09.2021`,
        currencyInput: {
          type: `EUR`,
          amount: 12458
        },
        currencyOutput: {
          type: `GBP`,
          amount: 10694.16
        }
      },
      {
        date: `13.09.2021`,
        currencyInput: {
          type: `CNY`,
          amount: 654
        },
        currencyOutput: {
          type: `RUB`,
          amount: 7363.93
        }
      },
      {
        date: `15.09.2021`,
        currencyInput: {
          type: `EUR`,
          amount: 105
        },
        currencyOutput: {
          type: `GBP`,
          amount: 89.6
        }
      },
      {
        date: `20.09.2021`,
        currencyInput: {
          type: `RUB`,
          amount: 105
        },
        currencyOutput: {
          type: `USD`,
          amount: 1.43
        }
      }
    ]
  },

  CONVERTER: {
    date: moment().utc().format(`YYYY-MM-DD`),
    exchangeRate: {
      USD: 1,
      RUB: 72.8797,
      EUR: 0.852813,
      GBP: 0.727776,
      CNY: 6.4662
    }
  }
};
