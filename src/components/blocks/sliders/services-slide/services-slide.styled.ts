import styled, {StyledComponentBase} from 'styled-components';
import {css} from 'styled-components';
import theme from '../../../../theme/theme';
import {ServicesSlidesNames} from '../../../../const';
import {blockCentered, backgroundImage, button} from '../../../../theme/mixins';

import slideDeposit from '../../../../img/slide-services-deposit.jpg';
import slideDepositTablet from '../../../../img/slide-services-deposit-tablet.jpg';
import slideDepositDesktop from '../../../../img/slide-services-deposit-desktop.jpg';

import slideCredit from '../../../../img/slide-services-credit.jpg';
import slideCreditTablet from '../../../../img/slide-services-credit-tablet.jpg';
import slideCreditDesktop from '../../../../img/slide-services-credit-desktop.jpg';

import slideInsurance from '../../../../img/slide-services-insurance.jpg';
import slideInsuranceTablet from '../../../../img/slide-services-insurance-tablet.jpg';
import slideInsuranceDesktop from '../../../../img/slide-services-insurance-desktop.jpg';

import slideOnline from '../../../../img/slide-services-online.jpg';
import slideOnlineTablet from '../../../../img/slide-services-online-tablet.jpg';
import slideOnlineDesktop from '../../../../img/slide-services-online-desktop.jpg';

const iconFeatureMobile = require('../../../../img/icon-feature-mobile.svg') as string;
const iconFeatureTablet = require('../../../../img/icon-feature-tablet.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $currentSlideName: string
}

export const ServicesSlideBlock: StyledComponent = styled.div`
  background-color: ${theme.color.ghostWhite};

  min-width: 100%;
  min-height: 362px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    min-height: 380px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    min-width: 100%;
    min-height: 410px;

    padding: 53px 58% 13px 70px;

    background-color: #F6F7FF;
    border-radius: 0 4px 4px 4px;
    box-sizing: border-box;

    background-repeat: no-repeat;
    background-position: right 135px top 50%;
  }
`;

export const SlideWrapper: StyledComponent = styled.div<Props>`
  position: relative;

  padding: 55px 10px 47px 23px;

  &::before {
      content: "";
      position: absolute;
      display: block;

      top: 98px;
      right: 0;
      width: 87px;
      height: 113px;

      background-repeat: no-repeat;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    ${blockCentered(theme.tabletWidthMinThreshold)};
    padding-left: 45px;
    padding-bottom: 23px;

     &::before {
      top: 60px;
      right: 45px;
      width: 289px;
      height: 260px;
    }
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 100%;

    padding-top: 0;
    padding-left: 0;

    &::before {
      top: 7px;
      right: -544px;
      width: 440px;
      height: 290px;
    }
  }

  ${(props) => {
    switch (props.$currentSlideName) {
      case ServicesSlidesNames.deposit:
        return css`
            &::before {
              background-image: url(${slideDeposit});

              @media (min-width: ${theme.tabletWidthMinThreshold}) {
                background-image: url(${slideDepositTablet});
              }

              @media (min-width: ${theme.desktopWidthMinThreshold}) {
                background-image: url(${slideDepositDesktop});
              }
            }
        `;

      case ServicesSlidesNames.credit:
        return css`
          ::before {
            background-image: url(${slideCredit});

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              background-image: url(${slideCreditTablet});
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              background-image: url(${slideCreditDesktop});
            }
          }
        `;

      case ServicesSlidesNames.insurance:
        return css`
          &::before {
            background-image: url(${slideInsurance});

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              background-image: url(${slideInsuranceTablet});
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              background-image: url(${slideInsuranceDesktop});
            }
          }
        `;

      case ServicesSlidesNames.online:
        return css`
          &::before {
            background-image: url(${slideOnline});

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              background-image: url(${slideOnlineTablet});
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              background-image: url(${slideOnlineDesktop});
            }
          }
        `;

      default:
        return css`
                `;
    }
  }}
`;

