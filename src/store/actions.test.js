import * as actions from './actions';
import {InitialState, mockDate, mockExchangeRate} from '../mocks/test-mocks';

const ActionType = actions.ActionType;
const mockConversion = InitialState.CONVERSION_HISTORY[0];

describe(`Actions work correctly`, () => {
  it(`Action changeDate works correctly`, () => {
    expect(actions.changeDate(mockDate)).toEqual({
      type: ActionType.CHANGE_DATE,
      payload: mockDate
    });
  });

  it(`Action pasteExchangeRate works correctly`, () => {
    expect(actions.pasteExchangeRate(mockExchangeRate)).toEqual({
      type: ActionType.PASTE_EXCHANGE_RATE,
      payload: mockExchangeRate
    });
  });

  it(`Action addConversion works correctly`, () => {
    expect(actions.addConversion(mockConversion)).toEqual({
      type: ActionType.ADD_CONVERSION,
      payload: mockConversion
    });
  });

  it(`Action clearHistory works correctly`, () => {
    expect(actions.clearHistory()).toEqual({
      type: ActionType.CLEAR_HISTORY,
      payload: []
    });
  });
});
