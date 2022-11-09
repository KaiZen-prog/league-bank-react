import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {InputTypes} from '../../const';
import {backgroundImage, input, submitButton} from '../../theme/mixins';

import iconPurposeSelect from '../../img/icon-purpose-select.svg';
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

Calculator.Input = styled.input`
  ${input()};
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

Calculator.SubmitButton = styled.button`
  ${submitButton()};
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
