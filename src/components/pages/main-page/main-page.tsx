import React from 'react';
import Slider from '../../blocks/sliders/slider/slider';
import Calculator from '../../blocks/calculator';
import ReviewsList from '../../blocks/reviews-list';
import Map from '../../blocks/map';
import {mainSlides, servicesSlides} from '../../../__mocks__/mocks';
import ReviewsForm from '../../blocks/reviews-form';

const MainPage: React.FunctionComponent = () => (
  <>
    <Slider
      slides={mainSlides}
    />
    <Slider
      slides={servicesSlides}
    />
    <Calculator/>
    <ReviewsForm/>
    <ReviewsList/>
    <Map/>
  </>
);

MainPage.displayName = 'MainPage';

export default MainPage;
