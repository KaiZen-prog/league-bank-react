import React from 'react';
import {DESKTOP_MIN_WIDTH} from '../../const';
import {getNextElement, getPreviousElement} from '../../utils/common';
import {mainSlides} from '../../mocks/mocks';

const withMainSlider = (Component) => {
  class WithSlider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentSlide: mainSlides[0],
        currentSlideNumber: 0,
        slidesQuantity: mainSlides.length
      };

      this.carouselHandler = this.carouselHandler.bind(this);

      this.onSwipeStart = this.onSwipeStart.bind(this);
      this.swipeAction = this.swipeAction.bind(this);
      this.swipeEnd = this.swipeEnd.bind(this);
    }

    componentDidMount() {
      this.carouselHandler();
    }

    // Получаем следующий или предыдущий слайд из массива promoSlides
    getNewSlide(isGettingNextSlide) {
      let newSlide;

      if (isGettingNextSlide) {
        if (this.state.currentSlide === mainSlides[mainSlides.length - 1]) {
          newSlide = mainSlides[0];
        } else {
          newSlide = getNextElement(mainSlides, this.state.currentSlide);
        }
      } else {
        if (this.state.currentSlide === mainSlides[0]) {
          newSlide = mainSlides[mainSlides.length - 1];
        } else {
          newSlide = getPreviousElement(mainSlides, this.state.currentSlide);
        }
      }

      return newSlide;
    }

    carouselHandler() {
      this.carouselInterval = setInterval(() => {
        let nextSlide = this.getNewSlide(true);

        this.setState({
          currentSlide: nextSlide,
          currentSlideNumber: mainSlides.indexOf(nextSlide)
        });
      }, 4000);
    }

    onSwipeStart(evt) {
      if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
        return;
      }

      clearInterval(this.carouselInterval);

      this.evt = evt.type === `touchstart` ? evt.touches[0] : evt;

      this.initPosX = this.evt.clientX;

      this.slider = evt.currentTarget;
      this.width = this.slider.clientWidth;
      this.startCoords = this.slider.style.left;

      this.slider.style.transition = `none`;

      document.addEventListener('mousemove', this.swipeAction);
      document.addEventListener('touchmove', this.swipeAction);
      document.addEventListener('mouseup', this.swipeEnd);
      document.addEventListener('touchend', this.swipeEnd);
    }

    swipeAction(evt) {
      this.currentPosX = this.evt.clientX;

      this.posX = this.initPosX - this.currentPosX;
      this.leftCoord = this.posX - this.width * (this.state.currentSlideNumber);

      if (this.leftCoord > 0) {
        this.leftCoord = 0;
      }

      if (this.leftCoord < this.width * -(this.state.slidesQuantity - 1)) {
        this.leftCoord = this.width * -(this.state.slidesQuantity- 1);
      }

      this.slider.style.left = this.leftCoord + `px`;

      this.initPosX = evt.type === `touchmove` ? evt.touches[0].clientX : evt.clientX;
    }

    swipeEnd() {
      document.removeEventListener('mousemove', this.swipeAction);
      document.removeEventListener('touchmove', this.swipeAction);
      document.removeEventListener('mouseup', this.swipeEnd);
      document.removeEventListener('touchend', this.swipeEnd);

      this.slider.style.transition = `left 0.5s`;

      if (this.posX * -1 / this.width > 0.5) {
        let newSlide = this.getNewSlide(true);

        this.setState({
          currentSlide: newSlide,
          currentSlideNumber: mainSlides.indexOf(newSlide)
        })
      } else if (this.posX * -1 / this.width < -0.5) {
        let newSlide = this.getNewSlide(false);

        this.setState({
          currentSlide: newSlide,
          currentSlideNumber: mainSlides.indexOf(newSlide)
        })
      } else {
        this.slider.style.left = this.startCoords;
      }

      this.posX = 0;
      this.carouselHandler();
    }

    render() {
      return (
        <Component
          currentSlide={this.state.currentSlide}
          currentSlideNumber={this.state.currentSlideNumber}
          slidesQuantity={this.state.slidesQuantity}
          onSwipeStart={this.onSwipeStart}
        />
      );
    }
  }

  return WithSlider;
};

export default withMainSlider;
