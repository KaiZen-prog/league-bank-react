import styled, { StyledComponentBase } from 'styled-components';
import theme from '../../../theme/theme';
import {closeButton} from '../../../theme/mixins';

const iconArrow = require('../../../assets/img/icon-conversion-arrow.svg') as string;
interface StyledComponent extends StyledComponentBase<any, object> {}

export const ConversionHistoryItemBlock: StyledComponent = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
  max-width: 390px;
  
  margin-bottom: 20px;
  padding-right: 12px;
  padding-bottom: 10px;

  box-sizing: border-box;
  border-bottom: 1px solid ${theme.color.ghost};

  p {
    font-size: 12px;
    line-height: 12px;
  }

  @media (min-width: ${theme.converterHistoryListMobileWidth}) {
    width: 460px;
    max-width: unset;

    p {
      font-size: 14px;
      line-height: 14px;
    }
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 600px;
    padding-right: 0;

    p {
      font-size: 18px;
      line-height: 18px;
    }
  }

  @media (min-width: ${theme.converterHistoryListWidth}) {
    width: 46%;

    border: none;
  }
`;

export const Date: StyledComponent = styled.p`
  margin-bottom: 5px;
  margin-right: 41px;
`;

export const Container: StyledComponent = styled.div`
  position: relative;

  display: flex;
  flex-grow: 1;

  min-width: 248px;

  &::before {
    position: absolute;
    content: "";

    display: block;

    top: -4px;
    left: 115px;

    width: 41px;
    height: 18px;

    margin-left: -33px;

    background-image: url(${iconArrow});
    background-repeat: no-repeat;

    @media (min-width: ${theme.converterHistoryListMobileWidth}) {
      left: 155px;
    }
  }
`;

export const Before: StyledComponent = styled.p`
  margin-right: 5px;
  width: 130px;

  @media (min-width: ${theme.converterHistoryListMobileWidth}) {
    margin-right: 60px;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-right: 70px;
  }
`;

export const After: StyledComponent = styled.p`
`;

export const CloseButton: StyledComponent = styled.button`
  ${closeButton()};

  width: 10px;
  height: 10px;

  top: 0;
  right: 10px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    top: 4px;
    right: 15px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 10px;
    height: 10px;

    top: 3px;
    right: 0;
  }
`;
