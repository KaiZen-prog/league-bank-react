import React from 'react';
import Dots from '../dots';
import MainSlide from '../main-slide';
import {MainSlideType} from '../../../../common/types';
import {Sliders} from '../../../../const';
import {
  MainSliderBlock,
  SlidesContainer
} from './main-slider.styled';

interface Props {
  slides: MainSlideType[],
  currentSlideNumber: number,
  sliderRef: React.RefObject<any>
  onSwipeStart: (...args: any[]) => void;
}

const MainSlider:React.FunctionComponent<Props> = (props) => {
  const {
    slides,
    currentSlideNumber,

    sliderRef,

    onSwipeStart,
  } = props;

  return (
    <MainSliderBlock ref={sliderRef} id={Sliders.main.name}>
      <SlidesContainer
        style={{ left: currentSlideNumber === 0 ? '0' : `-${currentSlideNumber}00%` }}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        {slides.map((slide, index) => (
          <MainSlide key={index} currentSlide={slide} />
        ))}
      </SlidesContainer>

      <Dots
        slides={slides}
        currentSlideNumber={currentSlideNumber}
      />
    </MainSliderBlock>
  );
};

MainSlider.displayName = 'MainSlider';

export default MainSlider;
