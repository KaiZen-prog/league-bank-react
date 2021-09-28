/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import {Converter} from "./Converter";
import {InitialState} from "../../mocks/test-mocks";
import {Currencies} from "../../const";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const noop = () => {};

test(`Converter render correctly`, () => {
  const store = mockStore(InitialState);

  const state = {
    currencyInput: {
      type: Currencies.RUB,
      amount: 0,
    },
    currencyOutput: {
      type: Currencies.USD,
      amount: 0,
    },
  };

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Converter
                state={state}
                date={InitialState.CONVERTER.date}
                onChange={noop}
                submitHandler={noop}
                typeChangeHandler={noop}
                valueChangeHandler={noop}
              />
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
