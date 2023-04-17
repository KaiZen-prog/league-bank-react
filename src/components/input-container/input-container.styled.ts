import styled, {css, StyledComponentBase} from 'styled-components';
import theme from '../../theme/theme';
import {InputTypes} from '../../const';

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $type: string;
}

const InputContainer: StyledComponent = styled.div<Props>`
  position: relative;

  margin-bottom: 11px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 1px;
  }

  ${(props) => {
    switch (props.$type) {
      case InputTypes.initialFee:
        return css`
            margin-bottom: 0;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              margin-bottom: 0;
            }
          `;

      case InputTypes.term:
        return css`
            margin-bottom: 3px;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              margin-bottom: 3px;
            }
          `;

      case InputTypes.userInfo:
        return css`
            margin-bottom: 30px;
            padding-right: 3px;
            padding-left: 3px;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;

              margin-bottom: 20px;
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              padding-right: 70px;
              padding-left: 70px;
            }
          `;

      default:
        return css`
          `;
    }
  }}
`;

export default InputContainer;
