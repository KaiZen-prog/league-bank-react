import styled, {css, StyledComponentBase} from 'styled-components';
import { commonText } from '../../../theme/mixins';

const starIcon = require('../../../assets/img/icon-star.svg') as string;
const starIconActive = require('../../../assets/img/icon-star-active.svg') as string;

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

  margin-bottom: 20px;
`;

export const StarContainer: StyledComponent = styled.div`
  &:hover label span,
  &:hover ~ div label span {
    &:before{
      background: url(${starIconActive}) transparent no-repeat center;
    }
  }
`;

export const RatingTitle = styled.p`
  ${commonText()};
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
