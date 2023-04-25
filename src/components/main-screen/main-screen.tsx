import React, {lazy, Suspense} from 'react';
import RenderLoader from '../render-loader/';
import Slider from '../slider/slider';
import Calculator from '../calculator';
import {mainSlides, servicesSlides} from '../../mocks/mocks';

const Map = lazy(() => import('../map'));

const  MainScreen: React.FunctionComponent = () => {
  return (
    <>
      <Slider
        slides={mainSlides}
      />
      <Slider
        slides={servicesSlides}
      />
      <Calculator/>
      <Suspense fallback={RenderLoader()}>
        <Map/>
      </Suspense>
    </>
  );
}

MainScreen.displayName = 'MainScreen';

export default MainScreen;
