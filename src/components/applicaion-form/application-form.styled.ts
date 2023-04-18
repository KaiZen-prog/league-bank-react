import styled, {StyledComponentBase} from 'styled-components';
import InputMask from 'react-input-mask';
import theme from '../../theme/theme';
import {input, submitButton} from '../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $type: string;
}

export const Form: StyledComponent = styled.form`
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

export const TextInput: StyledComponent= styled.input`
  ${input()};
`;

export const PhoneInput: StyledComponent= styled(InputMask)`
  ${input()};
`;

export const RequestTable: StyledComponent = styled.table`
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

export const RequestField: StyledComponent = styled.tr`
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

export const RequestValue: StyledComponent = styled.td`
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

export const RequestName: StyledComponent = styled.td`
  display: block;

  font-size: 16px;
  line-height: 22px;

  color: ${theme.color.cello};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 5px;
  }
`;

export const SubmitButton: StyledComponent = styled.button<Props>`
  ${submitButton()};
`;
