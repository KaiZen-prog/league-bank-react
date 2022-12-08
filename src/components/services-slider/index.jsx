import React from 'react';
import {Repeat} from '../../utils/common';
import Block from './services-slider.styled';
import ServicesSlide from '../services-slide';
import {Sliders} from '../../const';
import PropTypes from 'prop-types';

function ServicesSlider(props) {
  const {
    slides,
    currentSlide,
    currentSlideNumber,
    slidesQuantity,

    sliderRef,

    onTabClick,
    onSwipeStart,
  } = props;

  return (
    <Block ref={sliderRef} id={Sliders.services.name}>
      <Block.Header>Наши сервисы</Block.Header>
      <Block.TabList>
        <Repeat numTimes={slides.length}>
          {(i) => (
            <Block.Tab
              key={i}
              id={slides[i].name}
              $isCurrent={currentSlide === slides[i]}
              onClick={() => {onTabClick(slides[i], i);}}
            >
              <Block.TabLabel $tabName={slides[i].name}>
                {slides[i].tabName}
              </Block.TabLabel>
            </Block.Tab>
          )}
        </Repeat>
      </Block.TabList>
      <Block.SlidesContainer
        style={{ left: currentSlideNumber === 0 ? '0' : `-${currentSlideNumber}00%` }}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        <Repeat numTimes={slidesQuantity}>
          {(i) => <ServicesSlide key={i} currentSlide={slides[i]} />}
        </Repeat>
      </Block.SlidesContainer>

      <Block.DotList>
        <Repeat numTimes={slidesQuantity}>
          {(i) => (
            <Block.Dot
              key={i}
              $isCurrent={i === currentSlideNumber}
              $currentSlideName={currentSlide.name}
            >
            </Block.Dot>
          )}
        </Repeat>
      </Block.DotList>
    </Block>
  );
}

ServicesSlider.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string,
    tabName: PropTypes.string,
    slogan: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.shape({
      firstLine: PropTypes.string,
      secondLine: PropTypes.string,
      link: PropTypes.string,
    }),
    link: PropTypes.string,
  }).isRequired,

  currentSlideNumber: PropTypes.number.isRequired,
  slidesQuantity: PropTypes.number.isRequired,

  onTabClick: PropTypes.func.isRequired,
};

ServicesSlider.displayName = 'ServicesSlider';

export default ServicesSlider;
