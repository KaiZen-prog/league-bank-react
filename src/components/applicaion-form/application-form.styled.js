import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {InputTypes} from '../../const';
import {input, submitButton} from '../../theme/mixins';

const ApplicationForm = styled.form`
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

ApplicationForm.InputContainer = styled.div`
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

ApplicationForm.Input = styled.input`
  ${input()};
`;

ApplicationForm.RequestTable = styled.table`
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

ApplicationForm.RequestField = styled.tr`
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

ApplicationForm.RequestValue = styled.td`
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

ApplicationForm.RequestName = styled.td`
  display: block;

  font-size: 16px;
  line-height: 22px;

  color: ${theme.color.cello};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 5px;
  }
`;

ApplicationForm.SubmitButton = styled.button`
  ${submitButton()};
`;

export default ApplicationForm;
