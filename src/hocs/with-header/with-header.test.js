import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import withHeader from "./with-header";
import {InitialState} from '../../mocks/test-mocks';

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withHeader(MockComponent);

it(`withHeader is rendered correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MockComponentWrapped/>
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
