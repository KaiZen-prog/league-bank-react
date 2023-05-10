import styled, {css, StyledComponentBase} from 'styled-components';
import theme from '../../../../theme/theme';
import {Sliders} from '../../../../const';

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $isCurrent: boolean,
  $slideName: string
}

export const MainSliderBlock: StyledComponent = styled.section`
  position: relative;
  overflow: hidden;
`;

export const SlidesContainer: StyledComponent = styled.div`
  display: flex;
  position: relative;
  transition: left 1.5s ease 0s;

  cursor: grabbing;

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    cursor: default;
  }
`;

export const Dots: StyledComponent = styled.ul`
  position: absolute;

  list-style: none;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  width: 100px;

  margin: 0 0 0 3px;
  padding: 0;

  z-index:4;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    bottom: 15px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    bottom: 40px;
  }
`;

export const Dot: StyledComponent = styled.li<Props>`
  width: 6px;
  height: 6px;

  border-radius: 50%;

  margin-right: 6px;

  background-color: ${theme.color.persianBlue};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 8px;
    height: 8px;

    margin-right: 8px;
  }

  ${(props) => {
    if (props.$isCurrent) {
      if (props.$slideName === Sliders.main.slides.offices) {
        return css`
          background-color: ${theme.color.gainsboro};
        `;
      } else {
        return css`
          background-color: ${theme.color.ghostWhite};
        `;
      }
    } else {
      return css``
    }
  }}
`;
