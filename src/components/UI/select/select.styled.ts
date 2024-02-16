import styled, { StyledComponentBase } from 'styled-components';

const iconSelect = require('../../../assets/img/icon-select.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

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
