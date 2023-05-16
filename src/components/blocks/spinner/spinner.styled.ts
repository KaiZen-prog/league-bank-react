import styled, { StyledComponentBase } from "styled-components";

interface StyledComponent extends StyledComponentBase<any, object> {}

export const SpinnerBlock: StyledComponent = styled.div`
  position: absolute;
  width: 100%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  opacity: 0.8;
`;
