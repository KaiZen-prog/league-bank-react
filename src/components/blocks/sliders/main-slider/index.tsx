import React from 'react';
import MainSlide from '../main-slide';
import {MainSlideType} from '../../../../common/types';
import {Sliders} from '../../../../const';
import {
  MainSliderBlock,
  SlidesContainer,
  Dots,
  Dot
} from './main-slider.styled';

interface Props {
  slides: MainSlideType[],
  currentSlide: MainSlideType,
  currentSlideNumber: number,
  sliderRef: React.RefObject<any>
  onSwipeStart: (...args: any[]) => void;
}

const MainSlider:React.FunctionComponent<Props> = (props) => {
  const {
    slides,
    currentSlide,
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

      <Dots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $isCurrent={index === currentSlideNumber}
            $slideName={currentSlide.name}
          >
          </Dot>
        ))}
      </Dots>
    </MainSliderBlock>
  );
}

MainSlider.displayName = 'MainSlider';

export default MainSlider;
