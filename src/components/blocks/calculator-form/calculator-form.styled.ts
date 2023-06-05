import styled, {css, StyledComponentBase} from 'styled-components';
import theme from '../../../theme/theme';
import {backgroundImage, headerH2} from '../../../theme/mixins';
const iconPurposeSelect = require('../../../img/icon-purpose-select.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $isOpened: boolean;
  $isClosed: boolean
}

export const Form: StyledComponent = styled.form`
`;

export const Title = styled.h2`
  ${headerH2()};
`;

export const FlexContainer: StyledComponent = styled.div`
  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Container: StyledComponent = styled.div`
  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    flex-grow: 1;
    max-width: 600px;
    margin-right: 60px;
  }
`;

export const Purpose: StyledComponent = styled.fieldset`
  border: none;

  margin: 0;
  padding: 0 3px 0;

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    padding: 0;
  }
`;

export const PurposeSelect: StyledComponent = styled.div<Props>`
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
    } else {
      return css``
    }
  }}
`;

export const PurposeSelectTitle: StyledComponent = styled.span`
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

export const PurposeList: StyledComponent = styled.ul<Props>`
  list-style: none;

  margin: 0;
  padding-left: 0;

  ${(props) => {
      if(props.$isClosed) {
        return css`
          display: none;
        `;
      } else {
        return css``
      }
  }}
`;

export const PurposeItem: StyledComponent = styled.li`
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
