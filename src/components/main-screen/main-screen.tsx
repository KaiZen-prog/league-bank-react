import React, {lazy, Suspense} from 'react';
import RenderLoader from '../render-loader/';
import WithSlider from '../../hocs/with-slider/with-slider';
import Calculator from '../calculator';
import {mainSlides, servicesSlides} from '../../mocks/mocks';

const Map = lazy(() => import('../map'));

const  MainScreen: React.FunctionComponent = () => {
  return (
    <>
      <WithSlider
        slides={mainSlides}
      />
      <WithSlider
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
