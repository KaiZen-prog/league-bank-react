import styled, { StyledComponentBase } from 'styled-components';
import theme from '../../../theme/theme';
import {visuallyHidden, button, headerH2} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${theme.color.ghostWhite};
  border-radius: 0 4px 4px 4px;

  &::before {
    position: absolute;
    content: "";

    top: 100px;
    left: 585px;

    width: 0;
    height: 289px;

    border: 1px solid #C1C2CA;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${theme.converterHistoryListWidth}) {
    &::before {
      ${visuallyHidden()};
    }
  }
`;

export const Header: StyledComponent = styled.h2`
  text-align: center;
  ${headerH2()};
`;

export const List: StyledComponent = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;

  list-style: none;

  margin: 0 0 22px 0;
  padding-right: 0;
  padding-left: 0;

  @media (min-width: ${theme.converterHistoryListWidth}) {
    align-content: space-between;
    max-height: 330px;
  }
`;

export const ButtonClearHistory: StyledComponent = styled.button`
  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};

  width: 198px;
  height: 51px;

  font-size: 16px;
  line-height: 19px;

  @media (max-width: ${theme.converterHistoryListWidth}) {
    display: block;

    margin-right: auto;
    margin-left: auto;
  }
`;
