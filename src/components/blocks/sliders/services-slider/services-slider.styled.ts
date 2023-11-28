import styled, {StyledComponentBase} from 'styled-components';
import {css} from 'styled-components';
import { visuallyHidden } from '../../../../theme/mixins';
import theme from '../../../../theme/theme';
import {ServicesSlidesNames} from '../../../../const';

const iconDeposit = require('../../../../img/icon-deposit.svg') as string;
const iconCredit = require('../../../../img/icon-credit.svg') as string;
const iconInsurance = require('../../../../img/icon-insurance.svg') as string;
const iconOnline = require('../../../../img/icon-online.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $isCurrent?: boolean,
  $tabName?: string
}

export const ServicesSliderBlock: StyledComponent = styled.section`
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

export const Header: StyledComponent = styled.h2`
  ${visuallyHidden()};
`;

export const TabList: StyledComponent = styled.ul`
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

export const Tab: StyledComponent = styled.li<Props>`
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
    } else {
      return css``;
    }
  }
}
`;

export const TabLabel: StyledComponent = styled.span<Props>`
  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    display: inline-block;
    position: relative;
    transform: translateX(22px);

    color: ${theme.color.jaguar};

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
      case ServicesSlidesNames.deposit:
        return css`
            ::before {
              width: 34px;
              height: 33px;
              background-image: url(${iconDeposit});
            }
        `;

      case ServicesSlidesNames.credit:
        return css`
            ::before {
              width: 34px;
              height: 30px;
              background-image: url(${iconCredit});
            }
        `;

      case ServicesSlidesNames.insurance:
        return css`
            transform: translateX(20px);

            &::before {
                width: 28px;
                height: 34px;
                left: -38px;
                background-image: url(${iconInsurance});
              }
        `;

      case ServicesSlidesNames.online:
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

export const SlidesContainer: StyledComponent = styled.div`
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
