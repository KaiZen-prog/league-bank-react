import React from 'react';
import ServicesSlide from '../services-slide';
import {ServicesSlideType} from '../../common/types';
import {Sliders} from '../../const';
import {
  ServicesSliderBlock,
  Header,
  TabList,
  Tab,
  TabLabel,
  SlidesContainer,
  DotList,
  Dot
} from './services-slider.styled';

interface Props {
  slides: ServicesSlideType[],
  currentSlide: ServicesSlideType,
  currentSlideNumber: number,
  sliderRef: React.RefObject<HTMLElement>,
  onTabClick: (slide: ServicesSlideType, index: number) => void
  onSwipeStart: (...args: any[]) => void
}

const ServicesSlider: React.FunctionComponent<Props> = (props) => {
  const {
    slides,
    currentSlide,
    currentSlideNumber,

    sliderRef,

    onTabClick,
    onSwipeStart,
  } = props;

  return (
    <ServicesSliderBlock ref={sliderRef} id={Sliders.services.name}>
      <Header>Наши сервисы</Header>
      <TabList>
        {slides.map((slide, index) => (
          <Tab
            key={index}
            id={slide.name}
            $isCurrent={currentSlide === slide}
            onClick={() => {onTabClick(slide, index);}}
          >
            <TabLabel $tabName={slide.name}>
              {slide.tabName}
            </TabLabel>
          </Tab>
        ))}
      </TabList>
      <SlidesContainer
        style={{ left: currentSlideNumber === 0 ? '0' : `-${currentSlideNumber}00%` }}
        onMouseDown={onSwipeStart}
        onTouchStart={onSwipeStart}
      >
        {slides.map((slide, index) => (
          <ServicesSlide key={index} currentSlide={slide} />
        ))}
      </SlidesContainer>

      <DotList>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $isCurrent={index === currentSlideNumber}
            $currentSlideName={currentSlide.name}
          >
          </Dot>
        ))}
      </DotList>
    </ServicesSliderBlock>
  );
}

ServicesSlider.displayName = 'ServicesSlider';

export default ServicesSlider;
