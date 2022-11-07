import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {CalculatorSteps, InputTypes, InputIconsTypes, LabelTypes, OfferTypes, SubmitButtonTypes} from '../../const';
import {backgroundImage, visuallyHidden, button} from '../../theme/mixins';

import iconPurposeSelect from '../../img/icon-purpose-select.svg';
import iconMinus from '../../img/icon-minus.svg';
import iconPlus from '../../img/icon-plus.svg';
import iconCheckbox from '../../img/icon-checkbox.svg';
import iconPopupClose from '../../img/icon-close.svg';

const Calculator = styled.section`
  padding: 53px 20px 10px;

  margin: auto;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding: 69px 42px 40px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    padding: 96px 20px 40px 20px;

    max-width: 1210px;
    margin: auto;
  }
`;

Calculator.Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 31px;

  margin-top: 0;
  margin-bottom: 22px;
  padding-left: 3px;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 32px;
    line-height: 45px;

    margin-bottom: 28px;
    padding-left: 3px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 41px;
    line-height: 57px;

    margin-bottom: 49px;
    padding-left: 0;
  }
`;

Calculator.FlexContainer = styled.div`
  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

Calculator.Container = styled.div`
  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    flex-grow: 1;
    max-width: 600px;
    margin-right: 60px;
  }
`;

Calculator.Purpose = styled.fieldset`
  border: none;

  margin: 0;
  padding: 0 3px 0;

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    padding: 0;
  }
`;

Calculator.StepTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  margin-top: 0;
  margin-bottom: 14px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 18px;
    line-height: 25px;

    margin-bottom: 18px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 22px;
    line-height: 31px;

    margin-bottom: 22px;
  }

  ${(props) => {
    switch (props.$type) {
      case CalculatorSteps.params:
        return css`
          margin-bottom: 10px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            margin-bottom: 14px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            margin-bottom: 18px;
          }
        `;

      case CalculatorSteps.request:
        return css`
          margin-bottom: 30px;
          padding-right: 30px;
          padding-left: 45px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            width: 320px;

            margin-right: auto;
            margin-left: auto;
            margin-bottom: 18px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            width: 375px;
            margin-bottom: 18px;
          }
        `;

      default:
        return css`
        `;
    }
  }}
`;

Calculator.PurposeSelect = styled.div`
  position: relative;

  width: 100%;

  border: 1px solid ${theme.color.jaguar};
  box-sizing: border-box;
  border-radius: 4px;

  &::before {
    top: 24px;
    right: 13px;

    ${backgroundImage(iconPurposeSelect, '18px', '11px')};

    cursor: pointer;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    &::before {
      right: 22px;
    }
  }

  ${(props) => {
    if(props.$isOpened) {
      return css`
        padding-bottom: 0;

        &::before {
          transform: rotate(180deg);
        }
      `;
    }
  }}
`;

Calculator.PurposeSelectTitle = styled.span`
  display: block;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: ${theme.color.jaguar};

  padding: 19px 35px 17px 14px;

  cursor: pointer;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding: 19px 50px 17px 23px;
  }
`;

Calculator.PurposeList = styled.ul`
  list-style: none;

  margin: 0;
  padding-left: 0;

  ${(props) => {
    if(props.$isClosed) {
      return css`
        display: none;
      `;
    }
  }}
`;

Calculator.PurposeItem = styled.li`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  color: ${theme.color.jaguar};

  padding: 20px 10px 17px 14px;

  border-bottom: 1px solid ${theme.color.ghost};

  cursor: pointer;

  &:first-child {
      border-top: 1px solid ${theme.color.blackPearl};
    }

  &:last-child {
      border: none;
    }
`;

Calculator.Params = styled.fieldset`
  border: none;
  padding: 25px 1px 29px 1px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 35px;
    padding-bottom: 39px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    margin-right: 0;
    margin-left: 0;
    padding: 33px 1px 29px 0;
  }
