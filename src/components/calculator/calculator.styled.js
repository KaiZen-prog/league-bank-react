import styled from 'styled-components';
import theme from '../../theme/theme';

const Calculator = styled.section`
  padding: 53px 20px 10px;

  margin: auto;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding: 69px 42px 40px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    padding: 96px 20px 40px 20px;

    max-width: 1210px;
    margin: auto;
  }
`;

export default Calculator;
