import React from 'react';
import MainSlider from '../main-slider';
import ServicesSlider from '../services-slider';
import Calculator from '../calculator';
import Map from '../map';

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
