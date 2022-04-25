import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme';

const PageLink = styled(Link)`
  position: relative;

  display: block;

  width: 160px;

  margin-right: 93px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  transform: translateY(2px);

  padding-top: 32px;
  padding-left: 44px;

  color: #1f1e25;

  letter-spacing: 1.1px;

  &::before {
    content: '';
    position: absolute;
    display: block;

    width: 28px;
    height: 26px;

    top: 24px;
    left: 6px;

    background-image: url('../../img/logo-desktop.svg');
  }

  @media (min-width: ${theme.tabletWidthMin}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    width: 170px;

    margin-right: 56px;
    font-size: 18px;
    line-height: 21px;

    padding-top: 27px;
    padding-left: 68px;
    padding-bottom: 21px;

    &::before {
      content: '';
      position: absolute;
      display: block;

      width: 26px;
      height: 24px;

      top: 20px;
      left: 35px;

      background-image: url('../../img/logo-tablet.svg');
    }
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-top: -12px;
    padding-top: 9px;
    padding-left: 40px;

    font-size: 16px;
    line-height: 19px;

    &::before {
      content: '';
      position: absolute;
      display: block;

      width: 20px;
      height: 19px;

      top: 8px;
      left: 13px;

      background-image: url('../../img/logo-mobile.svg');
    }
  }
`;

export default PageLink;
