import React from 'react';
import Slider from '../../blocks/sliders/slider/slider';
import Calculator from '../../blocks/calculator';
import Map from '../../blocks/map';
import {mainSlides, servicesSlides} from '../../../mocks/mocks';

const  MainPage: React.FunctionComponent = () => {
  return (
    <>
      <Slider
        slides={mainSlides}
      />
      <Slider
        slides={servicesSlides}
      />
      <Calculator/>
      <Map/>
    </>
  );
}

MainPage.displayName = 'MainPage';

export default MainPage;
