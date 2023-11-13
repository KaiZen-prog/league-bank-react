import styled, { StyledComponentBase } from 'styled-components';
import {headerH2} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Title: StyledComponent = styled.h2`
  ${headerH2()};
`;

export const Wrapper: StyledComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;
