import React from 'react';
import {MainSlideType, ServicesSlideType} from '../../../../common/types';
import {
  DotList,
  Dot
} from './dots.styled';

interface Props {
  slides: MainSlideType[] | ServicesSlideType[]
  currentSlideNumber: number
  hideDotsOnDesktop?: boolean
}

const Dots: React.FunctionComponent<Props> = (props) => {
  const {
    slides,
    currentSlideNumber,
    hideDotsOnDesktop = false
  } = props;

  return (
    <DotList $hideDotsOnDesktop={hideDotsOnDesktop}>
      {slides.map((_, index) => (
        <Dot
          key={index}
          $isCurrent={index === currentSlideNumber}
        >
        </Dot>
      ))}
    </DotList>
  );
}

Dots.displayName = 'Dots';

export default Dots;
