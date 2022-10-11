import styled from 'styled-components';
import {css} from 'styled-components';
import theme from '../../theme/theme';
import {ContactsTel, SocialLinks} from '../../const';

import iconMobile from '../../img/icon-mobile-tablet.svg';
import iconPhone from '../../img/icon-phone-tablet.svg';

import iconFacebook from '../../img/icon-facebook-mobile.svg';
import iconInstagram from '../../img/icon-instagram-mobile.svg';
import iconTwitter from '../../img/icon-twitter-mobile.svg';
import iconYoutube from '../../img/icon-youtube-mobile.svg';

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

Footer.Info = styled.div`
  margin-top: -4px;
  padding-left: 1px;
  font-size: 12px;
  line-height: 17px;
  color: #707C87;

  p {
    margin: 0;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    display: none;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    margin-top: 0;
    order: 3;
  }
`;

Footer.Nav = styled.nav`
  padding-left: 56px;
  align-self: flex-end;

  margin-top: -100px;
  padding-top: 14px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 3px;
    padding-left: 8px;
    margin-top: 0;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    align-self: flex-start;

    padding: 0;
    margin-bottom: 16px;
    margin-top: -6px;
  }
`;

Footer.NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

Footer.NavItem = styled.li`
  margin-bottom: 11px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 8px;
  }
`;

Footer.NavLink = styled.a`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${theme.color.jaguar};

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    font-size: 14px;
  }
`;

Footer.Contacts = styled.section`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: ${theme.desktopWidthMinThreshold}) {
    flex-wrap: wrap;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding-bottom: 59px;
  }
`;

Footer.ContactsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: 0;
  padding-top: 3px;
  padding-left: 8px;
  list-style: none;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    padding-top: 1px;
    padding-left: 8px;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    align-content: flex-start;

    padding-top: 0;
  }
`;

Footer.ContactsItem = styled.li`
  padding-left: 44px;

  @media (max-width: ${theme.desktopWidthMinThreshold}) {
    margin-bottom: -6px;
    padding-top: 2px;
    padding-left: 0;

    margin-left: ${(props) => props.$isPhone || '4px'};
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-right: 40px;
    margin-bottom: 1px;
    padding-left: 29px;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding-left: 41px;
    margin-bottom: 20px;
  }
`;

Footer.ContactsTel = styled.a`
  position: relative;
  display: block;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  color: ${theme.color.jaguar};

  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 16px;
    background-repeat: no-repeat;
  }

  ${(props) => {
    switch (props.$type) {
      case ContactsTel.mobile:
        return css`
          ::before {
            width: 10px;
            top: 1px;
            left: -29px;
            background-image: url(${iconMobile});
          }
        `;

      case ContactsTel.main:
        return css`
          ::before {
            width: 16px;
            top: 2px;
            left: -34px;
            background-image: url(${iconPhone});
          }
        `;

      default:
        return css`
        `;
    }
  }}
`;

Footer.TelInfo = styled.p`
  width: 170px;
  margin-top: 1px;
  font-size: 12px;
  line-height: 17px;
  color: ${theme.color.slateGrey};

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    margin-bottom: 0;
  }
`;

Footer.Socials = styled.section`
  margin-left: 17px;
  margin-right: -1px;
  padding-left: 0;

  @media (max-width: ${theme.desktopWidthMinThreshold}) {
    margin-left: -15px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-left: -17px;
  }

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding-left: 0;
    margin-left: 5px;
  }
`;

Footer.SocialsList = styled.ul`
  display: flex;
  margin: 4px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    padding-left: 10px;
  }
`;

Footer.SocialsItem = styled.li`

  @media (max-width: ${theme.desktopWidthMinThreshold}) {
    margin-right: 5px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-top: 0;
    margin-left: -2px;
  }
`;

Footer.SocialsLink = styled.a`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  margin-left: 15px;
  background-repeat: no-repeat;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-left: 17px;
  }

  ${(props) => {
    switch (props.$type) {
      case SocialLinks.facebook:
        return css`
          width: 9px;
          background-image: url(${iconFacebook});
        `;

      case SocialLinks.instagram:
        return css`
          background-image: url(${iconInstagram});
        `;

      case SocialLinks.twitter:
        return css`
          margin-top: 2px;
          height: 13px;
          background-image: url(${iconTwitter});
        `;

      case SocialLinks.youtube:
        return css`
          margin-top: 2px;
          height: 13px;
          background-image: url(${iconYoutube});
        `;

      default:
        return css`
        `;
    }
  }}
`;


export default Footer;