`;

Calculator.InputContainer = styled.div`
  position: relative;

  margin-bottom: 11px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 1px;
  }

  ${(props) => {
    switch (props.$type) {
      case InputTypes.initialFee:
        return css`
          margin-bottom: 0;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            margin-bottom: 0;
          }
        `;

      case InputTypes.term:
        return css`
          margin-bottom: 3px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            margin-bottom: 3px;
          }
        `;

      case InputTypes.userInfo:
        return css`
          margin-bottom: 30px;
          padding-right: 3px;
          padding-left: 3px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            margin-bottom: 20px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            padding-right: 70px;
            padding-left: 70px;
          }
        `;

      default:
        return css`
        `;
    }
  }}
`;

Calculator.Label = styled.label`
  display: block;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  color: ${theme.color.cello};

  margin-top: 0;
  margin-bottom: 8px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 8px;
  }

  ${(props) => {
    if (props.$type === InputTypes.initialFee) {
      return css`
        margin-bottom: 9px;

        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          margin-bottom: 9px;
        }
      `;
    }
  }}
`;

Calculator.Icon = styled.span`
  content: "";
  position: absolute;
  display: block;

  width: 32px;
  height: 32px;

  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  z-index: 1;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 8px;
  }

  ${(props) => {
    switch (props.$type) {
      case InputIconsTypes.minus:
        return css`
            top: 43px;
            left: 16px;
            background-image: url(${iconMinus});
        `;

      case InputIconsTypes.plus:
        return css`
          top: 44px;
          right: 7px;
          background-image: url(${iconPlus});

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            right: 16px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            right: 16px;
          }
        `;

      default:
        return css`
            `;
    }
  }}
`;

Calculator.Input = styled.input`
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

Calculator.InputDiv = styled(Calculator.Input)`
  display: block;
`;

Calculator.HelpText = styled.p`
  font-size: 14px;
  line-height: 140%;

  margin-top: 0;
  margin-bottom: 0;

  color: ${theme.color.slateGrey};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 15px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    margin-bottom: 20px;
  }
`;

Calculator.InputRange = styled.input`
  display: block;

  width: 100%;
  height: 1px;

  margin: 15px 0 11px 0;

  background-color: ${theme.color.ghost};

  appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;

    width: 14px;
    height: 14px;

    background-color: ${theme.color.neonBlue};
    border-radius: 50%;

    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;

    width: 14px;
    height: 14px;

    background-color: ${theme.color.neonBlue};
    border-radius: 50%;

    cursor: pointer;
  }
`;

Calculator.TermContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3px;
`;

Calculator.RangeValue = styled.span`
  display: inline-block;

  width: max-content;

  font-size: 14px;
  line-height: 20px;

  color: ${theme.color.slateGrey};

  margin-bottom: 9px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 14px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    margin-bottom: 19px;
  }
`;

Calculator.Additional = styled.label`
  position: relative;

  font-size: 14px;
  line-height: 20px;

  padding-left: 24px;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 16px;
    line-height: 22px;
    padding-left: 24px;
  }

  ${(props) => {
    if (props.$type === LabelTypes.car) {
      return css`
        display: block;
        margin-bottom: 10px;
      `;
    }
  }}
`;

Calculator.CheckboxIcon = styled.span`
  content: "";
  position: absolute;
  display: block;

  width: 16px;
  height: 16px;

  top: 0;
  left: 0;

  border: 1px solid ${theme.color.neonBlue};
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 2px;
  box-sizing: border-box;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    top: 1px;
  }
`;

Calculator.InputCheckbox = styled.input`
  ${visuallyHidden()};

  &:checked + .calculator__checkbox-icon {
  border: none;

  background-color: ${theme.color.neonBlue};
  background-image: url(${iconCheckbox});
}
`;

Calculator.Offer = styled.div`
  position: relative;

  margin-right: 3px;
  margin-left: 3px;
  padding: 35px 5px 91px 15px;

  background-color: ${theme.color.ghostWhite};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-right: 3px;
    margin-left: 3px;
    padding: 53px 5px 111px 60px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    align-self: flex-start;

    width: 500px;

    margin-top: 7px;
    margin-right: 0;
    padding: 53px 5px 111px 58px;
  }

  ${(props) => {
    if (props.$type === OfferTypes.refusal) {
      return css`
        padding: 35px 10px 34px 15px;

          @media (min-width: ${theme.tabletWidthMinThreshold}) {
            padding-top: 54px;
            padding-left: 61px;
            padding-bottom: 54px;
          }

          @media (min-width: ${theme.desktopWidthMinThreshold}) {
            padding: 54px 5px 55px 59px;
          }
        `;
    }
  }}
