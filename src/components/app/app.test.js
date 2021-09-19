import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {InitialState} from '../../__mocks__/mocks';
import configureStore from 'redux-mock-store';
import App from "./app";
import {createMemoryHistory} from "history";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

test(`App render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App/>
            </Router>
          </Provider>
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
