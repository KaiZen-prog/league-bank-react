import styled, {StyledComponentBase} from 'styled-components';
import theme from '../../theme/theme';

interface StyledComponent extends StyledComponentBase<any, object> {}

export const MapBlock: StyledComponent = styled.section`
  margin-bottom: 56px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    max-width: ${theme.tabletWidthMinThreshold};

    margin: 0 auto;
    padding: 5px 46px 80px 45px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    max-width: 1210px;

    margin: auto;
    padding: 32px 20px 110px 20px;
  }
`;

export const Header: StyledComponent = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 31px;

  margin: 0;
  padding: 43px 23px 27px;

  color: ${theme.color.jaguar};

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 32px;
    line-height: 45px;

    padding: 24px 0 33px;
  }

  @media (min-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 41px;
    line-height: 57px;

    padding-right: 20px;
    padding-left: 0;
    padding-bottom: 56px;
  }
`;

export const Iframe: StyledComponent = styled.iframe`
  width: 100%;
  height: 381px;

  border: 0;

  @media (min-width: ${theme.tabletWidthMinThreshold}) {
    height: 458px;
  }
`;
