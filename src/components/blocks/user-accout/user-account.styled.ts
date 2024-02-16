import styled, { StyledComponentBase } from "styled-components";
import {css} from 'styled-components';
import theme from '../../../theme/theme';

const iconLogin = require('../../../assets/img/icon-login.svg') as string;
const iconLoginMobile = require('../../../assets/img/icon-login-mobile.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $isNavOpened: boolean
}

export const UserBlock: StyledComponent = styled.div<Props>`
  flex-shrink: 0;
  margin-left: auto;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    position: absolute;
    top: 0;
    right: 0;

    ${(props) => {
    if (props.$isNavOpened) {
      return css`
        position: static;
      `;
    } else {
      return css``
    }
  }}
`;

export const Link: StyledComponent = styled.a<Props>`
  position: relative;
  display: inline-block;
  padding-left: 30px;
  font-size: 16px;
  line-height: 91px;
  color: ${theme.color.jaguar};

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 22px;
    top: calc(50% - 11px);
    left: 0;
    background-image: url(${iconLogin});
    background-repeat: no-repeat;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 14px;
    line-height: 69px;

    &::before {
      top: 8px;
      left: 10px;
    }
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-left: 15px;
    padding-left: 30px;
    line-height: 59px;

    &::before {
      width: 14px;
      height: 16px;
      top: 1px;
      left: 1px;
      background-image: url(${iconLoginMobile});
      background-size: cover;
    }

    ${(props) => {
    if (props.$isNavOpened) {
      return css`
          padding-left: 44px;

          &::before {
            width: 20px;
            height: 22px;
            top: 18px;
            left: 14px;
          }
        `;
    } else {
      return css``
    }
  }}
  }
`;

export const Value: StyledComponent = styled.span<Props>`
  @media (max-width: ${theme.desktopWidthMinThreshold}) {
    display: none;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    ${(props) => {
    if (props.$isNavOpened) {
      return css`
          display: block;
        `;
    } else {
      return css``
    }
  }}
  }
`;
