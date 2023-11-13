import styled, { StyledComponentBase } from 'styled-components';
import theme from '../../../theme/theme';
import {button, headerH2} from '../../../theme/mixins';

const iconLeftArrow = require('../../../img/icon-left-arrow.svg') as string;
const iconRightArrow = require('../../../img/icon-right-arrow.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Header: StyledComponent = styled.h2`
  ${headerH2()};
`;

export const Form: StyledComponent = styled.form`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${theme.converterFlexWrapWidth}) {
    &::before {
      position: absolute;
      content: "";

      top: 52px;
      left: 561px;

      width: 54px;
      height: 18px;

      background-image: url(${iconLeftArrow});
      background-repeat: no-repeat;
    }

    &::after {
      position: absolute;
      content: "";

      top: 70px;
      left: 564px;

      width: 54px;
      height: 18px;

      background-image: url(${iconRightArrow});
      background-repeat: no-repeat;
    }
  }

`;

export const Wrapper: StyledComponent = styled.div`
  position: relative;
  
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  
  margin-left: 5px;
  margin-right: 5px;
`;

export const Button: StyledComponent = styled.button`
  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};

  width: 390px;
  height: 60px;

  font-size: 18px;
  line-height: 140%;

  padding-top: 4px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 100%;
  }
`;
