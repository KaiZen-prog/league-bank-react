import styled from 'styled-components';
import theme from '../../theme/theme';
import {button} from '../../theme/mixins';

import iconLeftArrow from '../../img/icon-left-arrow.svg';
import iconRightArrow from '../../img/icon-right-arrow.svg';
import iconSelect from '../../img/icon-select.svg';

const Converter = styled.section`
  max-width: 1210px;

  margin: 0 auto 100px auto;
  padding-top: 46px;
  padding-right: 20px;
  padding-left: 20px;
`;

Converter.Header = styled.h2`
  font-weight: 700;
  font-size: 41px;

  color: ${theme.color.jaguar};

  line-height: 57px;

  margin-top: 0;
  margin-bottom: 49px;
`;

Converter.Form = styled.form`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${theme.converterFlexWrapWidth}) {
    &::before {
      position: absolute;
      content: "";

      top: 52px;
      left: 561px;

      width: 54px;
      height: 18px;

      background-image: url(${iconLeftArrow});
      background-repeat: no-repeat;
    }

    &::after {
      position: absolute;
      content: "";

      top: 70px;
      left: 564px;

      width: 54px;
      height: 18px;

      background-image: url(${iconRightArrow});
      background-repeat: no-repeat;
    }
  }

`;

Converter.FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
`;

Converter.Field = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  max-width: 525px;

  margin-bottom: 85px;

  &:first-child {
    margin-right: 120px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    &:first-child {
      margin-right: 0;
    }
  }
`;

Converter.FieldTitle = styled.h3`
  flex-grow: 1;
  width: 100%;

  font-size: 22px;
  font-style: normal;
  font-weight: 500;

  line-height: 31px;

  margin-top: 0;
  margin-bottom: 12px;
`;

Converter.InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

Converter.Label = styled.label`
`;

Converter.Input = styled.input`
  width: 100%;
  height: 60px;

  font-weight: 500;
  font-size: 24px;
  line-height: 140%;

  text-align: center;

  margin-right: 20px;
  padding-right: 15px;
  padding-left: 15px;

  border: 1px solid ${theme.color.jaguar};
  box-sizing: border-box;
  border-radius: 4px;

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

Converter.Select = styled.select`
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

Converter.Button = styled.button`
  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};

  width: 390px;
  height: 60px;

  font-size: 18px;
  line-height: 140%;

  padding-top: 4px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 100%;
  }
`;

export default Converter;
