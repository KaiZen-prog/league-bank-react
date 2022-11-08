import React, {useState} from 'react';
import {AppRoute, KeyCode} from '../../const';
import PopupLogin from '../popup-log-in';
import Block from './header.styled';
import PageLink from '../page-link/page-link';

function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [isLogInOpened, setIsLoginInOpened] = useState(false);

  const onNavClose = () => {
    setIsNavOpened(false);
    document.documentElement.style.overflow = 'auto';
  };

  const onBurgerClick = () => {
    if (isNavOpened === false) {
      setIsNavOpened(true);
      document.documentElement.style.overflow = 'hidden';
    } else {
      onNavClose();
    }
  };

  const onLogInOpening = () => {
    setIsLoginInOpened(true);
    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', closeLogInKeydown);
  };

  const onLogInClosure = () => {
    setIsLoginInOpened(false);
    document.documentElement.style.overflow = 'auto';
    document.removeEventListener('keydown', closeLogInKeydown);
  };

  function closeLogInKeydown(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      onLogInClosure();
    }
  }

  return (
    <Block $isNavOpened={isNavOpened}>
      <Block.Container>
        <Block.Wrapper>
          <Block.BurgerButton type="button" onClick={onBurgerClick}>
            <span className="visually-hidden">Открыть меню</span>
          </Block.BurgerButton>
          <PageLink link={AppRoute.MAIN} description={'ЛИГА Банк'}/>
          <Block.CloseNavButton type="button" $isNavOpened={isNavOpened} onClick={onNavClose}>
            <span className="visually-hidden">Закрыть меню</span>
          </Block.CloseNavButton>
        </Block.Wrapper>

        <Block.Nav $isNavOpened={isNavOpened}>
          <Block.NavList>
            <Block.NavItem>
              <Block.NavLink to={AppRoute.MAIN} $isNavOpened={isNavOpened}>
                Услуги
              </Block.NavLink>
            </Block.NavItem>
            <Block.NavItem>
              <Block.NavLink to={AppRoute.MAIN} $isNavOpened={isNavOpened}>
                Рассчитать кредит
              </Block.NavLink>
            </Block.NavItem>
            <Block.NavItem>
              <Block.NavLink to={AppRoute.CONVERTER} $isNavOpened={isNavOpened}>
                Конвертер валют
              </Block.NavLink>
            </Block.NavItem>
            <Block.NavItem>
              <Block.NavLink to={AppRoute.MAIN} $isNavOpened={isNavOpened}>
                Контакты
              </Block.NavLink>
            </Block.NavItem>
          </Block.NavList>
        </Block.Nav>

        <Block.UserBlock $isNavOpened={isNavOpened}>
          <Block.UserLink href="#" $isNavOpened={isNavOpened} onClick={onLogInOpening}>
            <Block.UserLinkValue $isNavOpened={isNavOpened}>
              Войти в Интернет-банк
            </Block.UserLinkValue>
          </Block.UserLink>
          {isLogInOpened && (
            <PopupLogin
              onLogInClosure={onLogInClosure}
            />
          )}
        </Block.UserBlock>
      </Block.Container>
    </Block>
  );
}

Header.displayName = 'Header';

export default Header;
