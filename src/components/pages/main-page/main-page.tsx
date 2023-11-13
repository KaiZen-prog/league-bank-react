import React from 'react';
import Slider from '../../blocks/sliders/slider/slider';
import Calculator from '../../blocks/calculator';
import Reviews from '../../blocks/reviews';
import Map from '../../blocks/map';
import {mainSlides, servicesSlides} from '../../../__mocks__/mocks';

const MainPage: React.FunctionComponent = () => (
  <>
    <Slider
      slides={mainSlides}
    />
    <Slider
      slides={servicesSlides}
    />
    <Calculator/>
    <Reviews/>
    <Map/>
  </>
);

MainPage.displayName = 'MainPage';

export default MainPage;
