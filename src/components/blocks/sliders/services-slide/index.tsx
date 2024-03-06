import React from 'react';
import {ServicesSlideType} from '../../../../common/types';
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
  currentSlide: ServicesSlideType
}

const ServicesSlide: React.FunctionComponent<Props> = (props) => {
  const {currentSlide} = props;
  const {name, slogan, features, link, text} = currentSlide;

  return (
    <ServicesSlideBlock>
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
            href={link.href}
            aria-label={link.name}
          >
            {link.name}
          </SlideLink>
        )}
      </SlideWrapper>
    </ServicesSlideBlock>
  );
};

ServicesSlide.displayName = 'ServicesSlide';

export default ServicesSlide;