`;

Calculator.OfferTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  margin-top: 0;
  margin-bottom: 23px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 22px;
    line-height: 31px;

    margin-bottom: 24px;
  }

  ${(props) => {
    if (props.$type === OfferTypes.refusal) {
      return css`
        width: 220px;
        margin-bottom: 12px;

        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          width: 370px;
          margin-bottom: 13px;
        }
      `;
    }
  }}
`;

Calculator.OfferList = styled.ul`
  list-style: none;

  margin-top: 0;
  margin-bottom: 29px;
  padding-left: 0;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 427px;

    margin-bottom: 8px;
  }
`;

Calculator.OfferItem = styled.li`
  margin-bottom: 14px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 200px;

    margin-bottom: 26px;
  }
`;

Calculator.OfferValue = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  margin: 0;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 22px;
    line-height: 31px;

    margin-bottom: 2px;
  }
`;

Calculator.OfferName = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  margin: 0;

  color: ${theme.color.cello};

  ${(props) => {
    if (props.$type === OfferTypes.refusal) {
      return css`
        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          width: 265px;
        }
      `;
    }
  }}
`;

Calculator.SubmitButton = styled.button`
  font-size: 14px;
  line-height: 20px;

  padding: 16px 60px 15px 71px;

  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};

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

Calculator.RegApplication = styled.form`
  padding-top: 43px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 55px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    margin-top: 37px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 63px;
    padding-bottom: 70px;

    width: 770px;

    background-color: ${theme.color.ghostWhite};
  }
`;

Calculator.RequestTable = styled.table`
  width: 100%;

  margin-right: 0;
  margin-bottom: 13px;
  padding: 1px 1px 1px 1px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 15px;
    padding: 18px 1px 1px 1px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    padding: 4px 67px 1px 67px;
  }
`;

Calculator.RequestField = styled.tr`
  display: block;

  width: 100%;

  margin-bottom: 14px;
  padding-bottom: 10px;

  border-bottom: 1px solid ${theme.color.silver};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    margin-bottom: 12px;
    padding-bottom: 9px;
  }
`;

Calculator.RequestValue = styled.td`
  display: block;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 22px;
    line-height: 31px;
  }
`;

Calculator.RequestName = styled.td`
  display: block;

  font-size: 16px;
  line-height: 22px;

  color: ${theme.color.cello};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 5px;
  }
`;

Calculator.Popup = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  background-color: rgba(88, 87, 87, 0.6);

  z-index: 1;
`;

Calculator.PopupContainer = styled.div`
  position: fixed;

  width: 290px;
  min-height: 198px;

  padding: 35px 25px 27px 25px;

  background-color: ${theme.color.ghostWhite};
  border-radius: 4px;
  box-sizing: border-box;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 678px;
    min-height: 193px;

    padding-top: 52px;
    padding-bottom: 15px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 500px;
  }
`;

Calculator.PopupClose = styled.button`
  position: absolute;
  display: block;

  width: 15px;
  height: 15px;

  top: 14px;
  right: 14px;

  background-image: url(${iconPopupClose});
  background-repeat: no-repeat;
  background-color: ${theme.color.ghostWhite};
  background-size: cover;

  border: none;
  cursor: pointer;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    top: 30px;
    right: 30px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    width: 18px;
    height: 18px;

    top: 25px;
    right: 25px;
  }
`;

Calculator.PopupTitle = styled.h2`
  width: 200px;

  margin: 0 auto 13px;

  font-size: 18px;
  line-height: 25px;
  text-align: center;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-weight: 500;
    font-size: 22px;
    line-height: 31px;

    text-align: center;

    width: 400px;

    margin: 0 auto 13px;
  }
`;

Calculator.PopupContent = styled.p`
  width: auto;

  font-size: 16px;
  line-height: 22px;
  text-align: center;

  margin: 0 auto;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 300px;
  }
`;

export default Calculator;
