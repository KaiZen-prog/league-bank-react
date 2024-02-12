import styled, { StyledComponentBase } from 'styled-components';
import theme from '../../../theme/theme';
import {headerH2} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Title: StyledComponent = styled.h2`
  ${headerH2()};
`;

export const Wrapper: StyledComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    
  }
`;
