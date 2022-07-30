import React from 'react';
import PropTypes from 'prop-types';
import Block from './services-slide.styled';

function ServicesSlide(props) {
  const { currentSlide } = props;

  return (
    <Block>
      <Block.SlideWrapper $currentSlideName={currentSlide.name}>
        <Block.Slogan $currentSlideName={currentSlide.name}>
          {currentSlide.slogan}
        </Block.Slogan>

        <ul className={`services-slider__features services-slider__features--${currentSlide.name}`}>
          {currentSlide.features.map((feature) => (
            <li
              key={feature}
              className={`services-slider__feature services-slider__feature--${currentSlide.name}`}
            >
              {feature}
            </li>
          ))}
        </ul>

        {currentSlide.text && (
          <p className="services-slider__text">
            {currentSlide.text.firstLine}
            <br />
            {currentSlide.text.secondLine}
            <a className="services-slider__text-link" href="#">
              {currentSlide.text.link}
            </a>
          </p>
        )}

        {currentSlide.link && (
          <a
            className={`services-slider__link services-slider__link--${currentSlide.name}`}
            href="#"
          >
            {currentSlide.link}
          </a>
        )}
      </Block.SlideWrapper>
    </Block>
  );
}

ServicesSlide.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.shape({
      firstLine: PropTypes.string,
      secondLine: PropTypes.string,
      link: PropTypes.string,
    }),
    link: PropTypes.string,
  }).isRequired,
};

ServicesSlide.displayName = 'ServicesSlide';

export default ServicesSlide;
