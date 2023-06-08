import styled, { StyledComponentBase } from 'styled-components';
import {section, headerH2} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const ReviewsListBlock: StyledComponent = styled.section`
  ${section()};
`;

export const Title: StyledComponent = styled.section`
  ${headerH2()};
`;

export const List: StyledComponent = styled.ul`
  list-style:none;

  margin:0;
  padding:0;
`;
