import React, {useEffect, useState, createRef} from 'react';
import {DESKTOP_MIN_WIDTH, Sliders} from '../../const';
import {getNextElement, getPreviousElement} from '../../utils/common';

function WithSlider(props) {
  const {Component, slides, withTabs = false} = props;

  const sliderRef = createRef();

  const [sliderState, setSliderState] = useState({
    slides: slides,
    currentSlide: slides[0],
    currentSlideNumber: 0,
    slidesQuantity: slides.length,
  });

  let interval = () => {};
  let swipeEvent = null;
  let leftCoord = null;
  let startCoords = null;
  let initPosX = null;
  let currentPosX = null;
  let posX = null;
  let slider = {};
  let width = null;

  // Получаем следующий или предыдущий слайд из массива slides
  const getNewSlide = (isGoingOnwards) => {
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

  useEffect(() => {
    if(!withTabs) {
      initCarouselInterval();
    }

    return () => {
      clearInterval(interval);
    };

  }, [sliderState]);

  const slideChangeHandler = (slide, newSlideIndex) => {
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

  const swipeAction = (evt) => {
    currentPosX = swipeEvent.clientX;

    posX = initPosX - currentPosX;
    leftCoord = posX - width * sliderState.currentSlideNumber;

    if (leftCoord > 0) {
      leftCoord = 0;
    }

    if (leftCoord < width * -(sliderState.slidesQuantity - 1)) {
      leftCoord = width * -(sliderState.slidesQuantity - 1);
    }

    slider.style.left = `${leftCoord}px`;

    initPosX = evt.type === 'touchmove' ? evt.touches[0].clientX : evt.clientX;
  };

  const changeSlideOnSwipe = (isGoingOnwards) => {
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
      slider.style.left = startCoords;
    }

    posX = 0;

    if (sliderRef.current === Sliders.main.name) {
      initCarouselInterval();
    }
  };

  const onSwipeStart = (evt) => {
    if (window.innerWidth >= DESKTOP_MIN_WIDTH) {
      return;
    }

    clearInterval(interval);

    swipeEvent = evt.type === 'touchstart' ? evt.touches[0] : evt;

    initPosX = swipeEvent.clientX;

    slider = evt.currentTarget;
    width = slider.clientWidth;
    startCoords = slider.style.left;

    slider.style.transition = 'none';

    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
    document.addEventListener('touchend', swipeEnd);
  };

  return (
    <>
      {withTabs && (
        <Component
          slides={sliderState.slides}
          currentSlide={sliderState.currentSlide}
          currentSlideNumber={sliderState.currentSlideNumber}
          slidesQuantity={sliderState.slidesQuantity}
          sliderRef={sliderRef}
          onSwipeStart={onSwipeStart}
          onTabClick={slideChangeHandler}
        />
      )}

      {!withTabs && (
        <Component
          slides={sliderState.slides}
          currentSlide={sliderState.currentSlide}
          currentSlideNumber={sliderState.currentSlideNumber}
          slidesQuantity={sliderState.slidesQuantity}
          sliderRef={sliderRef}
          onSwipeStart={onSwipeStart}
        />
      )}
    </>
  );
}

export default WithSlider;
