import styled from 'styled-components';
import { css } from 'styled-components';
import theme from '../../theme/theme';
import {CREDIT_SLIDE, PROMO_SLIDE, OFFICES_SLIDE} from '../../const';

import promoSlideBackgroundMobile from '../../img/slide-promo-mobile.jpg';
import promoSlideBackgroundTablet from '../../img/slide-promo-tablet.jpg';
import promoSlideBackgroundDesktop from '../../img/slide-promo-desktop.jpg';

import officesSlideBackgroundMobile from '../../img/slide-offices-mobile.jpg';
import officesSlideBackgroundTablet from '../../img/slide-offices-tablet.jpg';
import officesSlideBackgroundDesktop from '../../img/slide-offices-desktop.jpg';

import creditSlideBlackCardMobile from '../../img/card-black-mobile.png';
import creditSlideBlackCardTablet from '../../img/card-black-tablet.png';
import creditSlideBlackCardDesktop from '../../img/card-black-desktop.png';
import creditSlideWhiteCardTablet from '../../img/card-white-tablet.png';
import creditSlideWhiteCardDesktop from '../../img/card-white-desktop.png';

const MainSlide = styled.div`
  position: relative;
  min-height: 226px;
  min-width: 100%;
  overflow: hidden;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    min-height: 300px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    min-height: 226px;
  }

  ${(props) => {
    if (props.$slideName === CREDIT_SLIDE) {
      return css`
        background-color: ${theme.color.neonBlue};

        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          background-image: linear-gradient(180.24deg, rgba(32, 39, 179, 0) 36.31%, #2027B3 99.79%);
        }
      `;
    }
  }}
`;


