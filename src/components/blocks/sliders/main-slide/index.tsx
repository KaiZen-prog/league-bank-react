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
  currentSlide: MainSlideType
}

const MainSlide:React.FunctionComponent<Props> = (props) => {
  const {currentSlide} = props;
  const {name, slogan, link} = currentSlide;

  return (
    <MainSlideBlock $slideName={name}>
      <GradientContainer $slideName={name}>
        <BackgroundContainer $slideName={name}/>
      </GradientContainer>
      <TextContainer $slideName={name}>
        <Title $slideName={name}>Лига Банк</Title>
        <Slogan $slideName={name}>{slogan}</Slogan>
        {link && (
          <Link $slideName={name} href={`#${link.href}`}>
            {link.name}
          </Link>
        )}
      </TextContainer>
    </MainSlideBlock>
  );
};

MainSlide.displayName = 'MainSlide';

export default MainSlide;
