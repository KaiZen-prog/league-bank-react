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
  const getNewSlide = (isGettingNextSlide) => {
    let newSlide;

    if (isGettingNextSlide) {
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
      carouselInterval();
    }

    return () => {
      clearInterval(interval);
    };

  }, [sliderState]);

  function carouselInterval() {
    interval = setInterval(() => {
      const nextSlide = getNewSlide(true);

      setSliderState((prevState) => ({
        ...prevState,
        currentSlide: nextSlide,
        currentSlideNumber: prevState.slides.indexOf(nextSlide),
      }));
    }, 3000);
  }

  const onTabClick = (slide, number) => {
    setSliderState((prevState) => ({
      ...prevState,
      currentSlide: slide,
      currentSlideNumber: number,
    }));
  };

  const swipeEndHandler = (newSlide, newSlideIndex) => {
    setSliderState((prevState) => ({
      ...prevState,
      currentSlide: newSlide,
      currentSlideNumber: newSlideIndex,
    }));
  };

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

  const swipeEnd = () => {
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mouseup', swipeEnd);
    document.removeEventListener('touchend', swipeEnd);

    slider.style.transition = 'left 1s';

    if ((posX * -1) / width > 0.5) {
      const newSlide = getNewSlide(true);
      const newSlideIndex = sliderState.slides.indexOf(newSlide);
      swipeEndHandler(newSlide, newSlideIndex);
    } else if ((posX * -1) / width < -0.5) {
      const newSlide = getNewSlide(false);
      const newSlideIndex = sliderState.slides.indexOf(newSlide);

      swipeEndHandler(newSlide, newSlideIndex);
    } else {
      slider.style.left = startCoords;
    }

    posX = 0;

    if (sliderRef.current === Sliders.main.name) {
      carouselInterval();
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
          onTabClick={onTabClick}
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
