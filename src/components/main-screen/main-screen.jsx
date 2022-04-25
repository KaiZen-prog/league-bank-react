import React from 'react';
import MainSlider from '../main-slider/main-slider';
import ServicesSlider from '../services-slider/services-slider';
import Calculator from '../calculator/calculator';
import Map from '../map/map';

function MainScreen() {
  return (
    <>
      <MainSlider />
      <ServicesSlider />
      <Calculator />
      <Map />
    </>
  );
}

MainScreen.displayName = 'MainScreen';

export default MainScreen;
