import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {InputTypes, InputIconsTypes, LabelTypes} from '../../const';
import {visuallyHidden, input} from '../../theme/mixins';

import iconMinus from '../../img/icon-minus.svg';
import iconPlus from '../../img/icon-plus.svg';
import iconCheckbox from '../../img/icon-checkbox.svg';


const LoanParams = styled.fieldset`
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

LoanParams.Label = styled.label`
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

LoanParams.Icon = styled.span`
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

LoanParams.Input = styled.input`
  ${input()};
`;

LoanParams.InputDiv = styled(LoanParams.Input)`
  display: block;
`;

LoanParams.HelpText = styled.p`
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

LoanParams.InputRange = styled.input`
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

LoanParams.RangeValue = styled.span`
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

LoanParams.TermContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3px;
`;

LoanParams.Additional = styled.label`
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

LoanParams.InputCheckbox = styled.input`
  ${visuallyHidden()};

  &:checked + .calculator__checkbox-icon {
  border: none;

  background-color: ${theme.color.neonBlue};
  background-image: url(${iconCheckbox});
}
`;

LoanParams.CheckboxIcon = styled.span`
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

export default LoanParams;
