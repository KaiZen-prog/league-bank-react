import styled, { StyledComponentBase } from 'styled-components';
import {headerH3} from '../../../theme/mixins';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const GraphSection = styled.section`
  padding-top: 96px;
  padding-bottom: 40px;
`;

export const Header: StyledComponent = styled.h3`
  ${headerH3()};
`;

export const CanvasWrapper: StyledComponent = styled.div`
  position: relative;
  
  width: 100%; 
  
  margin-top: 30px;
  padding-bottom: 33.33%;
`;
