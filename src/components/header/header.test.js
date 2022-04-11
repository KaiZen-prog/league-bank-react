import React, {createRef} from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import Header from "./index";
import {InitialState} from "../../mocks/test-mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

const noop = () => {};

describe(`Header render correctly`, () => {
  const store = mockStore(InitialState);

  it(`HeaderNav closed`, () =>{
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Header
                  passwordInputRef={createRef()}
                  isNavOpened={false}
                  onNavOpen={noop}
                  onNavClose={noop}
                  isLogInOpened={false}
                  onLogInOpening={noop}
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

  it(`HeaderNav opened`, () =>{
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Header
                  passwordInputRef={createRef()}
                  isNavOpened={true}
                  onNavOpen={noop}
                  onNavClose={noop}
                  isLogInOpened={false}
                  onLogInOpening={noop}
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

  it(`Header Login opened`, () =>{
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Header
                  passwordInputRef={createRef()}
                  isNavOpened={false}
                  onNavOpen={noop}
                  onNavClose={noop}
                  isLogInOpened={true}
                  onLogInOpening={noop}
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
