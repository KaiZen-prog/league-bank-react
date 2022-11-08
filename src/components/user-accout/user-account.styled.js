import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';

import iconLogin from '../../img/icon-login.svg';
import iconLoginMobile from '../../img/icon-login-mobile.svg';

const UserBlock = styled.div`
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
    }
  }}
`;

UserBlock.Link = styled.a`
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
    }
  }}
  }
`;

UserBlock.Value = styled.span`
  @media (max-width: ${theme.desktopWidthMinThreshold}) {
    display: none;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    ${(props) => {
    if (props.$isNavOpened) {
      return css`
          display: block;
        `;
    }
  }}
  }
`;

export default UserBlock;
