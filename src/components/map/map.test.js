import React from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import Map from "./map";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

test(`Calculator render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Map/>
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
