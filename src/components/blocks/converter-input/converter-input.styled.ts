import styled, { StyledComponentBase } from 'styled-components';
import {input} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Input: StyledComponent = styled.input`
  ${input()};

  font-size: 24px;
  line-height: 140%;

  margin-right: 20px;
  padding-right: 15px;
  padding-left: 15px;

  &::placeholder {
    color: #000000;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;

  &:hover,
  &:focus {
    -moz-appearance: number-input;
  }
`;
