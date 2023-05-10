import React from 'react';
import {MainSlideType} from '../../../../common/types';
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
  key: number,
  currentSlide: MainSlideType
}


const MainSlide:React.FunctionComponent<Props> = (props) => {
  const {key, currentSlide} = props;
  const {name, slogan, link, linkHref} = currentSlide;

  return (
    <MainSlideBlock key={key} $slideName={name}>
      <GradientContainer $slideName={name}>
        <BackgroundContainer $slideName={name}/>
      </GradientContainer>
      <TextContainer $slideName={name}>
        <Title $slideName={name}>Лига Банк</Title>
        <Slogan $slideName={name}>{slogan}</Slogan>
        {link && (
          <Link $slideName={name} href={`#${linkHref}`}>
            {link}
          </Link>
        )}
      </TextContainer>
    </MainSlideBlock>
  );
}

MainSlide.displayName = 'MainSlide';

export default MainSlide;
