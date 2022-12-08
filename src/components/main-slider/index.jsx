import React from 'react';
import Block from './main-slider.styled';
import {Repeat} from '../../utils/common';
import MainSlide from '../main-slide';

function MainSlider(props) {
  const {
    slides,
    currentSlide,
    currentSlideNumber,
    slidesQuantity,

    sliderRef,

    onSwipeStart,
  } = props;

  return (
    <Block ref={sliderRef}>
      <Block.SlidesContainer
        style={{ left: currentSlideNumber === 0 ? '0' : `-${currentSlideNumber}00%` }}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        <Repeat numTimes={slidesQuantity}>
          {(i) => <MainSlide key={i} currentSlide={slides[i]} />}
        </Repeat>
      </Block.SlidesContainer>

      <Block.Dots>
        <Repeat numTimes={slidesQuantity}>
          {(i) => (
            <Block.Dot
              key={i}
              $isCurrent={i === currentSlideNumber}
              $slideName={currentSlide.name}
            >
            </Block.Dot>
          )}
        </Repeat>
      </Block.Dots>
    </Block>
  );
}

MainSlider.displayName = 'MainSlider';

export default MainSlider;
