import React from "react";

interface Slide {
  name: string,
  slogan: string,
  link: string
}

export interface IMainSlide extends Slide {
  linkHref: string
}

export interface IServicesSlide extends Slide {
  tabName: string,
  features: Array<string>,
  text?: {
    firstLine?: string,
    secondLine?: string,
    link?: string,
  }
}

export interface MainSlideProps {
  slides: IMainSlide[],
  currentSlide: IMainSlide,
  currentSlideNumber: number,
  sliderRef: React.RefObject<any>
  onSwipeStart: (...args: any[]) => void;
}

export interface ServicesSlideProps {
  slides: IServicesSlide[],
  currentSlide: IServicesSlide,
  currentSlideNumber: number,
  sliderRef: React.RefObject<HTMLElement>,
  onTabClick: (slide: IServicesSlide, index: number) => void
  onSwipeStart: (...args: any[]) => void
}
