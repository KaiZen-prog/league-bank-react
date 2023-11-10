import styled, {StyledComponentBase} from 'styled-components';
import {css} from 'styled-components';
import theme from '../../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $hideDotsOnDesktop: boolean
  $isCurrent: boolean
}

export const DotList: StyledComponent = styled.ul<Props>`
  position: absolute;

  list-style: none;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  width: 100px;

  margin: 0 0 0 3px;
  padding: 0;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    bottom: 15px;

    width: 100px;

    margin-left: 4px;
    padding: 0;
  }

  ${(props) => {
    if (props.$hideDotsOnDesktop) {
      return css`
        @media (min-width: ${theme.desktopWidthMinThreshold}) {
          display: none;
        }
      `;
    } else {
      return css``;
    }
  }}
`;

export const Dot: StyledComponent = styled.li<Props>`
  width: 6px;
  height: 6px;

  border-radius: 50%;

  margin-right: 6px;

  background-color: ${theme.color.persianBlue};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    width: 8px;
    height: 8px;

    margin-right: 8px;
  }

  ${(props) => {
    if (props.$isCurrent) {
      return css`
          background-color: ${theme.color.gainsboro};
        `;
    } else {
      return css``;
    }
  }}
`;
