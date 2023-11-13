import styled, { StyledComponentBase } from 'styled-components';
import theme from '../../../theme/theme';

const iconSelect = require('../../../img/icon-select.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

export const FieldBlock: StyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  max-width: 525px;

  margin-bottom: 85px;

  &:first-child {
    margin-right: 110px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    &:first-child {
      margin-right: 0;
    }
  }
`;

export const FieldTitle: StyledComponent = styled.h3`
  flex-grow: 1;
  width: 100%;

  font-size: 22px;
  font-style: normal;
  font-weight: 500;

  line-height: 31px;

  margin-top: 0;
  margin-bottom: 12px;
`;

export const InputWrapper: StyledComponent = styled.div`
  display: flex;
  width: 100%;
`;

export const Select: StyledComponent = styled.select`
  width: 120px;
  height: 60px;

  font-family: "Roboto", "Arial", sans-serif;
  font-weight: normal;
  font-size: 30px;
  line-height: 140%;

  padding-left: 17px;

  border: 1px solid #1F1E25;
  box-sizing: border-box;
  border-radius: 4px;

  background-image: url(${iconSelect});
  background-repeat: no-repeat;
  background-position-x: 85px;
  background-position-y: 24px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  cursor: pointer;
`;
