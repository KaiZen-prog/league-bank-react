import React from "react";
import PropTypes from "prop-types";

const ServicesSlide = (props) => {
  const {
    currentSlide,
  } = props;

  return (
      <div className={`services-slider__slide services-slider__slide--${currentSlide.name}`}>
        <p className={`services-slider__slogan services-slider__slogan--${currentSlide.name}`}>{currentSlide.slogan}</p>

        <ul className="main-slider__features">
          {currentSlide.features.map((feature) => (
              <li key={feature} className="services-slider__feature">{feature}</li>
          ))}
        </ul>

        {currentSlide.text && <p
            className={`services-slider__link services-slider__link--${currentSlide.name}`}
        >
          {currentSlide.text}
        </p>}

        {currentSlide.link && <a
            className={`services-slider__link services-slider__link--${currentSlide.name}`}
            href="#"
        >
          {currentSlide.link}
        </a>}
      </div>
  );
};

ServicesSlide.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired
};

ServicesSlide.displayName = `ServicesSlide`;

export default ServicesSlide;
