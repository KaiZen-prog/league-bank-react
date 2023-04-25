import React from 'react';
import MainSlide from '../main-slide';
import {MainSlideProps} from '../../common/interfaces';
import {Sliders} from '../../const';
import {
  MainSliderBlock,
  SlidesContainer,
  Dots,
  Dot
} from './main-slider.styled';

const MainSlider:React.FunctionComponent<MainSlideProps> = (props) => {
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
