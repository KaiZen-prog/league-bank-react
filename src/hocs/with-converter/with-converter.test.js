import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import {withConverter} from "./with-converter";
import {InitialState} from '../../mocks/test-mocks';

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withConverter(MockComponent);

it(`withConverter is rendered correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MockComponentWrapped
            date={InitialState.CONVERTER.date}
            exchangeRate={InitialState.CONVERTER.exchangeRate}
            addConversion={noop}
            changeDate={noop}
            loadExchangeRate={noop}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

MockComponent.propTypes = {
  children: PropTypes.node,
};
