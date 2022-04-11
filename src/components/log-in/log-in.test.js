import React, {createRef} from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import Login from "./index";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const noop = () => {};

describe(`Login render correctly`, () => {
  const store = mockStore(InitialState);

  it(`Login closed`, () =>{
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Login
                  passwordInputRef={createRef()}
                  isLogInOpened={false}
                  onLogInClosure={noop}
                  onLogInFieldChange={noop}
                  onPasswordShow={noop}
                  onPasswordHide={noop}
                />
              </Router>
            </Provider>
        ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Login opened`, () =>{
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Login
                  passwordInputRef={createRef()}
                  isLogInOpened={true}
                  onLogInClosure={noop}
                  onLogInFieldChange={noop}
                  onPasswordShow={noop}
                  onPasswordHide={noop}
                />
              </Router>
            </Provider>
        ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
