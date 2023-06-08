import styled, {StyledComponentBase} from 'styled-components';
import {section, headerH2} from '../../../theme/mixins';
import theme from '../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const MapBlock: StyledComponent = styled.section`
  ${section()};
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
