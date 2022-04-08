import styled from 'styled-components';
import {css} from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../../theme/theme'

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
                
                @media (min-width: ${theme.tabletWidthMin}) {
                    position: relative;
                    height: auto;
                }
            `;
    }
  }
}
`;

Header.Container = styled.div`
  display: flex;

  padding-right: 20px;
  padding-left: 90px;

  @media (min-width: ${theme.tabletWidthMin}) and (max-width: ${theme.desktopWidthMinThreshold}) {
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
    background: url("../../img/icon-burger.svg") no-repeat;
    border: none;
    cursor: pointer;
}
`;

Header.LogoLink = styled(Link)`
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

  color: #1F1E25;

  letter-spacing: 1.1px;

  &::before {
    content: "";
    position: absolute;
    display: block;

    width: 28px;
    height: 26px;

    top: 24px;
    left: 6px;

    background-image: url("../../img/logo-desktop.svg");
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
      content: "";
      position: absolute;
      display: block;

      width: 26px;
      height: 24px;

      top: 20px;
      left: 35px;

      background-image: url("../../img/logo-tablet.svg");
    }
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-top: -12px;
    padding-top: 9px;
    padding-left: 40px;

    font-size: 16px;
    line-height: 19px;

    &::before {
      content: "";
      position: absolute;
      display: block;

      width: 20px;
      height: 19px;

      top: 8px;
      left: 13px;

      background-image: url("../../img/logo-mobile.svg");
    }
  }
`;

Header.CloseNavButton = styled.button`
display: none;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 15px;
    height: 15px;
    margin-left: auto;
    background: url("../../img/icon-close.svg") no-repeat;
    border: none;
    cursor: pointer;
    
    ${(props) => {
    if (props.$isNavOpened) {
        return css`
          display: block;
        `;
    }
}
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
}
}
`

Header.NavList = styled.ul`
display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 20px 0 0;
  list-style: none;

  @media (min-width: ${theme.tabletWidthMin}) and (max-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 15px;
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
}
}
`;

Header.UserBlock = styled.div`
  flex-shrink: 0;
  margin-left: auto;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    position: absolute;
    top: 0;
    right: 0;
    
    ${(props) => {
    if (props.$isNavOpened) {
        return css`
          position: static;
        `;
    }
}
}
`;

Header.UserLink = styled.a`
  position: relative;
  display: inline-block;
  padding-left: 30px;
  font-size: 16px;
  line-height: 91px;
  color: ${theme.color.jaguar};

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 22px;
    top: calc(50% - 11px);
    left: 0;
    background-image: url("../../img/icon-login.svg");
    background-repeat: no-repeat;
  }

  @media (min-width: ${theme.tabletWidthMin}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 14px;
    line-height: 69px;

    &::before {
      top: 8px;
      left: 10px;
    }
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-left: 15px;
    padding-left: 30px;
    line-height: 59px;

    &::before {
      width: 14px;
      height: 16px;
      top: 1px;
      left: 1px;
      background-image: url("../../img/icon-login-mobile.svg");
      background-size: cover;
    }
    
    ${(props) => {
    if (props.$isNavOpened) {
        return css`
          padding-left: 44px;
          
          &::before {
            width: 20px;
            height: 22px;
            top: 18px;
            left: 14px;
          }
        `;
    }
}
}
  }
`;

Header.UserLinkValue = styled.span`
  @media (max-width: ${theme.desktopWidthMinThreshold}) {
    display: none;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {    
    ${(props) => {
      if (props.$isNavOpened) {
        return css`
          display: block;
        `;
      }
}
}
  }
`;

export default Header;
