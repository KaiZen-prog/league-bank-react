import React, {lazy, Suspense} from 'react';
import RenderLoader from '../../blocks/render-loader';
import Slider from '../../blocks/sliders/slider/slider';
import Calculator from '../../blocks/calculator';
import {mainSlides, servicesSlides} from '../../../mocks/mocks';

const Map = lazy(() => import('../../blocks/map'));

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
      <Suspense fallback={RenderLoader()}>
        <Map/>
      </Suspense>
    </>
  );
}

MainPage.displayName = 'MainPage';

export default MainPage;
