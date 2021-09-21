import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import ConversionHistoryItem from "./conversion-history-item";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const noop = () => {};

test(`ConversionHistoryItem render correctly`, () => {
  const store = mockStore(InitialState);
  const props = InitialState.CONVERSION_HISTORY.conversionHistory[0];

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <ConversionHistoryItem
                date={props.date}
                inputAmount={props.currencyInput.amount}
                inputCurrency={props.currencyInput.type}
                outputAmount={props.currencyOutput.amount}
                outputCurrency={props.currencyInput.type}
                clear={noop}
              />
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
