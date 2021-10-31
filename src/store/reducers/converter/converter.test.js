import {converter} from './converter';
import {ActionType} from "../../actions";
import {InitialState, mockDate, mockExchangeRate} from "../../../mocks/test-mocks";


describe(`converter reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(converter(undefined, {})).toEqual({
      date: InitialState.CONVERTER.date,
      exchangeRate: ``
    });
  });

  it(`Reducer should change the date`, () => {
    expect(converter({date: InitialState.CONVERTER.date}, {
      type: ActionType.CHANGE_DATE,
      payload: mockDate,
    })).toEqual({
      date: mockDate
    });
  });

  it(`Reducer should paste exchange rate`, () => {
    expect(converter({exchangeRate: InitialState.CONVERTER.exchangeRate}, {
      type: ActionType.PASTE_EXCHANGE_RATE,
      payload: mockExchangeRate,
    })).toEqual({
      exchangeRate: mockExchangeRate
    });
  });
});
