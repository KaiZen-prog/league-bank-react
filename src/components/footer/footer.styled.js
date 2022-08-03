import styled from 'styled-components';
//import {css} from 'styled-components';
import theme from '../../theme/theme';

const Footer = styled.footer`
  background-color: ${theme.color.ghostWhite};
`;

Footer.Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1210px;
  padding: 56px 20px 40px 20px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    flex-wrap: wrap;
    padding: 30px 15px 62px 15px;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding: 56px 45px 55px 45px;
  }

`;

Footer.Address = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 477px;
  margin-right: 57px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    min-width: auto;
    margin-bottom: 10px;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    flex-wrap: nowrap;
    min-width: 260px;
    margin-right: 74px;
  }
`;

export default Footer;
