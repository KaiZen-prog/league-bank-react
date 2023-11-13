import styled, {StyledComponentBase} from 'styled-components';
import theme from '../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const SectionBlock: StyledComponent = styled.section`
  margin: auto;
  padding: 53px 20px 10px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    padding: 69px 42px 40px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    max-width: 1210px;

    margin: auto;
    padding: 96px 20px 40px 20px;
  }
`;
