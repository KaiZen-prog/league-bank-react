import React from 'react';
import PropTypes from 'prop-types';
import Block from './services-slide.styled';

function ServicesSlide(props) {
  const { currentSlide } = props;

  return (
    <Block>
      <Block.SlideWrapper $currentSlideName={currentSlide.name}>
        <Block.Slogan $currentSlideName={currentSlide.name}>
          {currentSlide.slogan}
        </Block.Slogan>

        <Block.Features $currentSlideName={currentSlide.name}>
          {currentSlide.features.map((feature) => (
            <Block.Feature
              key={feature}
              $currentSlideName={currentSlide.name}
            >
              {feature}
            </Block.Feature>
          ))}
        </Block.Features>

        {currentSlide.text && (
          <Block.SlideText>
            {currentSlide.text.firstLine}
            <br />
            {currentSlide.text.secondLine}
            <Block.SlideTextLink href="#">
              {currentSlide.text.link}
            </Block.SlideTextLink>
          </Block.SlideText>
        )}

        {currentSlide.link && (
          <Block.SlideLink
            $currentSlideName={currentSlide.name}
            href="#"
          >
            {currentSlide.link}
          </Block.SlideLink>
        )}
      </Block.SlideWrapper>
    </Block>
  );
}

ServicesSlide.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.shape({
      firstLine: PropTypes.string,
      secondLine: PropTypes.string,
      link: PropTypes.string,
    }),
    link: PropTypes.string,
  }).isRequired,
};

ServicesSlide.displayName = 'ServicesSlide';

export default ServicesSlide;
