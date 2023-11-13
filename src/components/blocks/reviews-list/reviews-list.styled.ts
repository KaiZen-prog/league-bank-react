import styled, { StyledComponentBase } from 'styled-components';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const Wrapper: StyledComponent = styled.div`
  position: relative;
`;


export const List: StyledComponent = styled.ul`
  list-style:none;

  margin:0;
  padding:0;
`;
