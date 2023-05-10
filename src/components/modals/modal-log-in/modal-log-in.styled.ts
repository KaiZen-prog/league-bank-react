import styled, {StyledComponentBase} from 'styled-components';
import { button } from '../../../theme/mixins';
import theme from '../../../theme/theme';

const iconClose = require('../../../img/icon-close.svg') as string;
const iconLogin = require('../../../img/logo-log-in.svg') as string;
const iconPassword = require('../../../img/icon-password.svg') as string;

interface StyledComponent extends StyledComponentBase<any, object> {}

export const LoginBlock: StyledComponent = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  background-color: ${theme.color.matterhorn};

  z-index: 99;
`;

export const Form: StyledComponent = styled.form`
  position: fixed;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: baseline;

  width: 544px;
  min-height: 455px;

  padding: 56px;

  background-color: ${theme.color.ghostWhite};

  border: 4px solid ${theme.color.neonBlue};
  box-sizing: border-box;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    width: 678px;
    min-height: 493px;
    padding: 55px 84px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 290px;
    padding: 45px 16px 71px 16px;
  }
`;

export const Logo: StyledComponent = styled.div`
  width: 151px;
  height: 31px;

  margin-top: -1px;
  margin-bottom: 35px;
  margin-left: -6px;

  background-image: url(${iconLogin});
  background-repeat: no-repeat;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    margin-bottom: 35px;
    margin-left: -1px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 25px;
  }
`;

export const Close: StyledComponent = styled.button`
  position: absolute;

  top: 53px;
  right: 54px;

  width: 20px;
  height: 20px;

  background-color: transparent;
  background-image: url(${iconClose});
  background-repeat: no-repeat;
  background-size: cover;

  border: none;
  cursor: pointer;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    top: 55px;
    right: 81px;

    width: 20px;
    height: 20px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 16px;
    height: 16px;

    top: 43px;
    right: 14px;
  }
`;

export const Label: StyledComponent = styled.label`
  position: relative;

  font-size: 16px;
  line-height: 22px;

  margin-top: 1px;
  margin-bottom: 25px;

  color: ${theme.color.cello};
`;

export const LoginLabel: StyledComponent = styled(Label)`
  margin-bottom: 23px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 18px;
  }
`;

export const PasswordLabel: StyledComponent = styled(Label)`
  margin-bottom: 49px;

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    margin-bottom: 30px;
  }
`;

export const Input: StyledComponent = styled.input`
  font-size: 24px;
  line-height: 58px;

  width: 424px;
  height: 60px;

  margin-top: 5px;
  padding-left: 10px;

  background-color: ${theme.color.ghostWhite};
  border: 1px solid ${theme.color.jaguar};
  border-radius: 4px;

  box-sizing: border-box;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    width: 502px;
    height: 60px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    width: 250px;
  }
`;

export const LoginInput: StyledComponent = styled(Input)`
  padding-right: 60px;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    padding-right: 50px;
  }
`;

export const PasswordInput: StyledComponent = styled(Input)`
  padding-right: 50px;
`;

export const ShowPassword: StyledComponent = styled.button`
  position: absolute;
  display: block;

  width: 22px;
  height: 12px;

  right: 80px;
  bottom: 189px;

  background-color: ${theme.color.ghostWhite};
  background-image: url(${iconPassword});
  background-repeat: no-repeat;

  border: none;
  cursor: pointer;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    right: 108px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    right: 31px;
    bottom: 176px;
  }
`;

export const Submit: StyledComponent = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  padding: 20px 188px 19px 186px;

  ${button(theme.color.ghostWhite, theme.color.neonBlue, theme.color.persianBlue)};

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    padding: 20px 227px 19px 225px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    padding: 16px 107px 14px 104px;
  }
`;

export const RestorePasswordLink: StyledComponent = styled.a`
  position: absolute;

  font-size: 14px;
  line-height: 20px;

  bottom: 141px;
  right: 54px;

  color: ${theme.color.slateGrey};
  text-align: right;

  @media (min-width: ${theme.tabletWidthMinThreshold}) and (max-width: ${theme.desktopWidthMinThreshold}) {
    font-size: 12px;
    line-height: 17px;

    right: 84px;
  }

  @media (max-width: ${theme.tabletWidthMinThreshold}) {
    bottom: 41px;
    right: 50%;
    transform: translateX(50%);
  }
`;
