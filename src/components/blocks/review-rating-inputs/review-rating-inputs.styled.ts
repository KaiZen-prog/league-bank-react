import styled, {css, StyledComponentBase} from 'styled-components';

const starIcon = require('../../../img/icon-star.svg') as string;
const starIconActive = require('../../../img/icon-star-active.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $left: number,
  $isActive: boolean
}

export const Wrapper: StyledComponent = styled.div`
  position: relative;

  display: flex;
  flex-direction: row-reverse;
  
  height: 37px;
`;

export const InputContainer: StyledComponent = styled.div`
`;

export const Label: StyledComponent = styled.label`
  &:hover span,
  &:hover ~ label span {
    &:before{
      background: url(${starIconActive}) transparent no-repeat center;
    }
  }
`;

export const Star: StyledComponent = styled.span<Props>`
  position:absolute;
  top: 0;
  display: inline-block;
  height: 33px;
  width: 37px;
  overflow: hidden;

  ${(props) => css`
    left: ${props.$left}px;
  `
};

  &:before{
    content: "";
    display: inline-block;
    width: 37px;
    height: 33px;
    background-size: 37px 33px;

    ${(props) => {
    if (!props.$isActive) {
      return css`
          background: url(${starIcon}) transparent no-repeat center;
      `;
    } else {
      return css`
          background: url(${starIconActive}) transparent no-repeat center;
      `;
    }
  }
}}
`;
