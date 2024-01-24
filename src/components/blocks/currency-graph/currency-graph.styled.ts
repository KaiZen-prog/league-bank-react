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
  padding-bottom: 33.33%;
`;

export const DatesWrapper: StyledComponent = styled.div`
  position: absolute;
  bottom: -45px;
  
  display: flex;

  width: 100%;
`;

export const DateSpan: StyledComponent = styled.span`
  margin-right: 8.64%;
`;
