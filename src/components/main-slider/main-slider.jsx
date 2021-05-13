import React from "react";
import withSlider from "../../hocs/with-slider/with-slider";
import PropTypes from "prop-types";

const MainSlider = (props) => {
  const {
    currentSlide
  } = props;

  return (
    <section className="main-slider">
      <div>{currentSlide}</div>
    </section>
  );
};

MainSlider.propTypes = {
  currentSlide: PropTypes.number.isRequired
};

MainSlider.displayName = `MainSlider`;

export default withSlider(MainSlider);
