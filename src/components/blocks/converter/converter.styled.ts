import styled, { StyledComponentBase } from 'styled-components';
import theme from '../../../theme/theme';
import {button} from '../../../theme/mixins';

const iconLeftArrow = require('../../../img/icon-left-arrow.svg') as string;
const iconRightArrow = require('../../../img/icon-right-arrow.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

export const ConverterBlock: StyledComponent = styled.section`
  position: relative;

  max-width: 1210px;

  margin: 0 auto 100px auto;
  padding-top: 46px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Header: StyledComponent = styled.h2`
  font-weight: 700;
  font-size: 41px;

  color: ${theme.color.jaguar};

  line-height: 57px;

  margin-top: 0;
  margin-bottom: 49px;
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

export const FieldWrapper: StyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
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
