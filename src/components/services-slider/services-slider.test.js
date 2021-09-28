import React, {createRef} from 'react';
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from 'redux-mock-store';
import ServicesSlider from "./services-slider";
import {InitialState} from "../../mocks/test-mocks";
import {servicesSlides} from "../../mocks/mocks";

const noop = () => {};

const mockStore = configureStore();
const history = createMemoryHistory({initialEntries: [`/`]});

test(`Calculator render correctly`, () => {
  const store = mockStore(InitialState);

  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <ServicesSlider
                sliderRef={createRef()}
                currentSlide={servicesSlides[0]}
                currentSlideNumber={0}
                slidesQuantity={servicesSlides.length}
                onTabClick={noop}
                onSwipeStart={noop}
              />
            </Router>
          </Provider>
      ).toJSON();
  expect(tree).toMatchSnapshot();
});