export const Slogan: StyledComponent = styled.p<Props>`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  width: 300px;

  margin-top: 0;
  margin-bottom: 21px;


  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 23px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-weight: 500;
    font-size: 22px;
    line-height: 31px;

    margin-bottom: 28px;
  }

  ${(props) => {
    switch (props.$currentSlideName) {
      case ServicesSlidesNames.deposit:
        return css`
          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: 320px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            width: 420px;
          }
        `;

      case ServicesSlidesNames.credit:
        return css`
          width: 290px;
          padding-right: 60px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: 300px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            width: 350px;
          }
        `;

      case ServicesSlidesNames.insurance:
        return css`
          padding-right: 35px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: 320px;

            margin-bottom: 22px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            width: 320px;

            margin-bottom: 22px;
          }
        `;

      case ServicesSlidesNames.online:
        return css`
          margin-bottom: 20px;
          padding-right: 45px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: 400px;

            margin-bottom: 22px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            width: 465px;

            margin-bottom: 22px;
          }
        `;

      default:
        return css`
                  `;
    }
  }}
`;

export const Features: StyledComponent = styled.ul<Props>`
  list-style: none;

  margin-top: 0;
  margin-bottom: 25px;
  padding-left: 1px;
  padding-right: 190px;

  color: ${theme.color.jaguar};


  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 30px;
    padding-left: 7px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    margin-bottom: 34px;
  }

  ${(props) => {
    switch (props.$currentSlideName) {
      case ServicesSlidesNames.credit:
        return css`
          margin-bottom: 22px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            margin-bottom: 31px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            margin-bottom: 31px;
          }
        `;

      case ServicesSlidesNames.insurance:
        return css`
          margin-bottom: 25px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            margin-bottom: 31px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            margin-bottom: 31px;
          }
        `;

      case ServicesSlidesNames.online:
        return css`
          padding-right: 45px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            padding-right: 45px;
            margin-bottom: 31px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            padding-right: 45px;
            margin-bottom: 31px;
          }
        `;

      default:
        return css`
        `;
    }
  }}
`;

export const Feature: StyledComponent = styled.li<Props>`
  position: relative;

  font-size: 14px;
  line-height: 18px;

  margin-bottom: 12px;
  padding-left: 14px;

  color: ${theme.color.jaguar};

  &::before {
    top: 4px;
    left: -2px;

    ${backgroundImage(iconFeatureMobile, '10px', '8px')};
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 16px;
    line-height: 21px;

    margin-bottom: 15px;

    &::before {
      top: 6px;
      left: -8px;

      ${backgroundImage(iconFeatureTablet, '13px', '10px')};
    }
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 18px;
    line-height: 23px;

    margin-bottom: 15px;

    width: 420px;

    &::before {
      top: 5px;
    }
  }

  ${(props) => {
    switch (props.$currentSlideName) {
      case ServicesSlidesNames.deposit:
        return css`
          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            &:last-child {
              width: 360px;
            }
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            &:last-child {
              width: 420px;
            }
          }
        `;

      case ServicesSlidesNames.online:
        return css`
          padding-right: 30px;

          &:first-child {
            padding-right: 60px;
          }

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            &:first-child {
              width: 274px;
            }

            &:last-child {
                width: 360px;
              }
            }
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            &:first-child {
              width: 350px;
            }

            &:last-child {
                width: 390px;
              }
            }
        `;

      default:
        return css`
        `;
    }
  }}
`;

export const SlideText: StyledComponent = styled.p`
  font-size: 14px;
  line-height: 20px;

  margin: 0;
  padding-right: 90px;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 16px;
    line-height: 21px;

    width: 395px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 18px;
    line-height: 25px;

    width: 440px;
  }
`;

export const SlideTextLink: StyledComponent = styled.a`
  text-decoration: underline;

  color: ${theme.color.jaguar};
`;

export const SlideLink: StyledComponent = styled.a<Props>`
  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};

  font-size: 14px;
  line-height: 16px;

  width: 290px;

  padding: 14px 11px 13px 6px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 16px;
    line-height: 22px;

    width: 198px;

    padding: 13px 6px 13px 6px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    line-height: 19px;

    padding-top: 16px;
    padding-bottom: 16px;
  }

  ${(props) => {
    switch (props.$currentSlideName) {
      case ServicesSlidesNames.insurance:
        return css`
          padding-top: 15px;
          padding-bottom: 12px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            padding-top: 13px;
            padding-bottom: 13px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            padding-top: 13px;
            padding-bottom: 13px;
          }
          `;

      case ServicesSlidesNames.online:
        return css`
          padding-top: 15px;
          padding-bottom: 12px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            padding-top: 13px;
            padding-bottom: 13px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            padding-top: 13px;
            padding-bottom: 13px;
          }
        `;

      default:
        return css`
        `;
    }
  }}
`;
