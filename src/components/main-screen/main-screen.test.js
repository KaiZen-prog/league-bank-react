/**
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import MainScreen from "./main-screen";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

test(`ConverterScreen render correctly`, () => {
  const store = mockStore(InitialState);
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MainScreen/>
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
