import styled, {StyledComponentBase} from 'styled-components';
import {css} from 'styled-components';
import theme from '../../../theme/theme';
import {headerH3} from '../../../theme/mixins';
import {CalculatorSteps} from '../../../const';

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $type: string
}

export const StepTitleBlock: StyledComponent = styled.h3<Props>`
  ${headerH3()};

  ${(props) => {
    switch (props.$type) {
      case CalculatorSteps.params:
        return css`
            margin-bottom: 10px;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              margin-bottom: 14px;
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              margin-bottom: 18px;
            }
          `;

      case CalculatorSteps.request:
        return css`
            margin-bottom: 30px;
            padding-right: 30px;
            padding-left: 45px;

            @media (min-width: ${theme.tabletWidthMinThreshold}) {
              width: 320px;

              margin-right: auto;
              margin-left: auto;
              margin-bottom: 18px;
            }

            @media (min-width: ${theme.desktopWidthMinThreshold}) {
              width: 375px;
              margin-bottom: 18px;
            }
          `;

      default:
        return css`
          `;
    }
  }}
`;
