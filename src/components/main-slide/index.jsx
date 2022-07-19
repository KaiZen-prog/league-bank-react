import React from 'react';
import Block from './main-slide.styled';
import PropTypes from 'prop-types';

function MainSlide(props) {
  const { currentSlide } = props;

  return (
    <Block $slideName={currentSlide.name}>
      <Block.GradientContainer $slideName={currentSlide.name}>
        <Block.BackgroundContainer $slideName={currentSlide.name}/>
      </Block.GradientContainer>
      <Block.TextContainer $slideName={currentSlide.name}>
        <Block.Title $slideName={currentSlide.name}>Лига Банк</Block.Title>
        <Block.Slogan $slideName={currentSlide.name}>{currentSlide.slogan}</Block.Slogan>
        {currentSlide.link && (
          <Block.Link $slideName={currentSlide.name} href={`#${currentSlide.linkHref}`}>
            {currentSlide.link}
          </Block.Link>
        )}
      </Block.TextContainer>
    </Block>
  );
}

MainSlide.propTypes = {
  currentSlide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
  }).isRequired,
};

MainSlide.displayName = 'MainSlide';

export default MainSlide;
