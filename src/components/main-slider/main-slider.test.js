import React, {createRef} from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import MainSlider from "./main-slider";
import {InitialState} from "../../mocks/test-mocks";
import {mainSlides} from "../../mocks/mocks";

const noop = () => {};

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

test(`Calculator render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <MainSlider
                sliderRef={createRef()}
                currentSlideNumber={0}
                slidesQuantity={mainSlides.length}
                onSwipeStart={noop}
              />
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
