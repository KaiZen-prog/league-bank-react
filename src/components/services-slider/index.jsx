import React from 'react';
import Block from './services-slider.styled';
import ServicesSlide from '../services-slide';
import {Sliders} from '../../const';
import PropTypes from 'prop-types';

function ServicesSlider(props) {
  const {
    slides,
    currentSlide,
    currentSlideNumber,

    sliderRef,

    onTabClick,
    onSwipeStart,
  } = props;

  return (
    <Block ref={sliderRef} id={Sliders.services.name}>
      <Block.Header>Наши сервисы</Block.Header>
      <Block.TabList>
        {slides.map((slide, index) => (
          <Block.Tab
            key={index}
            id={slide.name}
            $isCurrent={currentSlide === slide}
            onClick={() => {onTabClick(slide, index);}}
          >
            <Block.TabLabel $tabName={slide.name}>
              {slide.tabName}
            </Block.TabLabel>
          </Block.Tab>
        ))}
      </Block.TabList>
      <Block.SlidesContainer
        style={{ left: currentSlideNumber === 0 ? '0' : `-${currentSlideNumber}00%` }}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        {slides.map((slide, index) => (
          <ServicesSlide key={index} currentSlide={slide} />
        ))}
      </Block.SlidesContainer>

      <Block.DotList>
        {slides.map((_, index) => (
          <Block.Dot
            key={index}
            $isCurrent={index === currentSlideNumber}
            $currentSlideName={currentSlide.name}
          >
          </Block.Dot>
        ))}
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
