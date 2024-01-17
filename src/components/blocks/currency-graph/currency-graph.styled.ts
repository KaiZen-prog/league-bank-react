import styled, { StyledComponentBase } from 'styled-components';
import {headerH3} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Header: StyledComponent = styled.h3`
  ${headerH3()};
`;
