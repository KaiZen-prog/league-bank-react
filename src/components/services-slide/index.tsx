import React from 'react';
import {IServicesSlide} from '../../common/interfaces';
import {
  ServicesSlideBlock,
  SlideWrapper,
  Slogan,
  Features,
  Feature,
  SlideText,
  SlideTextLink,
  SlideLink
} from './services-slide.styled';

interface Props {
  key: number,
  currentSlide: IServicesSlide
}

const ServicesSlide: React.FunctionComponent<Props> = (props) => {
  const {key, currentSlide} = props;
  const {name, slogan, features, link, text} = currentSlide;

  return (
    <ServicesSlideBlock key={key}>
      <SlideWrapper $currentSlideName={name}>
        <Slogan $currentSlideName={name}>
          {slogan}
        </Slogan>

        <Features $currentSlideName={name}>
          {features.map((feature) => (
            <Feature
              key={feature}
              $currentSlideName={name}
            >
              {feature}
            </Feature>
          ))}
        </Features>

        {text && (
          <SlideText>
            {text.firstLine}
            <br />
            {text.secondLine}
            <SlideTextLink href="#">
              {text.link}
            </SlideTextLink>
          </SlideText>
        )}

        {link && (
          <SlideLink
            $currentSlideName={name}
            href="#"
          >
            {link}
          </SlideLink>
        )}
      </SlideWrapper>
    </ServicesSlideBlock>
  );
}

ServicesSlide.displayName = 'ServicesSlide';

export default ServicesSlide;
