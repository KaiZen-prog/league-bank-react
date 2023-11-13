import styled, { StyledComponentBase } from 'styled-components';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const SpinnerBlock: StyledComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;

  z-index: 1;
`;
