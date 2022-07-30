import styled from 'styled-components';
import {css} from 'styled-components';
import { visuallyHidden } from '../../theme/mixins';
import theme from '../../theme/theme';
import {Sliders} from '../../const';

import iconDeposit from '../../img/icon-deposit.svg';
import iconCredit from '../../img/icon-credit.svg';
import iconInsurance from '../../img/icon-insurance.svg';
import iconOnline from '../../img/icon-online.svg';

const ServicesSlider = styled.section`
  position: relative;
  overflow: hidden;

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    position: relative;
    max-width: ${theme.desktopContainerWidth};
    margin: 0 auto;
    overflow: hidden;

    padding-top: 60px;
  }
`;

ServicesSlider.Header = styled.h2`
  ${visuallyHidden()};
`;

ServicesSlider.TabList = styled.ul`
  display: none;

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    display: flex;
    justify-content: space-between;

    list-style: none;

    margin: 0;
    padding: 0;

    cursor: pointer;
  }
`;

ServicesSlider.Tab = styled.li`
  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    flex-grow: 1;

    width: 100%;

    font-weight: 500;
    font-size: 18px;
    line-height: 93px;
    text-align: center;

    background-color: ${theme.color.basicWhite};
    border-radius: 4px 4px 0 0;

    cursor: pointer;

    ${(props) => {
    if (props.$isCurrent) {
      return css`
        background-color: ${theme.color.ghostWhite};
      `;
    }
  }}
  }
`;

ServicesSlider.TabLabel = styled.span`
  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    display: inline-block;
    position: relative;
    transform: translateX(22px);

    color: ${theme.jaguar};

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 49%;
      left: -44px;
      background-repeat: no-repeat;
      transform: translateY(-50%);
    }

    ${(props) => {
    switch (props.$tabName) {
      case Sliders.services.slides.deposit:
        return css`
            ::before {
              width: 34px;
              height: 33px;
              background-image: url(${iconDeposit});
            }
        `;

      case Sliders.services.slides.credit:
        return css`
            ::before {
              width: 34px;
              height: 30px;
              background-image: url(${iconCredit});
            }
        `;

      case Sliders.services.slides.insurance:
        return css`
            transform: translateX(20px);

            &::before {
                width: 28px;
                height: 34px;
                left: -38px;
                background-image: url(${iconInsurance});
              }
        `;

      case Sliders.services.slides.online:
        return css`
            transform: translateX(15px);

            &::before {
                width: 20px;
                height: 34px;
                left: -30px;
                background-image: url(${iconOnline});
              }
        `;
      default:
        return css`
              `;
    }
  }}
  }
`;

ServicesSlider.SlidesContainer = styled.div`
  display: flex;
  position: relative;

  transition: left 1.5s ease 0s;

  cursor: grabbing;

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    display: flex;
    position: relative;

    cursor: default;
  }
`;

ServicesSlider.DotList = styled.ul`
  position: absolute;

  list-style: none;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  width: 100px;

  margin: 0 0 0 3px;
  padding: 0;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    bottom: 15px;

    width: 100px;

    margin-left: 4px;
    padding: 0;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    display: none;
  }
`;

ServicesSlider.Dot = styled.li`
  width: 6px;
  height: 6px;

  border-radius: 50%;

  margin-right: 6px;

  background-color: ${theme.color.persianBlue};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 8px;
    height: 8px;

    margin-right: 8px;
  }

    ${(props) => {
    if (props.$isCurrent) {
      return css`
        background-color: ${theme.color.gainsboro};
      `;
    }
  }}
`;


export default ServicesSlider;
