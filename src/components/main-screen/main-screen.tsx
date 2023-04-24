import React, {lazy, Suspense} from 'react';
import RenderLoader from '../render-loader/';
import WithSlider from '../../hocs/with-slider/with-slider';
import Calculator from '../calculator';
import {mainSlides, servicesSlides} from '../../mocks/mocks';
import MainSlider from '../main-slider';
import ServicesSlider from '../../components/services-slider/index';

const Map = lazy(() => import('../map'));

const  MainScreen: React.FunctionComponent = () => {
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
        <Map/>
      </Suspense>
    </>
  );
}

MainScreen.displayName = 'MainScreen';

export default MainScreen;
