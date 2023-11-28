import React from 'react';
import Slider from '../../blocks/sliders/slider/slider';
import Calculator from '../../blocks/calculator';
import Reviews from '../../blocks/reviews';
import Map from '../../blocks/map';
import {MainSliderParams, ServicesSliderParams} from '../../../const';

const MainPage: React.FunctionComponent = () => (
  <>
    <Slider params={MainSliderParams}/>
    <Slider params={ServicesSliderParams}/>
    <Calculator/>
    <Reviews/>
    <Map/>
  </>
);

MainPage.displayName = 'MainPage';

export default MainPage;
