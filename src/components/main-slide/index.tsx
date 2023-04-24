import React from 'react';
import {
  MainSlideBlock,
  GradientContainer,
  BackgroundContainer,
  TextContainer,
  Title,
  Slogan,
  Link
} from './main-slide.styled';

interface Props {
  currentSlide: {
    name: string,
    title: string,
    slogan: string,
    link: string,
    linkHref: string,
  }
}


const MainSlide:React.FunctionComponent<Props> = (props) => {
  const {currentSlide} = props;

  return (
    <MainSlideBlock $slideName={currentSlide.name}>
      <GradientContainer $slideName={currentSlide.name}>
        <BackgroundContainer $slideName={currentSlide.name}/>
      </GradientContainer>
      <TextContainer $slideName={currentSlide.name}>
        <Title $slideName={currentSlide.name}>Лига Банк</Title>
        <Slogan $slideName={currentSlide.name}>{currentSlide.slogan}</Slogan>
        {currentSlide.link && (
          <Link $slideName={currentSlide.name} href={`#${currentSlide.linkHref}`}>
            {currentSlide.link}
          </Link>
        )}
      </TextContainer>
    </MainSlideBlock>
  );
}

MainSlide.displayName = 'MainSlide';

export default MainSlide;
