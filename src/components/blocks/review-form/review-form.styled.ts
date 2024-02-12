import styled, {StyledComponentBase} from 'styled-components';
import theme from '../../../theme/theme';
import {input, submitButton, validatedButton, headerH3} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

interface ISubmitButton {
  $type: string;
  $isValid: boolean;
}

export const Wrapper: StyledComponent = styled.form`
  width: 100%;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 50%;
  }
`;

export const Title: StyledComponent = styled.h3`
  ${headerH3()};
`;

export const Input: StyledComponent = styled.input`
  ${input()};
  margin-bottom: 20px;
`;

export const SubmitButton: StyledComponent = styled.button<ISubmitButton>`
  ${submitButton()};
  ${validatedButton()};
`;

