import React from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../const";
import withHeader from "../../hocs/with-header/with-header";
import Login from "../log-in";
import Block from './header.styled';

const Header = (props) => {
  const {
    passwordInputRef,
    isNavOpened,
    onBurgerClick,
    onNavClose,
    isLogInOpened,
    onLogInOpening,
    onLogInClosure,
    onLogInFieldChange,
    onPasswordShow,
    onPasswordHide
  } = props;

  return (
    <Block $isNavOpened={isNavOpened}>
      <Block.Container>
        <Block.Wrapper>
          <Block.BurgerButton type="button" onClick={onBurgerClick}>
            <span className="visually-hidden">Открыть меню</span>
          </Block.BurgerButton>
          <Block.LogoLink to={AppRoute.ROOT}>
            ЛИГА Банк
          </Block.LogoLink>
          <Block.CloseNavButton type="button" $isNavOpened={isNavOpened} onClick={onNavClose}>
            <span className="visually-hidden">Закрыть меню</span>
          </Block.CloseNavButton>
        </Block.Wrapper>

        <Block.Nav $isNavOpened={isNavOpened}>
          <Block.NavList>
            <Block.NavItem>
              <Block.NavLink to="#" $isNavOpened={isNavOpened}>Услуги</Block.NavLink>
            </Block.NavItem>
            <Block.NavItem>
              <Block.NavLink href="#" $isNavOpened={isNavOpened}>Рассчитать кредит</Block.NavLink>
            </Block.NavItem>
            <Block.NavItem>
              <Block.NavLink to={AppRoute.CONVERTER} $isNavOpened={isNavOpened}>Конвертер валют</Block.NavLink>
            </Block.NavItem>
            <Block.NavItem>
              <Block.NavLink href="#" $isNavOpened={isNavOpened}>Контакты</Block.NavLink>
            </Block.NavItem>
          </Block.NavList>
        </Block.Nav>

        <Block.UserBlock $isNavOpened={isNavOpened}>
          <Block.UserLink href="#" $isNavOpened={isNavOpened} onClick={onLogInOpening}>
            <Block.UserLinkValue $isNavOpened={isNavOpened}>
            Войти в Интернет-банк
            </Block.UserLinkValue>
          </Block.UserLink>
          <Login
            passwordInputRef={passwordInputRef}
            isLogInOpened={isLogInOpened}
            onLogInClosure={onLogInClosure}
            onLogInFieldChange={onLogInFieldChange}
            onPasswordShow={onPasswordShow}
            onPasswordHide={onPasswordHide}
          />
        </Block.UserBlock>
      </Block.Container>
    </Block>

  );
};

Header.propTypes = {
  passwordInputRef: PropTypes.shape({}).isRequired,

  isNavOpened: PropTypes.bool.isRequired,
  onBurgerClick: PropTypes.func.isRequired,
  onNavClose: PropTypes.func.isRequired,

  isLogInOpened: PropTypes.bool.isRequired,

  onLogInOpening: PropTypes.func.isRequired,
  onLogInClosure: PropTypes.func.isRequired,
  onLogInFieldChange: PropTypes.func.isRequired,
  onPasswordShow: PropTypes.func.isRequired,
  onPasswordHide: PropTypes.func.isRequired,
};

Header.displayName = `Header`;

export default withHeader(Header);
