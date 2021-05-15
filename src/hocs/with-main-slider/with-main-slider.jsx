import React from 'react';
import {getNextElement} from '../../utils/common';
import {promoSlides} from '../../mocks/mocks';

const withMainSlider = (Component) => {
  class WithSlider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentSlide: promoSlides[0],
      };

      this.CarouselHandler = this.CarouselHandler.bind(this);
    }

    componentDidMount() {
      //this.CarouselHandler();
    }

    CarouselHandler() {
      this.carouselInterval = setInterval(() => {
        this.setState({currentSlide: this.state.currentSlide === promoSlides[promoSlides.length - 1]
          ? promoSlides[0]
          : getNextElement(promoSlides, this.state.currentSlide)})
      }, 2000);
    }


    render() {
      return (
        <Component
          currentSlide={this.state.currentSlide}
        />
      );
    }
  }

  return WithSlider;
};

export default withMainSlider;
