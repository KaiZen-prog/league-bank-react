import React from "react";
import withServicesSlider from "../../hocs/with-services-slider/with-services-slider";
import {Repeat} from "../../utils/common";
import MainSlide from "../main-slide/main-slide";
import {servicesSlides} from '../../mocks/mocks';
import PropTypes from "prop-types";

const ServicesSlider = (props) => {
  const {
    currentSlide,
    currentSlideNumber,
    slidesQuantity,

    onTabClick,
    onSwipeStart
  } = props;

  return (
      <section className="services-slider">

        <ul className="services-slider__dots">
          <Repeat numTimes={slidesQuantity}>
            {(i) => (
                <li
                    key={i}
                    className={
                      `services-slider__dot services-slider__dot--${currentSlide.name} ${
                          i === currentSlideNumber
                              ? `services-slider__dot--current`
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

ServicesSlider.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tabName: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    text: PropTypes.string,
    link: PropTypes.string
  }).isRequired,

  currentSlideNumber: PropTypes.number.isRequired,
  slidesQuantity: PropTypes.number.isRequired,

  onTabClick: PropTypes.func.isRequired,
  onSwipeStart: PropTypes.func.isRequired
};

ServicesSlider.displayName = `ServicesSlider`;

export default withServicesSlider(ServicesSlider);
