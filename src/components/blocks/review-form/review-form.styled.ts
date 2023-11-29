import styled, {StyledComponentBase} from 'styled-components';
import {input} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Input: StyledComponent = styled.input`
  ${input()};
`;
