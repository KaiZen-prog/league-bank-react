import React from 'react';
import {getNextElement} from '../../utils/common';
import {promoSlides} from '../../mocks/mocks';

const withMainSlider = (Component) => {
  class WithSlider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentSlide: promoSlides[0],
        currentSlideNumber: 0,
        slidesQuantity: promoSlides.length
      };

      this.CarouselHandler = this.CarouselHandler.bind(this);
    }

    componentDidMount() {
      //this.CarouselHandler();
    }

    CarouselHandler() {
      this.carouselInterval = setInterval(() => {
        let newSlide;

        this.state.currentSlide === promoSlides[promoSlides.length - 1]
            ? newSlide = promoSlides[0]
            : newSlide = getNextElement(promoSlides, this.state.currentSlide),

        this.setState({
          currentSlide: newSlide,
          currentSlideNumber: promoSlides.indexOf(newSlide)
        })
      }, 2000);
    }


    render() {
      return (
        <Component
          currentSlide={this.state.currentSlide}
          currentSlideNumber={this.state.currentSlideNumber}
          slidesQuantity={this.state.slidesQuantity}
        />
      );
    }
  }

  return WithSlider;
};

export default withMainSlider;
