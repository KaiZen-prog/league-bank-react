import React from 'react';
import MainSlide from '../main-slide';
import {
  MainSliderBlock,
  SlidesContainer,
  Dots,
  Dot
} from './main-slider.styled';

type Slide = {
  name: string,
  title: string,
  slogan: string,
  linkHref: string,
  link: string,
}


interface Props {
  slides: [Slide],
  currentSlide: Slide,
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
    <MainSliderBlock ref={sliderRef}>
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
