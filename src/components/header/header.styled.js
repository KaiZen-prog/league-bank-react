import styled from 'styled-components';
import { css } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme';

import iconBurger from '../../img/icon-burger.svg';
import iconClose from '../../img/icon-close.svg';

const Header = styled.header`
  background-color: ${theme.color.ghostWhite};

  ${(props) => {
    if (props.$isNavOpened) {
      return css`
        position: fixed;
        overflow-y: auto;

        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;

        z-index: 99;

        @media (min-width: ${theme.tabletWidthMinThreshold}) {
          position: relative;
          height: auto;
        }
      `;
    }
  }}
`;

Header.Container = styled.div`
  display: flex;

  padding-right: 20px;
  padding-left: 90px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding-left: 9px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    display: block;
    position: relative;
    min-height: 48px;

    padding-left: 9px;
  }
`;

Header.Wrapper = styled.div`
  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    display: flex;
    padding-top: 16px;
    padding-left: 14px;
  }
`;

Header.BurgerButton = styled.button`
  display: none;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    display: block;
    width: 16px;
    height: 12px;
    margin-top: 2px;
    background: url(${iconBurger}) no-repeat;
    border: none;
    cursor: pointer;
  }
`;

Header.CloseNavButton = styled.button`
  display: none;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 15px;
    height: 15px;
    margin-left: auto;
    background: url(${iconClose}) no-repeat;
    border: none;
    cursor: pointer;

    ${(props) => {
    if (props.$isNavOpened) {
      return css`
          display: block;
        `;
    }
  }}
  }
`;

Header.Nav = styled.nav`
  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    display: none;
    margin-top: 36px;

    ${(props) => {
    if (props.$isNavOpened) {
      return css`
          display: block;

          margin-top: 47px;
          padding-left: 14px;
          padding-right: 3px;
        `;
    }
  }}
  }
`;

Header.NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 20px 0 0;
  list-style: none;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    display: block;
    padding-top: 0;
  }
`;

Header.NavItem = styled.li`
  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    border-top: 1px solid ${theme.color.ghost};

    &:last-child {
      border-bottom: 1px solid ${theme.color.ghost};
    }
  }
`;

Header.NavLink = styled(Link)`
  display: inline-block;
  padding: 16px 12.5px;
  font-size: 16px;
  line-height: 19px;
  color: ${theme.color.jaguar};

  &:hover,
  &:focus {
    color: ${theme.color.neonBlue};
  }

  @media (min-width: ${theme.tabletWidthMin}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding: 14px 10px;
    margin-bottom: -2px;
    font-size: 14px;
    line-height: 16px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    padding-left: 15px;
    line-height: 19px;
  }

  ${(props) => {
    if (props.$isNavOpened) {
      return css`
        padding-top: 20px;
        padding-bottom: 20px;
      `;
    }
  }}
`;

export default Header;
