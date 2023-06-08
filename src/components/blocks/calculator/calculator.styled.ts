import styled, {StyledComponentBase} from 'styled-components';
import {section} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

const CalculatorSection: StyledComponent = styled.section`
  ${section()};
`;

export default CalculatorSection;
