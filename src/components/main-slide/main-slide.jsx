import React from "react";
import PropTypes from "prop-types";

const MainSlide = (props) => {
  const {
    currentSlide,
  } = props;

  return (
    <div className={`main-slider__container main-slider__container--${currentSlide.name}`}>
      <div className={`main-slider__wrapper main-slider__wrapper--${currentSlide.name}`}>
        <div className={`main-slider__slide main-slider__slide--${currentSlide.name}`}>
          <div className={`main-slider__gradient-container main-slider__gradient-container--${currentSlide.name}`}>
            <h1 className={`main-slider__header main-slider__header--${currentSlide.name}`}>{currentSlide.title}</h1>
            <p className={`main-slider__slogan main-slider__slogan--${currentSlide.name}`}>{currentSlide.slogan}</p>
            {currentSlide.link && <a
              className={`main-slider__link main-slider__link--${currentSlide.name}`}
              href={`#${currentSlide.linkHref}`}
            >
              {currentSlide.link}
            </a>}
          </div>
        </div>
      </div>
    </div>
  );
};

MainSlide.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired
  }).isRequired
};

MainSlide.displayName = `MainSlide`;

export default MainSlide;
