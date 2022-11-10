import { css } from 'styled-components';
import theme from './theme';
import {InputTypes, SubmitButtonTypes} from '../const';

export const button = (color, background, backgroundHovered) => css`
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

export const submitButton = () => css`
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

export const visuallyHidden = () => css`
    position: absolute;
    clip: rect(0, 0, 0, 0);
`;

export const blockCentered = (width) => css`
  width: ${width};
  margin: auto;
`;

export const backgroundImage = (logo, width, height) => css`
  content: "";
  position: absolute;
  display: block;

  width: ${width};
  height: ${height};

  background-image: url(${logo});
  background-repeat: no-repeat;
`;

export const input = () => css`
display: none;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  width: 100%;
  height: 60px;

  margin-bottom: 6px;
  padding: 19px 50px;

  color: ${theme.color.jaguar};
  border: 1px solid ${theme.color.jaguar};
  border-radius: 4px;
  box-sizing: border-box;

  &[type="number"] {
      -moz-appearance:textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 16px;
    line-height: 22px;
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
