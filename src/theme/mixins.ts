import { css } from 'styled-components';
import theme from './theme';
import {InputTypes, SubmitButtonTypes} from '../const';

const iconPopupClose = require('../img/icon-close.svg') as string;

interface Props {
  $type: string
}

export const section = () => css`
  margin: auto;
  padding: 53px 20px 10px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding: 69px 42px 40px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    max-width: 1210px;

    margin: auto;
    padding: 96px 20px 40px 20px;
  }
`;

export const button = (color: string, background: string, backgroundHovered: string) => css`
  display: inline-block;

  font-weight: 500;
  text-align: center;

  color: ${color};
  background: ${background};

  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: ${backgroundHovered};
  }
`;

export const submitButton = () => css<Props>`
  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};
  font-size: 14px;
  line-height: 20px;

  padding: 16px 60px 15px 71px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 16px;
    line-height: 22px;
    padding: 15px 214px 14px 212px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 16px;
    line-height: 22px;
    padding: 15px 126px 14px 124px;
  }

  ${(props) => {
    switch (props.$type) {
      case SubmitButtonTypes.preorder:
        return css`
          position: absolute;

          left: 50%;
          transform: translateX(-50%);
        `;

      case SubmitButtonTypes.request:
        return css`
          width: 100%;

          margin-right: 3px;
          margin-left: 3px;
          padding: 16px 112px 15px 109px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: calc(100% - 6px);
            line-height: 19px;
            padding: 17px 296px 15px 303px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            display: block;

            width: 198px;

            margin-left: 286px;
            padding: 15px 60px 14px 59px;
          }
        `;

      default:
        return css`
              `;
    }
  }}
`;

export const closeButton = () => css`
  position: absolute;
  display: block;

  background-image: url(${iconPopupClose});
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${theme.color.ghostWhite};
  background-size: contain;

  border: none;
  cursor: pointer;
`;

export const visuallyHidden = () => css`
  position: absolute;
  clip: rect(0, 0, 0, 0);
`;

export const blockCentered = (width: string) => css`
  width: ${width};
  margin: auto;
`;

export const backgroundImage = (logo: string, width: string, height: string) => css`
  content: "";
  position: absolute;
  display: block;

  width: ${width};
  height: ${height};

  background-image: url(${logo});
  background-repeat: no-repeat;
`;

export const input = () => css`
  width: 100%;
  height: 60px;

  font-weight: 500;
  text-align: center;

  color: ${theme.color.jaguar};
  border: 1px solid ${theme.color.jaguar};
  border-radius: 4px;
`;

export const headerH2 = () => css`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 31px;

  margin: 0;
  padding: 43px 23px 27px;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 32px;
    line-height: 45px;

    padding: 24px 0 33px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 41px;
    line-height: 57px;

    padding-right: 20px;
    padding-left: 0;
    padding-bottom: 56px;
  }
`;

export const textInput = () => css<Props>`
  display: none;

  font-style: normal;
  font-size: 16px;
  line-height: 22px;

  margin-bottom: 6px;
  padding: 19px 50px;

  box-sizing: border-box;

  &[type="number"] {
      -moz-appearance:textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 18px;
    line-height: 25px;

    padding: 18px 50px 16px 50px;
  }

  ${(props) => {
    switch (props.$type) {
      case InputTypes.initialFee:
        return css`
            margin-bottom: 21px;
          `;

      case InputTypes.term:
        return css`
            margin-bottom: 17px;
          `;

      case InputTypes.fullName:
        return css`
            display: block;

            text-align: start;

            margin-bottom: 20px;
            padding-top: 20px;
            padding-right: 14px;
            padding-left: 14px;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              font-size: 18px;
              line-height: 25px;

              margin-bottom: 30px;
              padding-top: 21px;
              padding-left: 23px;
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              padding: 19px 50px 16px 23px;
              background-color: ${theme.color.ghostWhite};
            }
          `;

      case InputTypes.phone:
        return css`
            display: block;

            text-align: start;

            margin-bottom: 20px;
            padding-top: 20px;
            padding-right: 14px;
            padding-left: 14px;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              font-size: 18px;
              line-height: 25px;

              width: 324px;

              padding-top: 21px;
              padding-left: 24px;
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              width: 300px;
              padding: 19px 50px 16px 23px;
              background-color: ${theme.color.ghostWhite};
            }
          `;

      case InputTypes.email:
        return css`
            display: block;

            text-align: start;

            padding-top: 20px;
            padding-right: 14px;
            padding-left: 14px;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              font-size: 18px;
              line-height: 25px;

              width: 324px;

              padding-top: 21px;
              padding-left: 23px;
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              width: 300px;
              padding: 19px 50px 16px 23px;
              background-color: ${theme.color.ghostWhite};
            }
          `;

      default:
        return css`
        `;
    }
  }}
`;