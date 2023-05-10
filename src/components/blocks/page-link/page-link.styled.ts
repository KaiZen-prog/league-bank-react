import styled, { StyledComponentBase } from "styled-components";
import {css} from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../../../theme/theme';

const logoMobile = require('../../../img/logo-mobile.svg') as string;
const logoTablet = require('../../../img/logo-tablet.svg') as string;
const logoDesktop = require('../../../img/logo-desktop.svg') as string;

const logoFooterMobile = require('../../../img/logo-footer-mobile.svg') as string;
const logoFooterTablet = require('../../../img/logo-footer-tablet.svg') as string;
const logoFooterDesktop = require('../../../img/logo-footer-desktop.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $isFooterLogo: boolean
}

export const PageLinkBlock: StyledComponent = styled(Link)<Props>`
  position: relative;
  display: block;

  min-width: 160px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  padding-top: 32px;
  padding-left: 44px;

  color: ${theme.color.jaguar};

  letter-spacing: 1.1px;

  &::before {
    content: '';
    position: absolute;
    display: block;
    background-repeat: no-repeat;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 18px;
    line-height: 21px;

    padding-top: 27px;
    padding-left: 68px;
    padding-bottom: 21px;

    &::before {
      width: 26px;
      height: 24px;
    }
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 16px;
    line-height: 19px;

    &::before {
      width: 20px;
      height: 19px;
    }
  }

  ${(props) => {
    if (props.$isFooterLogo) {
      return css`
        margin-bottom: 16px;
        padding-top: 0;
        padding-left: 38px;

        &::before {
          width: 30px;
          height: 27px;

          top: -8px;
          left: -1px;

          background-image: url(${logoFooterDesktop});
        }

        @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
          min-width: 150px;

          margin-top: -6px;
          margin-bottom: 32px;
          padding-top: 7px;
          padding-left: 32px;

          &::before {
            top: 0;
            left: -1px;

            background-image: url(${logoFooterTablet});
          }
        }

        @media (max-width: ${theme.tabletWidthMinThreshold}) {
          min-width: 130px;

          margin: -5px 0 16px -1px;
          padding-top: 9px;
          padding-left: 33px;

          &::before {
              top: 5px;
              left: 8px;

              background-image: url(${logoFooterMobile});
            }
          }
        }
      `;
    } else {
      return css`
        margin-right: 93px;
        transform: translateY(2px);

        &::before {
          width: 28px;
          height: 26px;

          top: 24px;
          left: 6px;

          background-image: url(${logoDesktop});
        }

          @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
            min-width: 170px;

            margin-right: 56px;

            padding-top: 27px;
            padding-left: 68px;
            padding-bottom: 21px;

            &::before {
              top: 20px;
              left: 35px;

              background-image: url(${logoTablet});
            }
          }

          @media (max-width: ${theme.tabletWidthMinThreshold}) {
            margin-top: -12px;
            padding-top: 9px;
            padding-left: 40px;

            &::before {
              top: 8px;
              left: 13px;

              background-image: url(${logoMobile});
            }
          }
      `;
    }
  }}
`;
