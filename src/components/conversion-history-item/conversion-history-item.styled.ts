import styled, { StyledComponentBase } from "styled-components";
import theme from '../../theme/theme';
import {closeButton} from '../../theme/mixins';

const iconArrow = require('../../img/icon-conversion-arrow.svg') as string;
interface StyledComponent extends StyledComponentBase<any, object> {}

export const ConversionHistoryItemBlock: StyledComponent = styled.li`
  position: relative;
  display: flex;
  padding-right: 12px;

  box-sizing: border-box;

  p {
    font-size: 18px;
    line-height: 18px;

    margin-top: 0;
    margin-bottom: 28px;
  }

  @media (max-width: ${theme.converterHistoryListWidth}) {
    padding-right: 0;
  }

  @media (max-width: ${theme.converterHistoryListMobileWidth}) {
    flex-flow: column;
    margin-bottom: 20px;

    border-bottom: 1px solid ${theme.color.ghost};

  &:last-child {
      border-bottom: none;
    }

    p {
      margin-bottom: 5px;
    }
  }
`;

export const Date: StyledComponent = styled.p`
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

    top: 1px;
    left: 174px;

    width: 41px;
    height: 18px;

    margin-left: -33px;

    background-image: url(${iconArrow});
    background-repeat: no-repeat;
  }
`;

export const Before: StyledComponent = styled.p`
  margin-right: 70px;
  width: 130px;
`;

export const After: StyledComponent = styled.p`
  width: 130px;
`;

export const CloseButton: StyledComponent = styled.button`
  ${closeButton()};

  width: 10px;
  height: 10px;

  top: 3px;
  right: 15px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    top: 30px;
    right: 30px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 10px;
    height: 10px;

    top: 3px;
    right: 15px;
  }
`;
