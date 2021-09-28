import React from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import MainSlide from "./main-slide";
import {InitialState} from "../../mocks/test-mocks";
import {mainSlides} from "../../mocks/mocks";

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

test(`Calculator render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MainSlide
                currentSlide={mainSlides[0]}
              />
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
