import styled, {StyledComponentBase} from 'styled-components';
import theme from '../../../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const MainSliderBlock: StyledComponent = styled.section`
  position: relative;
  overflow: hidden;
`;

export const SlidesContainer: StyledComponent = styled.div`
  display: flex;
  position: relative;
  transition: left 1.5s ease 0s;

  cursor: grabbing;

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    cursor: default;
  }
`;
