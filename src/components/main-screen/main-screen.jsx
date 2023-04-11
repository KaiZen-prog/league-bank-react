import React, {lazy, Suspense} from 'react';
import RenderLoader from '../render-loader/';
import WithSlider from '../../hocs/with-slider/with-slider';
import Calculator from '../calculator';
import {mainSlides, servicesSlides} from '../../mocks/mocks';
import MainSlider from '../../components/main-slider/index';
import ServicesSlider from '../../components/services-slider/index';

const Map = lazy(() => import('../map'));
const ConverterScreen = lazy(() => import('../converter-screen/converter-screen'));

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
      <Calculator/>
      <Suspense fallback={RenderLoader()}>
        <ConverterScreen/>
      </Suspense>
      <Suspense fallback={RenderLoader()}>
        <Map/>
      </Suspense>
    </>
  );
}

MainScreen.displayName = 'MainScreen';

export default MainScreen;
