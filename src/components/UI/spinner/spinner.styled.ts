import styled, { StyledComponentBase } from 'styled-components';
import {topper} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const SpinnerBlock: StyledComponent = styled.div`
  ${topper()};
`;
