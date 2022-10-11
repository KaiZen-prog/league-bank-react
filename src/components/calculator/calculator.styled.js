import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {CalculatorSteps, InputTypes, InputIconsTypes} from '../../const';
import {backgroundImage} from '../../theme/mixins';

import iconPurposeSelect from '../../img/icon-purpose-select.svg';

import iconMinus from '../../img/icon-minus.svg';
import iconPlus from '../../img/icon-plus.svg';

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

export default Calculator;
