import React from 'react';
import withSlider from '../../hocs/with-slider/with-slider';
import Block from './main-slider.styled';
import {Repeat} from '../../utils/common';
import MainSlide from '../main-slide';
import {mainSlides} from '../../mocks/mocks';
import {Sliders} from '../../const';
import PropTypes from 'prop-types';

function MainSlider(props) {
  const { sliderRef, currentSlide, currentSlideNumber, slidesQuantity, onSwipeStart } = props;

  return (
    <Block ref={sliderRef} id={Sliders.main.name}>
      <Block.SlidesContainer
        style={{ left: currentSlideNumber === 0 ? '0' : `-${currentSlideNumber}00%` }}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        <Repeat numTimes={slidesQuantity}>
          {(i) => <MainSlide key={i} currentSlide={mainSlides[i]} />}
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

MainSlider.propTypes = {
  sliderRef: PropTypes.shape({}),
  currentSlide: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    slogan: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,

  currentSlideNumber: PropTypes.number.isRequired,
  slidesQuantity: PropTypes.number.isRequired,

  onSwipeStart: PropTypes.func.isRequired,
};

MainSlider.displayName = 'MainSlider';

export default withSlider(MainSlider);
