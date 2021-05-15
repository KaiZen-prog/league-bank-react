import React from "react";
import withMainSlider from "../../hocs/with-main-slider/with-main-slider";
import PropTypes from "prop-types";

const MainSlider = (props) => {
  const {
    currentSlide
  } = props;

  return (
    <section className="main-slider">
      <div className={`main-slider__slide main-slider__slide--${currentSlide.name}`}>
        <h1 className={`main-slider__header main-slider__header--${currentSlide.name}`}>{currentSlide.title}</h1>
        <p className={`main-slider__slogan main-slider__slogan--${currentSlide.name}`}>{currentSlide.slogan}</p>
        {currentSlide.link && <a className="main-slider__link" href="#">{currentSlide.link}</a>}
      </div>
    </section>
  );
};

MainSlider.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    link: PropTypes.string
  })
};

MainSlider.displayName = `MainSlider`;

export default withMainSlider(MainSlider);
