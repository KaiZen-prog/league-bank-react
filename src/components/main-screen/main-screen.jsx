import React from 'react';
import WithSlider from '../../hocs/with-slider/with-slider';
import Calculator from '../calculator';
import Map from '../map';
import {mainSlides, servicesSlides} from '../../mocks/mocks';
import MainSlider from '../../components/main-slider/index';
import ServicesSlider from '../../components/services-slider/index';
import ConverterScreen from "../converter-screen/converter-screen";

function MainScreen() {
  return (
    <>
      <WithSlider
        Component={MainSlider}
        slides={mainSlides}
      />
      <WithSlider
        Component={ServicesSlider}
        slides={servicesSlides}
        withTabs
      />
      <Calculator />
      <ConverterScreen/>
      <Map />
    </>
  );
}

MainScreen.displayName = 'MainScreen';

export default MainScreen;
