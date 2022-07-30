import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {Sliders} from '../../const';
import {blockCentered} from '../../theme/mixins';

import slideDeposit from '../../img/slide-services-deposit.jpg';
import slideDepositTablet from '../../img/slide-services-deposit-tablet.jpg';
import slideDepositDesktop from '../../img/slide-services-deposit-desktop.jpg';

import slideCredit from '../../img/slide-services-credit.jpg';
import slideCreditTablet from '../../img/slide-services-credit-tablet.jpg';
import slideCreditDesktop from '../../img/slide-services-credit-desktop.jpg';

import slideInsurance from '../../img/slide-services-insurance.jpg';
import slideInsuranceTablet from '../../img/slide-services-insurance-tablet.jpg';
import slideInsuranceDesktop from '../../img/slide-services-insurance-desktop.jpg';

import slideOnline from '../../img/slide-services-online.jpg';
import slideOnlineTablet from '../../img/slide-services-online-tablet.jpg';
import slideOnlineDesktop from '../../img/slide-services-online-desktop.jpg';

const ServicesSlide = styled.div`
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

ServicesSlide.SlideWrapper = styled.div`
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
      case Sliders.services.slides.deposit:
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

      case Sliders.services.slides.credit:
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

      case Sliders.services.slides.insurance:
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

      case Sliders.services.slides.online:
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

ServicesSlide.Slogan = styled.p`
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
      case Sliders.services.slides.deposit:
        return css`
          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: 320px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            width: 420px;
          }
        `;

      case Sliders.services.slides.credit:
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

      case Sliders.services.slides.insurance:
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

      case Sliders.services.slides.online:
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

export default ServicesSlide;
