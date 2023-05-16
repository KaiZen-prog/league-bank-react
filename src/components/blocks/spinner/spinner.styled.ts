import styled, { StyledComponentBase } from "styled-components";

interface StyledComponent extends StyledComponentBase<any, object> {}


export const SpinnerBlock: StyledComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  background: white;
  width: 100%;
`;
