import {conversionHistory} from './conversion-history';
import {ActionType} from "../../actions";
import {InitialState} from "../../../mocks/test-mocks";

describe(`conversionHistory reducer work correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(conversionHistory(undefined, {})).toEqual({
      conversionHistory: [],
    });
  });

  it(`Reducer should add a transaction`, () => {
    expect(conversionHistory({conversionHistory: []}, {
      type: ActionType.ADD_CONVERSION,
      payload: InitialState.CONVERSION_HISTORY[0],
    })).toEqual({
      conversionHistory: [InitialState.CONVERSION_HISTORY[0]]
    });
  });

  it(`Reducer should clear history`, () => {
    expect(conversionHistory({conversionHistory: InitialState.CONVERSION_HISTORY}, {
      type: ActionType.CLEAR_HISTORY,
      payload: [],
    })).toEqual({
      conversionHistory: []
    });
  });
});
