import styled, {StyledComponentBase} from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {CalculatorSteps} from '../../const';

interface StyledComponent extends StyledComponentBase<any, object> {}

interface Props {
  $type: string
}

export const StepTitleBlock: StyledComponent = styled.h3<Props>`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  margin-top: 0;
  margin-bottom: 14px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 18px;
    line-height: 25px;

    margin-bottom: 18px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 22px;
    line-height: 31px;

    margin-bottom: 22px;
  }

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
