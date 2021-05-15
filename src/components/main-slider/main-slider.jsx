import React from "react";
import withMainSlider from "../../hocs/with-main-slider/with-main-slider";
import {Repeat} from "../../utils/common";
import PropTypes from "prop-types";

const MainSlider = (props) => {
  const {
    currentSlide,
    currentSlideNumber,
    slidesQuantity
  } = props;

  return (
    <section className="main-slider">
      <div className={`main-slider__wrapper main-slider__wrapper--${currentSlide.name}`}>
        <div className={`main-slider__slide main-slider__slide--${currentSlide.name}`}>
          <h1 className={`main-slider__header main-slider__header--${currentSlide.name}`}>{currentSlide.title}</h1>
          <p className={`main-slider__slogan main-slider__slogan--${currentSlide.name}`}>{currentSlide.slogan}</p>
          {currentSlide.link && <a
              className={`main-slider__link main-slider__link--${currentSlide.name}`}
              href="#"
          >
            {currentSlide.link}
          </a>}
        </div>
      </div>

      <ul className="main-slider__dots">
        <Repeat numTimes={slidesQuantity}>
          {(i) => (
              <li
                  key={i}
                  className={
                    `main-slider__dot main-slider__dot--${currentSlide.name} ${
                      i === currentSlideNumber 
                          ? `main-slider__dot--current` 
                          : ``
                    }`
                  }
              >
              </li>
          )}
        </Repeat>
      </ul>
    </section>
  );
};

MainSlider.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,

  currentSlideNumber: PropTypes.number.isRequired,
  slidesQuantity: PropTypes.number.isRequired
};

MainSlider.displayName = `MainSlider`;

export default withMainSlider(MainSlider);