MainSlide.GradientContainer = styled.div`
  position: absolute;
  min-height: 100%;
  max-width: 1170px;
  width: 100%;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    ${(props) => {
    if (props.$slideName === CREDIT_SLIDE) {
      return css`
          &::after {
            content: "";
            position: absolute;
            display: block;
            width: 179px;
            height: 199px;
            margin-right: -32.8%;
            right: 50%;
            bottom: 0;
            background-image: linear-gradient(183.47deg, rgba(56, 65, 255, 0) 27.26%, #3841FF 97.14%);
            z-index: 1;
          }
        `;
    }
    if (props.$slideName === PROMO_SLIDE || props.$slideName === OFFICES_SLIDE) {
      return css`
          max-width: 100%;
        `;
    }
  }}
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    left: 50%;
    transform: translateX(-50%);

    ${(props) => {
    if (props.$slideName === CREDIT_SLIDE) {
      return css`
              &::before {
        content: "";
        position: absolute;
        display: block;
        width: 150px;
        height: 269px;
        margin-left: -45.5%;
        left: 50%;
        bottom: 0;
        background-image: linear-gradient(183.47deg, rgba(56, 65, 255, 0) 66.3%, #3841FF 97.14%);
        z-index: 1;
      }

      &::after {
        width: 270px;
        height: 269px;
        margin-right: -32.8%;
      }
            `;
    }
  }}
  }

  ${(props) => {
    if (props.$slideName === CREDIT_SLIDE || props.$slideName === PROMO_SLIDE) {
      return css`
        max-width: 100%;
      `;
    }
  }}
`;

MainSlide.BackgroundContainer = styled.div`
  min-height: 100%;
  position: absolute;

  ${(props) => {
    switch (props.$slideName) {
      case CREDIT_SLIDE:
        return css`
          width: 78.3%;
          margin-left: -45.5%;
          top: 0;
          left: 50%;
          background-color: ${theme.color.neonBlue};

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: 82.7%;
            margin-left: 0;
            left: 0;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            width: 78.3%;
            margin-left: -45.5%;
            top: 0;
            left: 50%;
            background-color: ${theme.color.neonBlue};
          }
        `;

      case PROMO_SLIDE:
        return css`
          width: 100%;
          background-color: #dde2ec;
          background-image: url(${promoSlideBackgroundMobile});
          background-repeat: no-repeat;
          background-position: right;
          overflow: hidden;
          z-index: -1;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            background-image: url(${promoSlideBackgroundTablet}),
            linear-gradient(to right, #dde2ec 0%, #dde2ec 50%, #F6FCFF 50%, #F6FCFF 100%);
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            background-image: url(${promoSlideBackgroundDesktop}),
            linear-gradient(to right, #dde2ec 0%, #dde2ec 50%, #F6FCFF 50%, #F6FCFF 100%);
            background-position: center;

            &::after {
              content: "";
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              top: 0;
              left: calc(50% + 683px);
              background-image: linear-gradient(to top, #f6fcff 0%, #f0f6ff 100%);
          }
        `;

      case OFFICES_SLIDE:
        return css`
          width: 100%;
          background-color: #E6F1FE;
          background-image: url(${officesSlideBackgroundMobile});
          background-repeat: no-repeat;
          background-position: right;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            background-image: url(${officesSlideBackgroundTablet});
            overflow: hidden;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            background-image: url(${officesSlideBackgroundDesktop});
            background-position: center;
          }
        `;
      default:
        return css`
          `;
    }
  }}
`;

MainSlide.TextContainer = styled.div`
  position: relative;
  max-width: 1170px;
  min-height: 226px;
  margin: 0 auto;
  padding: 40px 4.68% 0 4.68%;
  box-sizing: border-box;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    min-height: 300px;
    padding: 65px 86px 0 86px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    min-height: 400px;
    padding: 102px 149px 0 170px;
  }

  ${(props) => {
    if (props.$slideName === CREDIT_SLIDE) {
      return css`
        &::before {
          content: "";
          position: absolute;
          display: block;
          top: 29px;
          right: 0;
          width: 105px;
          height: 179px;
          background-image: url(${creditSlideBlackCardMobile});
          background-repeat: no-repeat;
          z-index: 3;
        }

        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          &::before {
            width: 272px;
            height: 188px;
            top: 82px;
            right: 148px;
            background-image: url(${creditSlideBlackCardTablet});
          }

          &::after {
            content: "";
            position: absolute;
            display: block;
            width: 272px;
            height: 188px;
            top: 38px;
            right: 63px;
            background-image: url(${creditSlideWhiteCardTablet});
            background-position: left, top;
            z-index: 2;
          }
            }

        @media (min-width: ${theme.desktopWidthMinThreshold}) {
          &::before {
            width: 335px;
            height: 228px;
            top: 119px;
            right: 235px;
            background-image: url(${creditSlideBlackCardDesktop});
          }

          &::after {
            width: 335px;
            height: 228px;
            top: 61px;
            right: 126px;
            background-image: url(${creditSlideWhiteCardDesktop});
          }
            }
      `;
    }
  }}
`;

MainSlide.Title = styled.h1`
  margin: 0;
  font-size: 38px;
  line-height: 45px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 46px;
    line-height: 54px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 54px;
    line-height: 63px;
  }

  ${(props) => {
    if (props.$slideName === CREDIT_SLIDE) {
      return css`
          color: ${theme.color.ghostWhite};
        `;
    }
  }}
`;

MainSlide.Slogan = styled.p`
  margin-top: 5px;
  font-size: 16px;
  line-height: 19px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-top: 6px;
    font-size: 18px;
    line-height: 21px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    margin-top: 8px;
    font-size: 22px;
    line-height: 26px;
  }

  ${(props) => {
    switch (props.$slideName) {
      case CREDIT_SLIDE:
        return css`
          color: ${theme.color.quartz};
        `;

      case PROMO_SLIDE:
        return css`
          margin-right: 140px;
        `;

      default:
        return css`
        `;
    }
  }}
`;

MainSlide.Link = styled.a`
  display: block;
  width: 188px;
  height: 43px;
  margin-top: 26px;
  font-size: 14px;
  line-height: 43px;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold} - 1) {
    width: 206px;
    height: 48px;
    margin-top: 30px;
    font-size: 16px;
    line-height: 48px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 234px;
    height: 53px;
    margin-top: 34px;
    font-size: 18px;
    line-height: 53px;
  }

  ${(props) => {
    switch (props.$slideName) {
      case CREDIT_SLIDE:
        return css`
          color: ${theme.color.jaguar};
          background-color: ${theme.color.ghostWhite};
        `;

      case OFFICES_SLIDE:
        return css`
          width: 243px;
          color: ${theme.color.ghostWhite};
          background-color: ${theme.color.neonBlue};
        `;

      default:
        return css`
              `;
    }
  }}
`;

export default MainSlide;
