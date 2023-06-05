import styled, {StyledComponentBase} from 'styled-components';
import {headerH2} from '../../../theme/mixins';
import theme from '../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const MapBlock: StyledComponent = styled.section`
  margin-bottom: 56px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    max-width: ${theme.tabletWidthMinThreshold};

    margin: 0 auto;
    padding: 5px 46px 80px 45px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    max-width: 1210px;

    margin: auto;
    padding: 32px 20px 110px 20px;
  }
`;

export const Header: StyledComponent = styled.h2`
  ${headerH2()};
`;

export const Iframe: StyledComponent = styled.iframe`
  width: 100%;
  height: 381px;

  border: 0;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    height: 458px;
  }
`;
