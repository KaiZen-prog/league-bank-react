import styled, { StyledComponentBase } from 'styled-components';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const CanvasBlock: StyledComponent = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

