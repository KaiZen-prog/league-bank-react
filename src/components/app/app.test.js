import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {InitialState} from '../../__mocks__/mocks';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
import App from "./app";

test(`App render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
      .create(
          <Provider store={store}>
            <App/>
          </Provider>
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
