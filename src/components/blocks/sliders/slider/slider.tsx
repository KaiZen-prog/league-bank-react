import React, { useEffect, useState, createRef, Touch } from "react";
import {DESKTOP_MIN_WIDTH, Sliders} from '../../../../const';
import {getNextElement, getPreviousElement} from '../../../../utils/common';
import {MainSlideType, ServicesSlideType} from '../../../../common/types';
import MainSlider from '../main-slider';
import ServicesSlider from '../services-slider';

interface Props {
  slides: MainSlideType[] | ServicesSlideType[]
}

const Slider: React.FunctionComponent<Props> = (props) => {
  const {slides} = props;

  const sliderRef: React.RefObject<HTMLElement> = createRef();

  const [sliderState, setSliderState] = useState({
    slides: slides  as MainSlideType[] | ServicesSlideType[],
    currentSlide: slides[0] as MainSlideType | ServicesSlideType,
    currentSlideNumber: 0
  });

  let interval: NodeJS.Timeout = null;
  let swipeEvent: MouseEvent | Touch = null;
  let leftCoord: number = null;
  let startCoords: number = null;
  let initPosX: number = null;
  let currentPosX: number = null;
  let posX: number = null;
  let slider: HTMLElement = null;
  let width: number = null;

  // Получаем следующий или предыдущий слайд из массива slides
  const getNewSlide = (isGoingOnwards: boolean) => {
    let newSlide;

    if (isGoingOnwards) {
      sliderState.currentSlide === sliderState.slides[sliderState.slides.length - 1]
        ? (newSlide = sliderState.slides[0])
        : (newSlide = getNextElement(sliderState.slides, sliderState.currentSlide));
    } else {
      sliderState.currentSlide === sliderState.slides[0]
        ? (newSlide = sliderState.slides[sliderState.slides.length - 1])
        : (newSlide = getPreviousElement(sliderState.slides, sliderState.currentSlide));
    }

    return newSlide;
  };

  // Запускаем карусель если не предусмотрены табы для перехода по слайдам
  useEffect(() => {
    if (!('tabName' in sliderState.currentSlide)) {
      initCarouselInterval();
    }

    return () => {
      clearInterval(interval);
    };

  }, [sliderState]);

  const slideChangeHandler = (slide: MainSlideType | ServicesSlideType, newSlideIndex: number) => {
    setSliderState((prevState) => ({
      ...prevState,
      currentSlide: slide,
      currentSlideNumber: newSlideIndex,
    }));
  };

  function initCarouselInterval() {
    interval = setInterval(() => {
      const nextSlide = getNewSlide(true);
      const nextSlideIndex = sliderState.slides.indexOf(nextSlide);

      slideChangeHandler(nextSlide, nextSlideIndex);
    }, 3000);
  }

  const swipeAction = (evt: MouseEvent | TouchEvent) => {
    currentPosX = swipeEvent.clientX;

    posX = initPosX - currentPosX;
    leftCoord = posX - width * sliderState.currentSlideNumber;

    if (leftCoord > 0) {
      leftCoord = 0;
    }

    if (leftCoord < width * -(sliderState.slides.length - 1)) {
      leftCoord = width * -(sliderState.slides.length - 1);
    }

    slider.style.left = `${leftCoord}px`;

    initPosX = evt.type === 'touchmove' ? (evt as TouchEvent).touches[0].clientX : (evt as MouseEvent).clientX;
  };

  const changeSlideOnSwipe = (isGoingOnwards: boolean) => {
    const newSlide = getNewSlide(isGoingOnwards);
    const newSlideIndex = sliderState.slides.indexOf(newSlide);
    slideChangeHandler(newSlide, newSlideIndex);
  };

  const swipeEnd = () => {
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mouseup', swipeEnd);
    document.removeEventListener('touchend', swipeEnd);

    slider.style.transition = 'left 1s';

    if ((posX * -1) / width > 0.5) {
      changeSlideOnSwipe(true);
    } else if ((posX * -1) / width < -0.5) {
      changeSlideOnSwipe(false);
    } else {
      slider.style.left = startCoords.toString();
    }

    posX = 0;

    if (sliderRef.current.id === Sliders.main.name) {
      initCarouselInterval();
    }
  };

  const onSwipeStart = (evt: MouseEvent | TouchEvent) => {
    if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
      return;
    }

    clearInterval(interval);

    swipeEvent = evt.type === 'touchstart' ? (evt as TouchEvent).touches[0] : (evt as MouseEvent);

    initPosX = swipeEvent.clientX;

    slider = evt.currentTarget as HTMLElement;
    width = slider.clientWidth;
    startCoords = parseInt(slider.style.left);

    slider.style.transition = 'none';

    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
    document.addEventListener('touchend', swipeEnd);
  };

  // В зависимости от типа полученных слайдов, рендерим подходящий для них компонент
  switch (true) {
    case 'linkHref' in sliderState.currentSlide:
      return (
        <>
          <MainSlider
            slides={sliderState.slides as MainSlideType[]}
            currentSlideNumber={sliderState.currentSlideNumber}
            sliderRef={sliderRef}
            onSwipeStart={onSwipeStart}
          />
        </>
      );

    case 'tabName' in sliderState.currentSlide:
      return (
        <>
          <ServicesSlider
            slides={sliderState.slides as ServicesSlideType[]}
            currentSlideNumber={sliderState.currentSlideNumber}
            sliderRef={sliderRef}
            onTabClick={slideChangeHandler}
            onSwipeStart={onSwipeStart}
          />
        </>
      );
    default:
      return null;
  }
}

export default Slider;
