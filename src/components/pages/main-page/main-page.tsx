import React, {Suspense} from 'react';
import Slider from '../../blocks/sliders/slider';
import CalculatorAsync from '../../blocks/calculator/calculator.async';
import ReviewsAsync from '../../blocks/reviews/reviews.async';
import MapAsync from '../../blocks/map/map.async';
import {MainSliderParams, ServicesSliderParams} from '../../../const';
import Spinner from '../../UI/spinner';

const MainPage: React.FunctionComponent = () => (
  <>
    <Slider params={MainSliderParams}/>
    <Slider params={ServicesSliderParams}/>

    <Suspense fallback={<Spinner isLoading/>}>
      <CalculatorAsync/>
      <ReviewsAsync/>
      <MapAsync/>
    </Suspense>
  </>
);

MainPage.displayName = 'MainPage';

export default MainPage;
