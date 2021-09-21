import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import ConversionHistory from "./conversion-history";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const noop = () => {};

test(`ConversionHistory render correctly`, () => {
  const store = mockStore(InitialState);
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <ConversionHistory
                conversionHistory={InitialState.CONVERSION_HISTORY.conversionHistory}
                clear={noop}
              />
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
