import React, {lazy, Suspense} from 'react';
import RenderLoader from '../render-loader/';
import WithSlider from '../../hocs/with-slider/with-slider';
import Calculator from '../calculator';
import {mainSlides, servicesSlides} from '../../mocks/mocks';
import MainSlider from '../../components/main-slider/index';
import ServicesSlider from '../../components/services-slider/index';
import Converter from '../converter';
import ConversionHistory from '../conversion-history';

const Map = lazy(() => import('../map'));

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
        <Converter/>
        <ConversionHistory/>
        <Map/>
      </Suspense>
    </>
  );
}

MainScreen.displayName = 'MainScreen';

export default MainScreen;
